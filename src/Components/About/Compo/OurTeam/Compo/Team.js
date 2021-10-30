import React from "react";

const Team = ({ team }) => {
  const { name, img, roll } = team;
  return (
    <div className="team border text-center p-6">
      <div className="team-img">
        <img src={img} alt="" />
      </div>
      <div className="my-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <small className="text-gray-500">{roll}</small>
      </div>
    </div>
  );
};

export default Team;
