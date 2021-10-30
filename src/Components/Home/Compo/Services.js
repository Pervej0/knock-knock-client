import React, { useEffect, useState } from "react";
import Spinner from "../../Shared/LoadingSpin/Spinner";
import Product from "./Product/Product";

const Services = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fierce-tor-50016.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="md:px-14 p-3 my-14 services-section">
      <div className="title text-center mb-12">
        <small className="text-yellow-600 font-bold">Quick Pick</small>
        <h1 className="text-4xl mb-4 font-bold text-gray-800">
          Popular Choices
        </h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {products.map((item) => (
            <Product product={item} key={item._id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
