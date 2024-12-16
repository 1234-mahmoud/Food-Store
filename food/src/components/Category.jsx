import { BsArrowRightShort } from "react-icons/bs";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
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

  // const imgs = [
  //  "img1",
  //  "img2",
  //  "img3",
  //  "img4",
  //  "img5",
  //  "img6",
  //  "img7",
  //  "img8",
  //  "img9",
  //  "img10",
  //  "img11",
  //  "img12",
  //  "img13",
  //  "img14",
  //  "img15",
  //  "img16",
  //  "img17",
  //  "img18",
  //  "img19",
  //  "img20",
  // ];

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
