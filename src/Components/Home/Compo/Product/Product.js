import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ product }) => {
  const { title, img, price, category } = product;
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="p-2 py-3 border border-yellow-800">
        <h3 className="text-xl font-semibold hover:text-yellow-600">{title}</h3>
        <small>
          Category: <span className="text-gray-500 capitalize">{category}</span>
        </small>
        <h4 className="text-gray-800 font-mono mb-3">
          <span className="text-2xl">$</span>
          {price}
        </h4>
        <button className="my-btn px-4 py-2 bg-yellow-400 font-semibold rounded">
          <FontAwesomeIcon icon={faCartArrowDown} />
          &nbsp; Order Now
        </button>
      </div>
    </div>
  );
};

export default Product;
