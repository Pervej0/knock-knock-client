import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <section className="md:px-14 p-3 my-16">
      <div className="title text-center">
        <small>Quick Pick</small>
        <h1 className="text-3xl">Popular Choices</h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {products.map((item) => (
          <Product product={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
