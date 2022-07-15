import React from "react";
import "./HomePageBanner.css";
import banner from "../../images/banner.png";

function HomaPageBanner(){
    return(
        <div className="homepage_banner_container">
            <div className="homepage_banner_left">
               <p>Welcome To</p>
               <p>RaviKart</p>
            </div>
            <div className="homepage_banner_right">
                <img src={banner} />

            </div>
        </div>
    )
}

export default HomaPageBanner;