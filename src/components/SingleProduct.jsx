import React, { useContext } from "react";
import "./style.css";
import { Cart } from "../context";

function SingleProduct({ prod }) {
  const {cart,setCart} = useContext(Cart);
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name}></img>
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>$ {prod.price.substring(0, 3)}</span>
      </div>
      {!cart.includes(prod) ? (
        <button
          className="Add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to Cart
        </button>
      ) : (
        <button
          className="Add"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          Remove From Cart
        </button>
      )}
    </div>
  );
}

export default SingleProduct;
