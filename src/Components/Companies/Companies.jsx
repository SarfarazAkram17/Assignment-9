import React, { useState } from "react";
import { Link } from "react-router";

const Companies = ({ companiesData }) => {
  const [showAll, setShowAll] = useState(false);
  const data = showAll ? companiesData : companiesData.slice(0, 4);
  
  return (
    <div className="py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16"><span className="text-primary">Comp</span>anies</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 text-center md:gap-8 items-center">
        {data.map((company) => (
          <Link key={company.id} to={`/company/${company.id}`}>
            <div>
              <div className="flex justify-center">
                <img src={company.logo} alt="" className="w-[50%]" />
              </div>
              <h3 className="font-semibold mt-4">{company.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <button
          className="btn btn-primary text-white rounded-full btn-wide"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Companies;
