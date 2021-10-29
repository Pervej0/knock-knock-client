import React from "react";
import Spinner from "../../../Shared/LoadingSpin/Spinner";

const Order = ({ order, handleRemove }) => {
  const { title, img, _id, status } = order;

  return (
    <div className="border border-black p-2 flex items-center gap-8 my-4">
      <div>
        <img width="120px" src={img} alt="" />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold text-gray-800 hover:text-yellow-500">
          {title}
        </h3>
        <p className="py-2 font-semibold leading-tight rounded-sm">
          <span
            className={
              status === "approved"
                ? "text-green-700 bg-green-100 px-2"
                : "text-yellow-700 bg-yellow-400 px-2"
            }
          >
            {status}
          </span>
        </p>
        <button
          onClick={() => handleRemove(_id)}
          className="my-btn text-white inline-block mt-3 px-4 py-2 bg-red-600 font-semibold rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Order;
