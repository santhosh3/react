import React, { useState, useEffect, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../context";

function Cartd() {
  const [total, setTotal] = useState();
  
  const {cart,setCart} = useContext(Cart)

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + +curr.price, 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs.{total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Cartd;
