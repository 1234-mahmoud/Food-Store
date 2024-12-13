import { FiShoppingCart } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import "../style/Header.css";
import logo from "../imgs/logo.png";
export default function Header() {
  const [showSearch,setShowSearch] = useState(false);
  const showSearchSidebar=()=>{
    setShowSearch(true)
  }
  const hideSearchSidebar=()=>{
    setShowSearch(false)
  }
  return (
    <div className="header">
      <div className={`search_sidebar ${showSearch?'showSearch_sidebar' : ""}`}>
      <AiOutlineClose className="close_icon" onClick={hideSearchSidebar}/>
        <h1>Search</h1>
      <div className="search">
          <input
            type="text"
            placeholder="What are you looking for?"
          />
          <div className="search_icon">
           <button>Search</button>
          </div>
        </div>
      </div>
      <div className="container">
        <img src={logo} alt="" />
        <div className="search">
          <select name="" id="">
            <option value="">All Categories</option>
            <option value="">Groceries</option>
            <option value="">Drinks</option>
            <option value="">Chocolates</option>
          </select>
          <input
            type="text"
            placeholder="Search for ,ore than 20,000 products"
          />
          <div className="search_icon">
            <BiSearch />
          </div>
        </div>
        <div className="phone">
          <a href="">For Support?</a>
          <span>+980-34984089</span>
        </div>
        <div className="header_icons">
          <BiUser />
          <GiSelfLove />
          <FiShoppingCart />
          <BiSearch onClick={showSearchSidebar}/>
        </div>
        <div className="cart">
          <span>Your Cart</span>
        </div>
      </div>
    </div>
  );
}
