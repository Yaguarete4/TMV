import { Link } from "react-router-dom"
import remera from "./remera.jpg"

import "../../styles/ProductsPage.css"

export const ProductsPage = () => {
    return (
        <div className="products">
            <div className="products__items">
                <div className="products__info">
                    <h1>Remeras</h1>
                    <Link to="/">
                        INDUMENTARIA HOMBRE
                    </Link>
                </div>

                <ItemsContainer />
            </div>
        </div>
    );
}

const ItemsContainer = () => {
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
            {itemsData.map((value) => {
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
        price: 18.599
    },
    {
        id: 1,
        name: "Remera session training TMV",
        img: remera,
        price: 18.599
    },
    {
        id: 2,
        name: "Remera session training TMV",
        img: remera,
        price: 18.599
    },
    {
        id: 3,
        name: "Remera session training TMV",
        img: remera,
        price: 18.599
    },
]