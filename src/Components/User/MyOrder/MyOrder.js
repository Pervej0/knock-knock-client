import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../Shared/LoadingSpin/Spinner";
import Order from "./Compo/Order";
import OrderTable from "./Compo/OrderTable";
import "./MyOrder.css";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoadData(false);
      });
  }, [user]);

  // console.log(orders);

  const handleRemove = (id) => {
    let warning = window.confirm("Are sure wanna delete this product?");
    if (warning) {
      fetch(`http://localhost:5000/myOrders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            const remainOrders = orders.filter((item) => item._id !== id);
            setOrders(remainOrders);
          }
        });
    } else {
      return;
    }
  };

  return (
    <section className="md:px-14 p-3 my-10">
      {loadData && <Spinner />}
      <div className="my-8 text-center">
        <h3 className="text-3xl mb-8 font-bold inline-block border-b-2 border-gray-800">
          See Your Order List
        </h3>
      </div>
      <div className="order-card">
        {orders.map((item) => (
          <Order key={item._id} order={item} handleRemove={handleRemove} />
        ))}
      </div>
      <div class="flex flex-col order-table">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">S/N</th>
                    <th className="px-4 py-3">Product Title</th>
                    <th className="px-4 py-3">images</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {orders.map((item, index) => (
                    <OrderTable
                      key={item._id}
                      order={item}
                      handleRemove={handleRemove}
                      serial={index + 1}
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

export default MyOrder;
