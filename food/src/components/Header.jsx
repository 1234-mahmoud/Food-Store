import React from "react";
import "../style/Header.css";
import logo from "../imgs/logo.png";
export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="search">
        <select name="" id="">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <input type="text" />
        <div className="search_icon"></div>
      </div>
    </div>
  );
}
