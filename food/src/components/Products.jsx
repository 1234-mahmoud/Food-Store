import React, { useEffect, useState } from "react";
import "../style/Products.css";
import { AiFillStar } from "react-icons/ai";

export default function Products() {
  const [recipes, setRecipes] = useState([]); // State for recipes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes"); // Your given API
        const result = await response.json();
        setRecipes(result.recipes || result); // Adjust based on the API's response structure
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  return (
    <div className="products">
      <div className="product_header">
        <h1>Trending Recipes</h1>
        <div className="product_header_links">
          <a href="#">All</a>
          <a href="#">Desserts</a>
          <a href="#">Main Course</a>
        </div>
      </div>
      <div className="container">
        {recipes.map((recipe) => (
          <div className="card_product" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} /> {/* Adjusted for recipes */}
            <h3>{recipe.name}</h3> {/* Recipe name */}
            <div className="card_info">
              <div className="rate">
                <AiFillStar className="rate_icon" />
                <span>{recipe.rating}</span> {/* Recipe rating */}
              </div>
              <span className="price">{recipe.price ? `$${recipe.price}` : "Free"}</span> {/* Optional price */}
            </div>
            <div className="card_btns">
              <div className="ctr_btns">
                <button className="dec">-</button>
                <span className="amount">0</span>
                <button className="inc">+</button>
              </div>
              <button className="add_cart">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
