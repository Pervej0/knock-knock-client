import React from "react";

const ContactIntro = () => {
  return (
    <section className="md:px-14 p-3 my-14">
      <div className="grid md:grid-cols-3 gap-8 items-center grid-cols-1">
        <div className="col-span-2">
          <div>
            <h2 className="text-4xl font-bold mb-2 font-sans">
              Knock <span className="text-yellow-500">Kncok</span> Service
              Center
            </h2>
            <p className="pr-5 font-mono">
              Usually opening hours 8am to 5pm. We have 24/7 days call srvice.
              Feel free to knock. You guys are always welcome to us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 mt-10">
            <div className="mb-4">
              <label className="inline-block text-left font-semibold text-xl mb-2 border-b-2 border-black">
                Location:
              </label>
              <h5 className="font-semibold text-lg">
                Country:{" "}
                <span className="text-sm text-yellow-600">
                  South Asia, Bangladesh
                </span>
              </h5>
              <h5 className="font-semibold text-lg">
                City: <span className="text-sm text-yellow-600">Dhaka</span>
              </h5>
              <h5 className="font-semibold text-lg">
                Street:{" "}
                <span className="text-sm text-yellow-600">
                  19/C Gulshan Road
                </span>
              </h5>
              <h5 className="font-semibold text-lg">
                Postal Code:{" "}
                <span className="text-sm text-yellow-600">1212</span>
              </h5>
            </div>
            <div className="mb-4">
              <label className="inline-block text-left font-semibold text-xl mb-2 border-b-2 border-black">
                Contact:
              </label>
              <h5 className="font-semibold text-lg">
                Phone:{" "}
                <span className="text-sm text-yellow-600">
                  +880-172444****, +880-172444****,
                </span>
              </h5>
              <h5 className="font-semibold text-lg">
                Email:{" "}
                <span className="text-sm text-yellow-600">
                  getwellccinfo@gmail.com
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/gTmzNWw/photo-1574958269340-fa927503f3dd-ixid-Mnwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hx8-ixlib-r.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
