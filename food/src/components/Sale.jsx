import { BiRightArrowAlt } from "react-icons/bi";
import React from "react";
import "../style/Sale.css";
import pic1 from "../imgs/baked.png";
import pic2 from "../imgs/veg.png";
import MySlider from "../Slider/MySlider";
export default function Sale() {
  return (
    <div className="sale">
      <div className="container">
        <div className="slider">
            <MySlider/>
        </div>
        {/* -------------------------------------- */}
        <div className="products_sale">
          <div className="vegetables card">
            <span className="discount">20% Off
            </span>
                <span className="sale_txt ">SALE</span>
            <h3>Fruits & Vegetables</h3>
            <a href="">
              Shop Collection
                <BiRightArrowAlt />
            </a>
              <img src={pic2} alt="" />
          </div>
          {/* --------------------------------------------- */}
          <div className="baked card">
          <span className="discount">20% Off
            </span>
                <span className="sale_txt">SALE</span>
            <h3>Fruits & Vegetables</h3>
            <a href="">
              Shop Collection
                <BiRightArrowAlt />
            </a>
              <img src={pic1} alt="" className="baked_img"/>
          </div>
        </div>
      </div>
    </div>
  );
}
