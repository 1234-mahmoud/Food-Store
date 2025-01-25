import { useState,useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
/** @jsxImportSource @emotion/react */
import { TbMeat } from "react-icons/tb";
import { GiSlicedBread } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";
import { BsFillCupFill } from "react-icons/bs";
import React from "react";
import "../style/Category.css";
import { css } from "@emotion/react";

export default function Category() {
  const [count, setCount] = useState(0);
  const imgs = [
    <GiFruitBowl />,
    <BiDrink />,
    <GiSlicedBread />,
    <TbMeat />,
    <GiFruitBowl />,
    <BiDrink />,
    <GiSlicedBread />,
    <TbMeat />,
    <GiFruitBowl />,
    <BiDrink />,
    <GiSlicedBread />,
    <TbMeat />,
    <GiFruitBowl />,
    <BiDrink />,
    <GiSlicedBread />,
    <TbMeat />,
    <GiFruitBowl />,
    <BiDrink />,
    <GiSlicedBread />,
    <BsFillCupFill />,
  ];
  const [visibleCount,setVisibleCount]=useState(4)
  useEffect(() => {
      // Function to calculate visible items based on screen width
      const calculateVisibleCount = () => {
        if (window.innerWidth <= 767) {
          setVisibleCount(1);
        } else if (window.innerWidth <= 991) {
          setVisibleCount(3);
        } else {
          setVisibleCount(4);
        }
      };
  
      // Set initial visible count
      calculateVisibleCount();
  
      // Add resize event listener
      window.addEventListener("resize", calculateVisibleCount);
  
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", calculateVisibleCount);
      };
    }, []);
    
    const maxCount = imgs.length - visibleCount; // Stop before showing box 4 fully
  
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
    <div className="category">
      <div className="cat_header">
        <h1>Category</h1>
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
            {imgs.map((img, index) => (
              <div className="prod_img" key={index}>
                <div className="icon">{img}</div>
                <h3>Fruits & Veges</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
