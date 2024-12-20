import { useState, useEffect } from "react";
import React from "react";
import "../style/BestSelling.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export default function BestSelling() {
  const [count, setCount] = useState(0);
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
  // ------------------------------
  const visibleCount = 6; // Number of items visible at a time
  const maxCount = products.length - visibleCount; // Stop before showing box 4 fully

  const incCount = () => {
    setCount((prevCount) => Math.min(prevCount + 1, maxCount));
  };

  const decCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };
  // --------------------------------------------

  const sliderStyle = css`
    transform: translateX(calc(-${count * 100}% / 6));
    transition: transform 0.5s ease-in-out;

    @media (max-width: 767px) {
      transform: translateX(-${count * 100}%);
    }
  `;
  return (
    <div className="bestselling">
      <div className="bestselling_header">
        <h1>Best selling products</h1>
        <div className="slider_btns_ct">
          <a href="">
            View All Categories <BsArrowRightShort />
          </a>
          <button onClick={decCount} disabled={count <= 0}>
            <AiFillCaretLeft />
          </button>

          <button onClick={incCount} disabled={count >= maxCount}>
            <AiFillCaretRight />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="slider_ct">
          <div className="slider_img_ct" css={sliderStyle}>
            {products.map((p) => (
              <div className="prod_card" key={p.id}>
                <div className="card_selling">
                  <img src={p.image} alt="" />
                  <div className="card_info">
                  <h3>{p.title}</h3>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
