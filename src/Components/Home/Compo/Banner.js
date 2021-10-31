import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-gray-800 banner-section">
      <div className="grid items-center gap-10 lg:grid-cols-2 grid-cols-1 md:px-14 p-3 py-12">
        <div className="mt-16 lg:mt-0" data-aos="fade-left">
          <h1 className="text-3xl md:text-5xl leading-10 font-bold text-white">
            Knock <span className="text-yellow-400">Knock</span> Delivery Center
          </h1>
          <p className="text-white text-lg my-6">
            We are determine to deliver your products as first as possible. Our
            speciality to deliver your product safe and soundly to it's
            destination.
          </p>
          <Link
            to="/contact"
            className="my-btn bg-yellow-500 px-8 text-lg py-3 text-white font-semibold rounded"
          >
            Let's try it
          </Link>
        </div>
        <div data-aos="fade-right">
          <img src="https://i.ibb.co/PjK7hYX/home-banner.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
