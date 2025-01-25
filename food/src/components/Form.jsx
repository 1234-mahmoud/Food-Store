import React from "react";
import "../style/Form.css";
export default function Form() {
  return (
    <div className="discount_form">
      <div className="container">
        <div className="discount_info">
          <div className="information_content">
            <h1>
              Get <span>25% Discount</span> on your first purchase
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident, aut ad! Aperiam asperiores tenetur rem quibusdam
              molestiae.
            </p>
          </div>
        </div>
        <div className="reg">
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter your e-mail" />
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Subscribe to the newsletter
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
