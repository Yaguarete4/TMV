import { useParams } from "react-router-dom";
import { itemsData } from "../../itemsData";
import { ProductInfo } from "../ProductInfo";
import { Slider } from "../Slider"
import remera from "../../remera.jpg";
import remeraB from "../../RemeraNegra.jpg";
import remeraO from "../../RemeraNaranja.jpg";
import short from "../../Short.jpg";
import { AddToCartButton } from "../AddToCartButton";
import "../../styles/ProductDetails.css";

export const ProductDetailPage = () => {
    const params = useParams();
    const product = ProductExist(itemsData, params.itemId);

    return (
        <>
            {product
            ?
                <div className="p-details">
                    <div className="p-details__item">
                        <ProductInfo categoryPath={`${product.categories}`} title={`${product.name}`} productDetails/>

                        <div className="p-details__info">
                            <div className="p-details__slider">
                                <Slider images={images}/>
                            </div>

                            <div className="p-details__text">
                                <h2>{product.name}</h2>
                                <h2 className="p-details__price">{`$${product.price}`}</h2>
                                <p>{`3 cuotas de $${Math.floor(product.price / 3)} sin interes`}</p>
                                <div><AddToCartButton item={product} /></div>
                            </div>
                        </div>
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
    return database.find(x => x.id === parseInt(param)) || false;
}

const images = [remera, remeraB, remeraO, short, remera, short]

