import { useContext } from "react";
import { CartContext } from '../context/CartContextProvider'
import "../styles/AddToCartButton.css"

export const AddToCartButton = ({item}) => {
    const {addCartItem} = useContext(CartContext)

    return (
        <button className="add-to-cart-button" onClick={() => addCartItem(item)}>AGREGAR AL CARRITO</button>
    );
}