import { faUser, faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManageOrderAlt = ({ order, handleRemove, statusHandle }) => {
  const { title, _id, status, fullName } = order;

  return (
    <div className="border border-black p-2 flex items-center gap-8 my-4">
      <div className="p-3">
        <h3 className="text-lg font-bold text-gray-800 hover:text-yellow-500">
          {title.slice(0, 50)}
        </h3>
        <div className="flex items-center gap-2 my-2">
          <FontAwesomeIcon icon={faUser} />
          <h4 className="text-lg text-gray-700">{fullName}</h4>
        </div>
        <p className="px-2 py-1 font-semibold leading-tight rounded-sm">
          <span
            className={
              status === "approved"
                ? "text-green-700 bg-green-100 px-2"
                : "text-yellow-700 bg-yellow-400 px-2"
            }
          >
            {status}
          </span>
          &nbsp;
          <button className="p-1" onClick={() => statusHandle(_id)}>
            <FontAwesomeIcon
              className="cursor-pointer"
              title="edit status"
              icon={faVoteYea}
              size="lg"
            />
          </button>
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

export default ManageOrderAlt;
