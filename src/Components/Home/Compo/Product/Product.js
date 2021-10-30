import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, img, price, category, _id, desc } = product;

  return (
    <div className="product">
      <div className="product-img">
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="p-2 py-3 border border-t-0 hover:border-yellow-500 product-content">
        <h3 className="text-xl font-semibold font-sans hover:text-yellow-600">
          {title}
        </h3>
        <small>
          Category: <span className="text-gray-500 capitalize">{category}</span>
        </small>
        <h4 className="text-gray-800 font-mono mb-3">
          <span className="text-2xl">$</span>
          {price}
        </h4>
        <p className="text-sm">{desc}</p>
        <Link
          to={`/products/${_id}`}
          className="my-btn inline-block mt-3 px-4 py-2 bg-yellow-400 font-semibold rounded"
        >
          <FontAwesomeIcon icon={faCartArrowDown} />
          &nbsp; Order Now
        </Link>
      </div>
    </div>
  );
};

export default Product;
