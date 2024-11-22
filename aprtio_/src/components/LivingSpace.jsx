import React from "react";
import "../style/LivingSpace.css";
import pic5 from "../imgs/pic5.jpg";
import pic6 from "../imgs/image-gallery.png";
import pic7 from "../imgs/spatula.png";
import pic8 from "../imgs/video.png";
import pic9 from "../imgs/cctv.png";
export default function LivingSpace() {
  return (
    <div className="living">
      <div className="branches">
        <h1>Apartio Introducing Next Level Living Space</h1>
        <p>
          Elit sed tempor incididunt umt laboret dolore magn aliqua enim sed
          ipsum dolor quis nostrud exercitation lamco ea consequat. Duis aute
          irure dolor in reprehenderit velit esse cillum dolore eu fugiat.
        </p>

        <div className="branches_cont">
          <div className="branch_">
            <div className="icon">
              <img src={pic8} alt="" />
            </div>
            <h2>Entertainment</h2>
            <p>Mini Home Cinema View</p>
            <div className="line"></div>
          </div>

          <div className="branch_">
            <div className="icon">
              <img src={pic9} alt="" />
            </div>
            <h2>Fully Secured</h2>
            <p>24/7 With CCTV Cameras</p>
            <div className="line"></div>

          </div>

          <div className="branch_">
            <div className="icon">
              <img src={pic6} alt="" />
            </div>
            <h2>Outside View</h2>
            <p>Garden, Deck, Roof Space...</p>
          </div>

          <div className="branch_">
            <div className="icon">
              <img src={pic7} alt="" />
            </div>
            <h2>Chef & Cooking</h2>
            <p>Fresh Pizza & Coffee etc</p>
          </div>
        </div>
      </div>
      <div className="living_pic">
        <img src={pic5} alt="" />
      </div>
    </div>
  );
}
