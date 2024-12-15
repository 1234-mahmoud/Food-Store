import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { TbMeat } from "react-icons/tb";
import { GiSlicedBread } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";
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
    <TbMeat />,
  ];
  const visibleCount = 4; // Number of items visible at a time
  const maxCount = imgs.length - visibleCount; // Stop before showing box 4 fully

  const incCount = () => {
    setCount((prevCount) => Math.min(prevCount + 1, maxCount));
  };

  const decCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };
// --------------------------------------------

const sliderStyle = css`
    transform: translateX(-${count * 25}%);
    transition: transform 0.5s ease-in-out;

    @media (max-width: 767px) {
      transform: translateX(-${count * 100}%);
    }
  `;



  return (
    <div className="category">
      <div className="container">
        <div className="slider">
          <div
            className="slider_img"
            css={sliderStyle}
          >
            {imgs.map((img, index) => (
              <div className="prod_img" key={index}>
                <div className="icon">{img}</div>
                <h3>Fruits & Veges</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="slider_btns">
        <button onClick={incCount} disabled={count >= maxCount}>
          INC
        </button>
        <button onClick={decCount} disabled={count <= 0}>
          DEC
        </button>
      </div>
    </div>
  );
}
