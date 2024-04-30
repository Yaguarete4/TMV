import { createContext, useState } from "react"
import { Outlet } from "react-router-dom"

export const CartContext = createContext(null)

export const CartContextProvider = () => {
    const [cartItems, setCartItems] = useState([])

    const addCartItem = (item) => {
        setCartItems(prev => ([...prev, item]))
        console.log(cartItems);
    }

    return (
        <CartContext.Provider value={{addCartItem}}>
            <Outlet />
        </CartContext.Provider>
    );
}