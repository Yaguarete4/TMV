import { Link } from "react-router-dom"
import { splitCategories } from "../Category"
import { Breadcrumbs, firstToUpper } from "../Breadcrumbs"
import remera from "./remera.jpg"
import { ReactComponent as OrangeBackArrow } from "../../images/OrangeBackArrow.svg" 

import "../../styles/ProductsPage.css"

export const ProductsPage = (props) => {
    const categories = props.categories ? props.categories : ['Productos'];

    const BackToPrev = () => {
        //It's the url that you will be send when you press the button
        let backURL = '';
        //The string that indicates you which page section are you coming back
        let backString = 'INICIO';

        for(let i = 0; i < categories.length; i++){
            if(i !== categories.length - 1) backURL += `/${categories[i]}`;
        }

        if((categories.length - 2) !== -1) backString = categories[categories.length - 2].toUpperCase();
        else backURL = '/';

        return (
            <Link to={backURL}>
                <OrangeBackArrow />
                {backString}
            </Link>
        );
    }

    return (
        <div className="products">
            <div className="products__items">
                <div className="products__info">
                    <Breadcrumbs />
                    <h1>{firstToUpper(categories[categories.length - 1])}</h1>
                    <BackToPrev />
                </div>

                <ItemsContainer categories={props.categories} />
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

const itemsData = [
    {
        id: 0,
        name: "Remera session training TMV",
        img: remera,
        price: 18.599,
        categories: "hombre/remeras/XL"
    },
    {
        id: 1,
        name: "Remera session training TMV",
        img: remera,
        price: 18.599,
        categories: "mujer/remeras"
    },
    {
        id: 2,
        name: "Remera session training TMV",
        img: remera,
        price: 18.599,
        categories: "hombre/remeras"
    },
    {
        id: 3,
        name: "Remera session training TMV",
        img: remera,
        price: 18.599,
        categories: "hombre/remeras/L"
    },
]

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