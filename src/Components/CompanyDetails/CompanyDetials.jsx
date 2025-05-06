import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { FiExternalLink } from "react-icons/fi";

const CompanyDetails = () => {
  const companiesData = useLoaderData();
  const { id } = useParams();
  const [selectedJob, setSelectedJob] = useState(null);

  const company = companiesData.find((company) => company.id === parseInt(id));
  const { name, logo, location, website, industry, jobs } = company;

  useEffect(() => {
    window.scrollTo({ top: 80, behavior: "smooth" });
  }, []);

  const handleCloseModal = () => setSelectedJob(null);

  return (
    <div className="flex flex-col items-center my-14 space-y-4 px-4">
      {/* Company Info */}
      <img src={logo} alt={name} className="w-[25%]" />
      <h2 className="text-2xl md:text-3xl font-bold mt-4 text-center">
        {name}
      </h2>
      <p className="font-semibold">📍 Location: {location}</p>
      <p className="font-semibold flex flex-col md:flex-row md:gap-2 items-center">
        🌐 Visit Website:{" "}
        <Link
          target="_blank"
          to={website}
          className="text-blue-500 underline flex gap-2 items-center"
        >
          {website}
          <FiExternalLink className="text-blue-500" />
        </Link>
      </p>
      <p className="font-semibold">🏢 Industry: {industry}</p>

      {/* Job List */}
      <h2 className="text-3xl font-bold my-10 text-center">
        Available Jobs
      </h2>
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 border-2 rounded-lg shadow-sm flex flex-col md:flex-row justify-between md:items-center"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="font-semibold">{job.jobType}</p>
              <p className="font-semibold">{job.salary} / year</p>
              <p className="font-semibold">Vacancy: {job.vacancy}</p>
            </div>
            <button
              onClick={() => setSelectedJob(job)}
              className="btn btn-primary mt-4 md:mt-0 px-6 py-2 rounded-full text-white"
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30 px-4">
          <div className="bg-white rounded-lg max-w-lg w-full shadow-lg border-2 border-gray-300 relative overflow-hidden">
            <div className="max-h-[90vh] overflow-y-auto scrollbar-hide p-6 space-y-4">
              <img
                src={selectedJob.bannerImage}
                alt={selectedJob.title}
                className="w-full h-48 rounded-md mb-4"
              />

              <h2 className="text-2xl font-bold">{selectedJob.title}</h2>

              <p className="text-sm text-gray-700">
                <strong>Job Type:</strong> {selectedJob.jobType}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Location:</strong> {selectedJob.location}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Salary:</strong> {selectedJob.salary} /year
              </p>
              <p className="text-sm text-gray-700">
                <strong>Vacancy:</strong> {selectedJob.vacancy}
              </p>

              <div>
                <h3 className="font-semibold mt-4">Description:</h3>
                <p className="text-gray-600 text-sm">
                  {selectedJob.description}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mt-4">Requirements:</h3>
                <ul className="list-disc ml-6 text-sm text-gray-700">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between pt-4">
                <Link to={website} target="_blank">
                  <button className="btn btn-primary text-white rounded px-4 py-2">
                    Apply
                  </button>
                </Link>
                <button
                  onClick={handleCloseModal}
                  className="btn bg-gray-300 hover:bg-gray-400 rounded px-4 py-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
