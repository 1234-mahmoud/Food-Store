import { AiOutlineClose } from "react-icons/ai";
import { FiList } from "react-icons/fi";
import React, { useState } from "react";
import "../style/Links.css";
export default function Links() {
  const [showLinks, setShowLinks] = useState(false);
  const show = () => {
    setShowLinks(true);
  };
  const hide = () => {
    setShowLinks(false);
  };
  return (
    <div className="links">
      <div className="list_icon" onClick={show}>
        <FiList />
      </div>
      <div className={`container ${showLinks ? "show" : ""}`}>
        <div className="close" onClick={hide}>
          <AiOutlineClose />
        </div>
       
        <select name="" id="">
          <option value="">Shop by department</option>
          <option value="">department1</option>
          <option value="">department2</option>
          <option value="">department3</option>
        </select>
        
        <a href="">Women</a>
        <a href="">Men</a>
        <a href="">Kids</a>
        <a href="">Accessories</a>
        <select name="" id="">
          <option value="">Pages</option>
          <option value="">link1</option>
          <option value="">link2</option>
          <option value="">link3</option>
          <option value="">link4</option>
          <option value="">link5</option>
        </select>
        <a href="">Brand</a>
        <a href="">Safe</a>
        <a href="">Blog</a>
      </div>
    </div>
  );
}
