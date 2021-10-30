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
    fetch(`https://fierce-tor-50016.herokuapp.com/myOrders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoadData(false);
      });
  }, [orders]);

  // handle status update click
  const statusHandle = (id) => {
    if (!isApproved) {
      fetch(`https://fierce-tor-50016.herokuapp.com/myOrders/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.setIsApproved) {
            const updateOrder = order.filter((item) => setOrders([item]));
            setIsApproved(true);
          }
          console.log(result);
        });
    } else {
      alert("Already approved");
    }
  };

  // handle remove click
  const handleRemove = (id) => {
    let warning = window.confirm("Are sure wanna delete this product?");
    if (warning) {
      fetch(`https://fierce-tor-50016.herokuapp.com/myOrders/${id}`, {
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
  };

  return (
    <section className="md:px-14 p-3 my-14">
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
      <div className="flex flex-col order-table">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
      </div>
    </section>
  );
};

export default ManageOrders;
