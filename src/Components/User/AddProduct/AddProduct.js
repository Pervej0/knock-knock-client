import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://knock-knock-r0hm.onrender.com/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Product added successfully");
          reset();
        }
      });
  };

  return (
    <>
      <section className="md:px-14 px-3 mb-12">
        <div className="my-14 text-center">
          <h3 className="text-3xl mb-8 font-bold inline-block border-b-2 border-gray-800">
            Add a New Product
          </h3>
        </div>
        <div className="flex md:flex-row flex-col">
          <div>
            <img
              src="https://i.ibb.co/w0K40fL/shopping-mobile-app-online-store-service-smartphone-application-internet-purchase-making-order-custo.jpg"
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full text-left mx-auto border border-black p-4"
          >
            <div className="p-3 grid gap-x-10 sm:grid-cols-2 grid-cols-1">
              <div>
                <label className="text-black text-lg font-semibold block mb-2">
                  Product Title
                </label>
                <input
                  className="w-full border px-2 py-2"
                  defaultValue=""
                  placeholder="Enter title"
                  {...register("title", { required: true })}
                />
              </div>
              <div>
                <label className="text-black text-lg font-semibold block mb-2">
                  Select Category
                </label>
                <select
                  {...register("category")}
                  className="w-full border px-2 py-2"
                >
                  <option className="mb-2" value="fashion">
                    Fashion
                  </option>
                  <option className="mb-2" value="accessories">
                    Accessories
                  </option>
                  <option className="mb-2" value="jewellery">
                    Jewellery
                  </option>
                  <option className="mb-2" value="coocking tools">
                    Coocking Tools
                  </option>
                </select>
              </div>
              <div>
                <label className="text-black text-lg font-semibold block my-2">
                  Product Price
                </label>
                <input
                  className="w-full border px-2 py-2"
                  defaultValue=""
                  type="number"
                  placeholder="Enter price"
                  {...register("price", { required: true })}
                />
              </div>
              <div>
                <label className="text-black text-lg font-semibold block my-2">
                  Description
                </label>
                <textarea
                  className="w-full border px-2 py-2"
                  placeholder="details here"
                  {...register("desc")}
                ></textarea>
              </div>
              <div>
                <label className="text-black text-lg font-semibold block mb-2">
                  add product img's url
                </label>
                <input
                  className="w-full border px-2 py-2"
                  type="text"
                  placeholder="Enter url"
                  {...register("img", { required: true })}
                />
              </div>
            </div>
            <input
              className="px-5 py-2 bg-gray-800 text-white font-semibold rounded"
              type="submit"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
