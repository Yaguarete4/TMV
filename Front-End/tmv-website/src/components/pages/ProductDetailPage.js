import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../Breadcrumbs";
import { itemsData } from "../../itemsData";
import { ProductInfo } from "../ProductInfo";

export const ProductDetailPage = () => {
    const params = useParams();
    const product = ProductExist(itemsData, params.itemId);

    return (
        <>
            {product
            ?
                <div className="products">
                    <div className="products__items">
                        <ProductInfo categoryPath={`${product.categories}/${product.name}`} />
                    </div>
                </div>
            :

                <div key={1}>
                    Product Not Found
                </div>
            }
        </>
    );
}

//Returns the object that match the param, else it will return false
const ProductExist = (database, param) => {
    return database.find(x => x.id == param) || false;
}

