import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FiExternalLink } from "react-icons/fi";

const CompanyDetials = () => {
  const companiesData = useLoaderData();
  const { id } = useParams();
  const filteredCompanyData = companiesData.find(
    (company) => company.id === parseInt(id)
  );
  const { name, logo, location, website, industry, jobs } = filteredCompanyData;
useEffect(()=>{
window.scrollTo({
    top: 80,
    behavior: 'smooth'
})
},[])
  return (
    <div className="flex flex-col items-center  my-14 space-y-4">
      <img src={logo} alt="" className="w-[25%]" />
      <h2 className="text-xl font-bold mt-4 text-center">{name}</h2>
      <p className="font-semibold">Location: {location}</p>
      <p className="font-semibold flex flex-col items-center md:flex-row md:gap-2 md:items-start">
        Visit Website:{" "}
        <Link
          target="_blank"
          to={website}
          className="text-blue-500 underline flex gap-2 items-center"
        >
          {website}
          <FiExternalLink className="text-blue-500" />
        </Link>{" "}
      </p>
      <p className="font-semibold">Industry: {industry}</p>
      <h2 className="text-3xl font-bold mt-6">Available Jobs</h2>
      <div className="w-full px-4 flex flex-col items-center gap-y-6 mt-8">
        {jobs.map((job) => (
          <div
            className="shadow-sm w-full flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between md:items-center p-4 border-2 rounded-md"
            key={job.id}
          >
            <div className=" flex flex-col gap-3">
              <h2 className="font-bold text-2xl">{job.title}</h2>
              <p className="font-semibold">{job.jobType}</p>
              <p className="font-semibold">{job.salary} /year</p>
            </div>

            <button className="btn btn-secondary px-10 rounded-full text-white">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDetials;
