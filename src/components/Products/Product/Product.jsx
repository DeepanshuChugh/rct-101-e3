import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = ({ id }) => {

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`http://localhost:8080/products/${id}`);
      setData(res.data);
    };
    fetchData();
  }, [id]);

  const [cartItem, setcartItem] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`http://localhost:8080/cartItems/${id}`);
      setcartItem(res.data);
    };
    fetchData();
  }, [id]);
  
  const counter = (c) => {
    setcartItem(cartItem.count+c)
  }

const addCart = (c) => {
  setcartItem(
    ...cartItem,
    cartItem.count = cartItem.count + c,
  )
}
  return (
    <div data-cy={`product${data.id}`} style={{border:'1px solid black'}}>
      <h3 data-cy="product-name">{data.name}</h3>
      <h6 data-cy="product-description">{data.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>addCart(1)}>Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>counter(1)}>+</button>
        <span data-cy="product-count">{cartItem.count}</span>
        <button data-cy="product-decrement-cart-item-count-button"  onClick={()=>counter(-1)}>-</button>
        <button data-cy="product-remove-cart-item-button" >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default Product;