import { faFire, faGem, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Category = () => {
  return (
    <section className="md:px-14 p-3 my-16">
      <div className="grid grid-cols-4 gap-6">
        <div className="border border-black">
          <FontAwesomeIcon icon={faGem} size="2x" />
          <span>Jewellery</span>
        </div>
        <div className="border border-black">
          <FontAwesomeIcon icon={faFire} size="2x" />
          <span>Fashion</span>
        </div>
        <div className="border border-black">
          <FontAwesomeIcon icon={faGem} size="2x" />
          <span>Accessories</span>
        </div>
        <div className="border border-black">
          <FontAwesomeIcon icon={faUtensils} size="2x" />
          <span>Coocking Tools</span>
        </div>
      </div>
    </section>
  );
};

export default Category;
