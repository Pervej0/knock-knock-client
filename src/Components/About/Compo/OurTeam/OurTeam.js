import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Team from "./Compo/Team";

const OurTeam = () => {
  const [teamMember, setTeamMember] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => setTeamMember(data));
  }, []);

  return (
    <section className="md:px-14 p-3 our-team mb-14">
      <div className="text-center my-14">
        <h1 className="text-4xl font-semibold">Our Team</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-14 grid-cols-1">
        {teamMember.map((item) => (
          <Team key={item._id} team={item} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
