import React from "react";
import "../style/DownloadApp.css";
import pic from "../imgs/phone.png";
export default function DownloadApp() {
  return (
    <div className="download">
      <div className="container">
        <div className="phone">
            <img src={pic} alt="" />
        </div>
        <div className="download_info">
          <h1>Shop faster with foodmart App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            sapiente ducimus, placeat atque, tempore voluptas dolores reiciendis
            labore debitis magnam, ex necessitatibus totam optio aperiam natus
            id ut adipisci libero!
          </p>
          <div className="download_btns">
            <button>App Store</button>
            <button>Google Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}
