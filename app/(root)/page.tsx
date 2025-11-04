import React from "react";
import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";


const HomePage = () => {
  return (
    <div className="wrapper">
      <ProductList data={sampleData.products} title='Mi lista' />
    </div>
  );
};

export default HomePage;
