import { faFire, faGem, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Category = () => {
  return (
    <section className="md:px-14 p-3 -mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        <div className="bg-gray-50 rounded-2xl p-12 category-box bg-yellow-500">
          <FontAwesomeIcon icon={faGem} size="2x" />
          <span className="block text-lg font-semibold text-white mb-3">
            Jewellery
          </span>
        </div>
        <div className="bg-gray-50 rounded-2xl p-12 category-box bg-yellow-500">
          <FontAwesomeIcon icon={faFire} size="2x" />
          <span className="block text-lg font-semibold text-white mb-3">
            Fashion
          </span>
        </div>
        <div className="bg-gray-50 rounded-2xl p-12 category-box bg-yellow-500">
          <FontAwesomeIcon icon={faGem} size="2x" />
          <span className="block text-lg font-semibold text-white mb-3">
            Accessories
          </span>
        </div>
        <div className="bg-gray-50 rounded-2xl p-12 category-box bg-yellow-500">
          <FontAwesomeIcon icon={faUtensils} size="2x" />
          <span className="block text-lg font-semibold text-white mb-3">
            Coocking Tools
          </span>
        </div>
      </div>
    </section>
  );
};

export default Category;
