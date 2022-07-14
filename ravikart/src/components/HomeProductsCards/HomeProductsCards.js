import React, {useState, useEffect} from "react";
import "./HomeProductsCards.css";
import electronics from "../../images/Categories/electronics.jpg"

function HomeProductsCards() {

    // const [categoryName, setcategoryName] = useState([]);

    // useEffect(() =>{
    //     fetch("https://fakestoreapi.com/products/categories/")
    // .then(res => res.json())
    // .then(data => setcategoryName(data))
    // .then(error => console.log(error))

    // },[])

     const categoryData = [
        {
            image: electronics,
            title: "Electronics"
        },
        {
            image: electronics,
            title: "Jwellery"
        },
        {
            image: electronics,
            title: "Men's Clothings"
        },
        {
            image: electronics,
            title: "Women's clothings"
        },


     ]

  return (
    <div className="cards_section_container">
      <p className="cards_section_container_title">Products Categories</p>
      <div className="cards_container">
      
        {categoryData.map((value,key) =>(
           <div className="cards_box_container">
           <img src={value.image} />
           <p>{value.title}</p>
           </div>

          ) )}
        {/* {categoryName.map((value,key) =>(
           <div className="cards_box_container">
            <p>{value}</p>
            </div>

        ) )} */}
        
        

      </div>
    </div>
  );
}

export default HomeProductsCards;
