import React from "react";
import notFound from "../../Images/notFound.jpg";

const NotFound = () => {
  return (
    <section>
      <div className="flex justify-center items-center flex-col">
        <img src={notFound} alt="" />
      </div>
    </section>
  );
};

export default NotFound;
