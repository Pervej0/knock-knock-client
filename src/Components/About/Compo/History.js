import React from "react";

const History = () => {
  return (
    <section className="md:px-14 p-3 my-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="md:text-5xl text-4xl mb-5 font-bold font-mono">
            The <span className="text-yellow-600">history</span>
          </h1>
          <p className="font-serif">
            Around 400 BC, the prince Cyrus the Younger enlisted runners, homing
            pigeons, and men on horseback to deliver important messages
            throughout his kingdom and beyond. Horses eventually replaced
            couriers-on-foot. The Greeks and Romans made courier by horse and
            chariot the most common delivery method.
            <br />
            <br />
            Couriers are distinguished from ordinary mail services by features
            such as speed, security, tracking, signature, specialization and
            individualization of express services, and swift delivery times,
            which are optional for most everyday mail services.
            <br />
            <br />
            Xenophon attributed the first use of couriers to the Persian prince
            Cyrus the Younger.
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/ct7X2Lk/photo-1491841651911-c44c30c34548-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg"
            alt="history"
          />
        </div>
      </div>
    </section>
  );
};

export default History;
