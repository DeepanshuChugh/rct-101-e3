import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setcart] = useState(false);
  console.log('cart:', cart)

  useEffect(()=> {
    const fetchData = async () => {
      const res = await axios("http://localhost:8080/cartItems");
      setcart(res.data);
    }
    fetchData();
  }, [] )

  const updateCart = (id) => {
      const updatedData = async ( ) => {
        const res =  axios.patch(`http://localhost:8080/cartItems/${id}`);
        setcart(res.data)
        window.location.reload();
      }
      updatedData();
  };

  const deleteCart = (id) => {
        const deleteData =  async () => {
              await axios.delete(`http://localhost:8080/cartItems/${id}`);
              window.location.reload();
        };
        deleteData();
  };


  return <CartContext.Provider value={{ cart, updateCart, deleteCart }}>{children}</CartContext.Provider>;
};