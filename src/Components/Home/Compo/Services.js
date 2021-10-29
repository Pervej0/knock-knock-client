import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="md:px-14 p-3 my-14">
      <div className="title text-center mb-12">
        <small className="text-yellow-600 font-bold">Quick Pick</small>
        <h1 className="text-4xl mb-4 font-bold text-gray-800">
          Popular Choices
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((item) => (
          <Product product={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
