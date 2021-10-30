import React from "react";
// import ContactImg from "../../../Images/contact";

const MainContact = () => {
  return (
    <section className="md:14 p-3 mb-14 mt-6">
      <div className="my-8 text-center">
        <h3 className="text-4xl mb-10 font-bold inline-block border-b-2 border-gray-800">
          Get in Touch
        </h3>
      </div>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
        <div>
          <img
            src="https://image.freepik.com/free-vector/flat-design-call-center-concept_52683-13036.jpg"
            alt=""
          />
        </div>
        <div className="col-span-2 border p-6 border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 md:gap-y-10">
            <div className="mb-2">
              <label className="block text-left font-semibold text-xl mb-2">
                Full Name:
              </label>
              <input
                className="py-3 px-2 w-full border-b border-black"
                type="text"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-2">
              <label className="block text-left font-semibold text-xl mb-2">
                Email:
              </label>
              <input
                className="py-3 px-2 w-full border-b border-black"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-2">
              <label className="block text-left font-semibold text-xl mb-2">
                Phone:
              </label>
              <input
                className="py-3 px-2 w-full border-b border-black"
                type="number"
                placeholder="Enter phone no."
              />
            </div>
            <div className="mb-2">
              <label className="block text-left font-semibold text-xl mb-2">
                Details:
              </label>
              <textarea
                className="w-full border-b border-black px-2"
                rows="5"
                placeholder="here.."
              ></textarea>
            </div>
          </div>
          <button className="my-btn py-1 px-5 font-semibold bg-yellow-500 rounded">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainContact;
