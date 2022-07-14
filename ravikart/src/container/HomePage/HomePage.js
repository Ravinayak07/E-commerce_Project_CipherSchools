import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import HomeProductsCards from "../../components/HomeProductsCards/HomeProductsCards";

function HomePage(){
    return(
     <div className="HomePageContainer">
        <NavBar />
        <HomeProductsCards />
     </div>
    )
}

export default HomePage;