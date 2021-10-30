import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white md:p-12 py-10 px-4 font-serif">
      <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-bpetween md:px-4 md:gap-6 items-baseline pb-10">
        <div>
          <div className="mb-3 border-b pb-2 border-white font-serif">
            <h3 className="text-2xl text-white italic font-semibold tracking-wide">
              &nbsp;Knock <span className="text-yellow-400">Knock</span>
            </h3>
          </div>
          <div>
            <p className="font-mono">
              Open your door, promise you would definetly surprise surpirise.
            </p>
          </div>
        </div>
        <div className="col-span-2 col-12 flex flex-wrap items-center md:justify-around justify-between">
          <div className="information">
            <h4 className="text-xl font-semibold text-white mb-2">
              Information
            </h4>
            <ul className="ps-0 list-unstyled">
              <li>Privacy Policy</li>
              <li>Latest News</li>
              <li>Supports</li>
              <li>Career</li>
              <li>Events</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="helpfulLinks">
            <h4 className="text-xl font-semibold text-white mb-2">
              Helpful Links
            </h4>
            <ul className="ps-0 list-unstyled">
              <li>Services</li>
              <li>Latest News</li>
              <li>Supports</li>
              <li>Tearm & Condition</li>
              <li>Events</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-8 col-12">
          <h4 className="mb-4 text-xl font-semibold text-white">Follow Us</h4>
          <ul className="ps-0 list-unstyled">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkdin</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dashed pt-2 text-center">
        <small>
          2019 &copy; corportaionLtd All Right reserved ; Design by{" "}
          <span className="text-yellow-300 cursor-pointer">Pervej</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
