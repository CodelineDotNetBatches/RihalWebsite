import React from "react";
import searchIcon from "../../../icons/search.svg";
import "./ProductsHero.css"; 

const ProductsHero = () => {
  return (
    <div className="products-hero">

      <div className="products-header">
        <div className="products-title-wrapper">
          <div className="products-subtitle">Products</div>
          <div className="products-main-title">
            Empowering Organizations with Future-Ready{" "}
            <span className="highlight">Products</span>
          </div>
        </div>
        <div className="products-description">
          Our products are designed to solve real-world challenges, enhance efficiency, and unlock opportunities for growth. From intelligent platforms to specialized digital tools, Rihal’s products combine innovation, scalability, and security to deliver lasting impact.
        </div>
      </div>

    
      <div className="search-filter-wrapper">
        <div className="search-filter-container">
          {/* Search Box */}
          <div className="search-box">
            <div className="search-input">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <span className="placeholder-text">Search A Product</span>
            </div>
          </div>

     
          <div className="filter-box">
            <span className="placeholder-text">Filter By</span>
            <div className="filter-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
