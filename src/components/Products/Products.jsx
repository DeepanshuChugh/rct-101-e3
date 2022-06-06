import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import axios from "axios";

const Products = () => {

  
  const [data, setData] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      const res = await axios("http://localhost:8080/products");
      setData(res.data);
    }
    fetchData();
  }, [] );

  return <div>
        <h1>Products</h1>
        <div>
          {data.map(item=> (
              <Product key={item.id}  id={item.id} />
          ))}
        </div>
    </div>;
};

export default Products;