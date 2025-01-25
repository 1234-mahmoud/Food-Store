import { useState, useEffect } from "react";
import React from "react";
import "../style/BestSelling.css";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillCaretLeft, AiFillCaretRight, AiFillStar } from "react-icons/ai";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function BestSelling() {
  const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const result = await response.json();
        setRecipes(result.recipes || []); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch food data
  }, []);

  useEffect(() => {
    const calculateVisibleCount = () => {
      if (window.innerWidth <= 767) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 991) {
        setVisibleCount(3);
      } else {
        setVisibleCount(6);
      }
    };

    calculateVisibleCount(); // Set initial visible count
    window.addEventListener("resize", calculateVisibleCount); // Add resize event

    return () => {
      window.removeEventListener("resize", calculateVisibleCount); // Cleanup
    };
  }, []);

  const maxCount = Math.max(0, recipes.length - visibleCount); // Calculate max count

  const incCount = () => {
    setCount((prevCount) => Math.min(prevCount + 1, maxCount));
  };

  const decCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  // --------------------------------------------

  const sliderStyle = css`
     transform: translateX(calc(-${count * (100 / visibleCount)}%));
    transition: transform 0.5s ease-in-out;

    @media (max-width: 767px) {
      transform: translateX(-${count * 100}%);
    }

      @media (min-width:768px) and (max-width:991px){
      transform: translateX(calc(-${count * (100 / visibleCount)}%));
    }

  `;
  return (
    <div className="bestselling">
    <div className="bestselling_header">
      <h1>Best Selling Recipes</h1>
      <div className="slider_btns_ct">
        <a href="#">
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
          {recipes.map((recipe) => (
            <div className="prod_card" key={recipe.id}>
              <div className="card_selling">
                <img src={recipe.image} alt={recipe.name} />
                <div className="card_info">
                  <h3>{recipe.name}</h3>
                  <div className="rate">
                    <AiFillStar className="rate_icon" />
                    <span>{recipe.rating || "N/A"}</span>
                  </div>
                  <span className="price">
                    {recipe.price ? `$${recipe.price}` : "Free"}
                  </span>
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
