import React from "react";
import "../style/Blog.css";
import pic1 from "../imgs/blog1.jpg";
import pic2 from "../imgs/blog2.jpg";
import pic3 from "../imgs/blog3.jpg";
export default function Blog() {
  const imgs = [pic1, pic2, pic3];
  return (
    <div className="blog">
        <div className="blog_header">
            <h1>Our Recent Blog</h1>
            <a href="">Read All Activities</a>
        </div>
      <div className="container">
        {imgs.map((b, index) => (
          <div className="card_blog" key={index}>
            <img src={b} alt="" />
            <a href="">Top 10 casual look ideas to dress up your kids</a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ut
              libero, eius animi quaerat aspernatur impedit magnam? Perspiciatis
             
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
