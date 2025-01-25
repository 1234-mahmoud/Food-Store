import React from "react";
import "../style/Discount.css";
import pic from "../imgs/product-thumb-1.png";
export default function Discount() {
  return (
    <div className="discount">
      <div className="container">
        <div className="dis_card">
          <div className="info">
            <span>Upto 25% Off</span>
            <h2>Luxa Dark Chocolate</h2>
            <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button>SHOW NOW</button>
          </div>
          <div className="dis_card_img">
            <img src={pic} alt="" />
          </div>
        </div>
       {/* -------------------------- */}
       <div className="dis_card">
          <div className="info">
            <span>Upto 25% Off</span>
            <h2>Luxa Dark Chocolate</h2>
            <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button>SHOW NOW</button>
          </div>
          <div className="dis_card_img">
            <img src={pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
