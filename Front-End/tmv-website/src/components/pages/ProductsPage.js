import { Link } from "react-router-dom"
import { splitCategories } from "../Category"
import { itemsData } from "../../itemsData"
import { ProductInfo } from "../ProductInfo"

import "../../styles/ProductsPage.css"

export const ProductsPage = (props) => {
    const categoryPath = props.categories ? props.categories : 'Productos';
    //if categories prop was filled the categoryPath will be splited to create an array of categories. Else the string will be empty so every item will be displayed
    const categories = props.categories ? splitCategories(categoryPath) : '';

    return (
        <div className="products">
            <div className="products__items">
                <ProductInfo categoryPath={categoryPath}/>

                <ItemsContainer categories={categories} />
            </div>
        </div>
    );
}

const ItemsContainer = (props) => {
    const items = props.categories ? filterCategories(props.categories) : itemsData;

    const Item = (props) => {
        return (
            <div className="items-container__item">
                <Link to="remera">
                    <img src={props.img} alt="item"/>

                    <div className="items-container__item-info">
                        {props.name}
                        <p className="items-container__price">{`${props.price}`}</p>
                        <p className="items-container__description">{`3 cuotas sin interes de ${(props.price / 3).toString().slice(0, 5)}`}</p>     
                    </div>
                </Link>
                <button className="items-container__add-cart">AGREGAR AL CARRITO</button>
            </div>
        );
    }

    return (
        <div className="items-container">
            {items.length === 0 && <h1>Pagina no encontrada</h1>}

            {items.map((value) => {
                return <Item key={value.id} name={value.name} img={value.img} price={value.price} />
            })}
        </div>
    );
}

const filterCategories = (categories) => {
    return itemsData.filter(item => {
            //Uses the slitCategories function, it return an array with the categories, instead of the input value which is a string: hombre/remera/corta, ['hombre','remera','corta']
            const itemCategories = splitCategories(item.categories);

            //Comparing the item categories with the url categories to select witch product should be displayed.
            let retValue = true;

            for(let i = 0; i < categories.length; i++){
                if(!itemCategories[i]) {
                    retValue = false;
                    break;
                }

                if(categories[i].toUpperCase() !== itemCategories[i].toUpperCase()) {
                    retValue = false
                    break;
                };
            }
            
            return retValue;
        })
}