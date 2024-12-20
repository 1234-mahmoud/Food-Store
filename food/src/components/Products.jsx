import React, { useEffect, useState } from "react";
import "../style/Products.css";
import { AiFillStar } from "react-icons/ai";
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch function
  }, []);
  return (
    <div className="products">
      <div className="product_header">
        <h1>Trending Products</h1>
        <div className="product_header_links">
          <a href="">All</a>
          <a href="">Food</a>
          <a href="">Tools</a>
        </div>
      </div>
      <div className="container">
        {products.map((p) => (
          <div className="card_product">
            <img src={p.image} alt="" />
            <h3>{p.title}</h3>
            <div className="card_info">
              <div className="rate">
                <AiFillStar className="rate_icon" />
                <span>{p.rating.rate}</span>
              </div>
              <span className="price">{p.price}$</span>
            </div>
            <div className="card_btns">
              <div className="ctr_btns">
                <button className="dec">-</button>
                <span className="amount">0</span>
                <button className="inc">+</button>
              </div>
              <button className="add_cart">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
