import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  fetch("https://moontech-server-8otg.onrender.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data.data));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Home;
