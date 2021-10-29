import { faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManageOrder = ({ order, handleRemove, statusHandle, serial }) => {
  const { title, email, status, _id, fullName } = order;
  return (
    <tr className="text-gray-600">
      <td className="px-4 py-3 border">{serial}</td>
      <td className="px-4 py-3 border text-lg text-md font-semibold">
        {fullName}
      </td>
      <td className="px-4 py-3 border text-md font-semibold">
        {title.slice(0, 50)}
      </td>
      <td className="px-4 py-3 border text-md font-semibold">{email}</td>
      <td className="px-4 py-3 border text-xs">
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
      </td>
      <td className="px-4 py-3 border text-sm">
        <button
          onClick={() => handleRemove(_id)}
          className="text-white bg-red-600 px-2"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ManageOrder;
