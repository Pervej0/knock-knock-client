import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import ManageOrder from "./Compo/ManageOrder";
import ManageOrderAlt from "./Compo/ManageOrderAlt";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [loadData, setLoadData] = useState(true);
  const [isApproved, setIsApproved] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoadData(false);
      });
  }, [orders]);

  // handle status update click
  const statusHandle = (id) => {
    if (!isApproved) {
      fetch(`http://localhost:5000/myOrders/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.setIsApproved) {
            const updateOrder = order.filter((item) => setOrders([item]));
            setIsApproved(true);
          }
          console.log(result);
          /*  if (result.acknowledged) {
          const remainOrders = orders.filter((item) => item._id !== id);
          setOrders(remainOrders);
        } */
        });
    } else {
      alert("Already approved");
    }
  };

  // handle remove click
  const handleRemove = (id) => {
    let warning = window.confirm("Are sure wanna delete this product?");
    if (warning) {
      fetch(`http://localhost:5000/myOrders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            const remainOrders = orders.filter((item) => item._id !== id);
            setOrders(remainOrders);
          }
        });
    } else {
      return;
    }
    console.log(id);
  };

  return (
    <section>
      <div className="my-8 text-center">
        <h3 className="text-3xl mb-8 font-bold inline-block border-b-2 border-gray-800">
          All Orders
        </h3>
      </div>
      <div className="order-card">
        {orders.map((item) => (
          <ManageOrderAlt
            key={item._id}
            order={item}
            handleRemove={handleRemove}
            statusHandle={statusHandle}
          />
        ))}
      </div>
      <div className="container mx-auto p-6 font-mono order-table">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">S/N</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Product title</th>
                  <th className="px-4 py-3">email</th>
                  <th className="px-4 py-3">status</th>
                  <th className="px-4 py-3">action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {orders.map((item, index) => (
                  <ManageOrder
                    key={item._id}
                    order={item}
                    handleRemove={handleRemove}
                    serial={index + 1}
                    statusHandle={statusHandle}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageOrders;
