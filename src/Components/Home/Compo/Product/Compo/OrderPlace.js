import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../../../Hooks/useAuth";

const OrderPlace = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const onSubmit = (data) => {
    data.title = product.title;
    data.status = "pending";
    data.img = product.img;

    if (!isSubmitted) {
      fetch(`http://localhost:5000/orders`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Successfully ordered.");
            setIsSubmitted(true);
          }
        });
    } else {
      alert("Already ordered.");
    }
  };
  return (
    <section className="bg-gray-800">
      <div className="md:px-14 p-3">
        <div className="border w-1/2 mx-auto my-10 p-8">
          <h1 className="text-4xl uppercase inline-block border-b-2 mb-8 border-fuchsia-600 text-white font-bold">
            Order Details
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="text-white">
            <label className="text-xl font-semibold text-white">
              Full name
            </label>
            <input
              className="border-b bg-transparent focus:outline-none border-white w-full my-2 py-2 px-2"
              defaultValue={user?.displayName}
              placeholder="Enter full name"
              {...register("fullName")}
            />

            {/* include validation with required or other standard HTML validation rules */}
            <label className="text-xl font-semibold text-white">Email</label>
            <input
              className="block border-b-2 bg-transparent focus:outline-none border-white w-full my-2 py-2 px-2"
              defaultValue={user?.email}
              placeholder="Enter email"
              type="email"
              {...register("email", { required: true })}
            />
            <label className="text-xl font-semibold text-white">Address</label>
            <textarea
              className="block border-b-2 bg-transparent focus:outline-none border-white w-full my-2 py-2 px-2"
              placeholder="Enter address"
              {...register("address")}
            ></textarea>
            <label className="text-xl font-semibold text-white">Phone No</label>

            <input
              className="block border-b-2 bg-transparent focus:outline-none border-white w-full my-2 py-2 px-2"
              type="number"
              placeholder="Enter phone ..."
              {...register("Phone", { required: true })}
            />
            <label className="text-xl font-semibold text-white">
              Products Title
            </label>
            <input
              className="block border-b-2 bg-transparent focus:outline-none border-white w-full my-2 py-2 px-2"
              defaultValue={product.title}
              placeholder="Enter title"
              {...register("title")}
            />
            <input
              className="block mt-6 cursor-pointer my-btn px-6 py-2 bg-yellow-400 font-semibold rounded"
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderPlace;
