import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Features = () => {
  return (
    <section>
      <div className="grid md:grid-cols-2 grd-cols-1 gap-0">
        <div>
          <img
            className="w-full"
            src="https://i.ibb.co/N6S1L3v/sit-photo.jpg"
            alt=""
          />
        </div>
        <div className="bg-gray-800 text-left flex justify-center items-center flex-col pl-12 font-bold">
          <h1 className="text-3xl md:text-5xl text-white mb-6">
            Sit at Home
            <br />
            <span className="text-yellow-400">We Will Take Care</span>
          </h1>
          <p>
            Express delivery is the fastest form of shipping. The customer pays
            an extra shipping cost for this type of delivery, as the shipment
            will get transported to him anywhere between 24 to 72 hours
          </p>
          <div className="flex flex-wrap gap-8 my-12">
            <div className="text-center">
              <FontAwesomeIcon icon={faClock} size="2x" />
              <h5>Fast Delivery</h5>
              <p>in 1 hour</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faClock} size="2x" />
              <h5>Fast Delivery</h5>
              <p>in 1 hour</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faClock} size="2x" />
              <h5>Fast Delivery</h5>
              <p>in 1 hour</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faClock} size="2x" />
              <h5>Fast Delivery</h5>
              <p>in 1 hour</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
