import React from "react";
import { useLoaderData } from "react-router";

const Success = () => {
  document.title = "JobTrack || Success";
  const reviews = useLoaderData();

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-10 mb-8">
      <div className="text-center py-12 bg-gradient-to-b from-[#1a0432] to-[#340354] text-white rounded-xl mb-12">
        <h1 className="text-4xl font-bold text-purple-400 mb-6">
          Successful Job Getters
        </h1>
        <p className="max-w-2xl mx-auto text-sm">
          Below are the profiles of some individuals who have secured jobs or
          internships in various places through our website.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg p-5 border border-gray-300 transition-all"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-fit mx-auto md:mx-0">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-96 h-36 rounded-xl object-cover border"
                />
                <span className="absolute bottom-0 right-0 bg-purple-600 text-white text-xs px-2 py-0.5 rounded">
                  {review.hiredDate}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">{review.hiringCompany}</p>
                <h2 className="text-xl font-semibold text-gray-800">
                  {review.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2">{review.field}</p>
                <p className="text-gray-700 text-sm">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
