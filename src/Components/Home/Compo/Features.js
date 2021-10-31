import {
  faClock,
  faMapMarked,
  faMobile,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Features = () => {
  return (
    <section className="features-section my-24">
      <div className="grid md:grid-cols-2 grd-cols-1 gap-0">
        <div>
          <img
            className="w-full h-full"
            src="https://i.ibb.co/N6S1L3v/sit-photo.jpg"
            alt=""
          />
        </div>
        <div className="bg-gray-800 text-left flex items-center font-bold py-14 features-content">
          <div className="md:px-10 p-3">
            <h1 className="text-3xl md:text-5xl text-white mb-10">
              Sit at Home
              <br />
              <span className="text-yellow-400">We Will Take Care</span>
            </h1>
            <p className="text-lg text-white">
              Express delivery is the fastest form of shipping. The customer
              pays an extra shipping cost for this type of delivery, as the
              shipment will get transported to him anywhere between 24 to 72
              hours
            </p>
            <div className="flex flex-wrap gap-8 my-12">
              <div className="text-center icon">
                <button className="text-yellow-500 hover:text-gray-200">
                  <FontAwesomeIcon icon={faMapMarked} size="3x" />
                </button>
                <h5 className="text-white mt-4">
                  Wide coverage <br />
                  area
                </h5>
              </div>
              <div className="text-center icon">
                <button className="text-yellow-500 hover:text-gray-200">
                  <FontAwesomeIcon icon={faClock} size="3x" />
                </button>
                <h5 className="text-white mt-4">
                  Fast Delivery <br />
                  in 1 hour
                </h5>
              </div>
              <div className="text-center icon">
                <button className="text-yellow-500 hover:text-gray-200">
                  <FontAwesomeIcon icon={faMobile} size="3x" />
                </button>
                <h5 className="text-white mt-4">
                  Amazing <br />
                  Mobile App
                </h5>
              </div>
              <div className="text-center icon">
                <button className="text-yellow-500 hover:text-gray-200">
                  <FontAwesomeIcon icon={faUsers} size="3x" />
                </button>
                <h5 className="text-white mt-4">
                  350 + member <br />
                  family
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
