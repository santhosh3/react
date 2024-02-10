import React, { createContext } from "react";

export const Cart = createContext();

const Context = ({children}) => {
    const [cart, setCart] = React.useState([]);

    return <Cart.Provider value={{cart,setCart}}>
        {children}
    </Cart.Provider>
}

export default Context;