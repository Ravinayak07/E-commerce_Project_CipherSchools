import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import HomePageBanner from "../../components/HomePageBanner/HomePageBanner";
import HomeProductsCards from "../../components/HomeProductsCards/HomeProductsCards";

function HomePage({ProductCategoryName, setProductCategoryName}) {
    
  return (
    <div className="HomePageContainer">
      <NavBar />
      <HomePageBanner />
      <HomeProductsCards
        ProductCategoryName={ProductCategoryName}
        setProductCategoryName={setProductCategoryName}
      />
    </div>
  );
}

export default HomePage;
