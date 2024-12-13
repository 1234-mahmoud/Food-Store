import React, { useState } from "react";
import "./MySlider.css";
import img1 from '../imgs/product-thumb-1.png'
import img2 from '../imgs/baked.png'
import img3 from '../imgs/veg.png'

export default function MySlider() {
  const [count, setCount] = useState(0);
  const imgs = [img1, img2, img3];
  const extendedImgs = [imgs[imgs.length - 1], ...imgs, imgs[0]];

  const navigateToSlide = (index) => {
    setCount(index);
  };

  return (
    <div className="container">
      <div className="slider">
        <div
          className="slider_img"
          style={{
            transition: "transform .5s ease-in-out",
            transform: `translateX(-${Math.min(count, imgs.length - 1) * 615}px)`,
          }}
        >
          {extendedImgs.map((img, index) => (
            <div key={index} className="img_com">
             <div className="slider_info">
             <span>100% Natural</span>
              <h3>
                Fresh Smoothing & Vegetables
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>SHOP NOW</button>
             </div>
             <div className="prod_img">

              <img src={img} alt="" />
             </div>
            </div>
          ))}
        </div>

        {/* Bullets */}
        <div className="bullets">
          {imgs.map((_, index) => (
            <span
              key={index}
              className={`bullet ${index === count ? "active" : ""}`}
              onClick={() => navigateToSlide(index)}
            ></span>
          ))}
        </div>

      </div>
    </div>
  );
}


