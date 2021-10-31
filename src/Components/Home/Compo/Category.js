import {
  faCog,
  faFire,
  faGem,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Category = () => {
  return (
    <section className="md:px-14 p-3 -mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div
          className="rounded-xl p-8 category-box bg-white"
          data-aos="flip-left"
        >
          <button className="p-4 bg-yellow-500 text-white rounded-full">
            <FontAwesomeIcon icon={faGem} size="2x" />
          </button>
          <span className="block text-lg font-bold text-gray-700 mb-3 mt-2">
            Jewellery
          </span>
        </div>
        <div
          className="rounded-xl p-8 category-box bg-yellow-500"
          data-aos="flip-up"
        >
          <button className="p-4 bg-white text-gray-800 rounded-full">
            <FontAwesomeIcon icon={faFire} size="2x" />
          </button>
          <span className="block text-lg font-bold text-gray-700 mb-3 mt-2">
            Fashion
          </span>
        </div>
        <div
          className="rounded-xl p-8 category-box bg-white"
          data-aos="flip-down"
        >
          <button className="p-4 bg-yellow-500 text-white rounded-full">
            <FontAwesomeIcon icon={faCog} size="2x" />
          </button>
          <span className="block text-lg font-bold text-gray-700 mb-3 mt-2">
            Accessories
          </span>
        </div>
        <div
          className="rounded-xl p-8 category-box bg-yellow-500"
          data-aos="flip-right"
        >
          <button className="p-4 bg-white text-gray-800 rounded-full">
            <FontAwesomeIcon icon={faUtensils} size="2x" />
          </button>
          <span className="block text-lg font-bold text-gray-700 mb-3 mt-2">
            Coocking Tools
          </span>
        </div>
      </div>
    </section>
  );
};

export default Category;
