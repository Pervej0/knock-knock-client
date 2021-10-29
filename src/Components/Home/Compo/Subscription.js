import {
  faEnvelope,
  faEnvelopeOpen,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Subscription = () => {
  return (
    <section className="bg-yellow-500 my-12">
      <div className="md:px-14 p-3 py-12">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
          <div className="flex gap-8 items-center">
            <FontAwesomeIcon
              className="text-white"
              icon={faEnvelopeOpen}
              size="2x"
            />
            <div>
              <p className="text-white text-lg font-semibold">
                Get the latest news and offers
              </p>
              <h2 className="text-4xl text-gray-800 font-bold">
                Subscribe to our newsletter
              </h2>
            </div>
          </div>
          <div className="md:text-right text-left">
            <label className="bg-white flex md:w-2/3 w-full md:ml-auto mx-auto">
              <input
                className="pl-3 w-full py-3 focus:outline-none"
                type="email"
                placeholder="Your email ..."
              />
              <button className="my-btn px-4 bg-gray-800 py-3 text-white">
                Subscribe
              </button>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
