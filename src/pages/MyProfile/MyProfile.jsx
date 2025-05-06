import React, { use } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";

const MyProfile = () => {
  document.title = 'JobTrack || My Profile';
  const { user } = use(AuthContext);

  return (
    <div className="flex justify-center my-10 px-4">
      <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md text-center space-y-6 border border-gray-200">
        <img
          src={user.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
        />
        <h2 className="text-2xl font-bold text-gray-800">{user.displayName}</h2>
        <p className="text-gray-600">{user.email}</p>

        <div className="mt-4 text-sm text-gray-500 space-y-1">
          <p>🎯 Role: User</p>
        </div>

        <Link to="/editProfile">
          <button className="my-4 btn btn-primary text-white">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
