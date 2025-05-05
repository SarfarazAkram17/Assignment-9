import React, { useState } from "react";
import { Link } from "react-router";

const Companies = ({ companiesData }) => {
  const [showAll, setShowAll] = useState(false);
  const data = showAll ? companiesData : companiesData.slice(0, 4);
  console.log(data);
  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold text-center mb-16">Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-8 items-center">
        {data.map((company) => (
          <Link to={`/company/${company.id}`}>
            <div key={company.id}>
              <div className="flex justify-center">
                <img src={company.logo} alt="" className="w-[50%]" />
              </div>
              <h3 className="font-semibold mt-4">{company.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="btn btn-primary text-white rounded-full"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Companies;
