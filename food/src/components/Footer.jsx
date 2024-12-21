import { AiFillAmazonCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import React from "react";
import "../style/Footer.css";
import pic1 from "../imgs/logo.png";
export default function Footer() {
  const arr = ["Customer Service1", "Customer Service2", "Customer Service3"];
  return (
    <div className="footer_">
      <div className="container">
        <div className="footer_social">
          <div className="logo">
            <img src={pic1} alt="" />
          </div>
          <div className="social">
            <FaFacebookF />
            <AiOutlineTwitter />
            <AiFillYoutube />
            <AiOutlineInstagram />
            <AiFillAmazonCircle />
          </div>
        </div>

        {arr.map((s) => (
          <div className="services">
            <h3>{s}</h3>
            <a href="">Link1</a>
            <a href="">Link2</a>
            <a href="">Link3</a>
            <a href="">Link4</a>
            <a href="">Link5</a>
            <a href="">Link6</a>
          </div>
        ))}

        <div className="footer_subscribtion">
          <h3>Subscribe Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className="mail">
            <input type="email" name="" id="" placeholder="enter your mail"/>
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
