import React from "react";
import "./ProductsPage.css";
import NavBar from "../../components/NavBar/NavBar";
import ProductsPageBody from "../../components/ProductsPageBody/ProductsPageBody";

function ProductsPage({ProductCategoryName, setProductCategoryName}){
    return(
    <div>
      <NavBar />
      <ProductsPageBody ProductCategoryName={ProductCategoryName} setProductCategoryName={setProductCategoryName} />
    </div>
    )
}

export default ProductsPage;