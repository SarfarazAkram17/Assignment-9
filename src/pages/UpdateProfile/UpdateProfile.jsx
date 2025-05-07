import React, { use } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  document.title = 'JobTrack || Update Profile';
  const { updateUserProfile } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUserProfile(name, photo)
      .then(() => {
        toast.success('Your Profile Updated Successfully')
        navigate(-1);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
          <form onSubmit={handleUpdateProfile} className="fieldset">
            <label className="label">Name</label>
            <input
              required
              name="name"
              type="text"
              className="input mb-2"
              placeholder="Enter Name"
            />
            <label className="label">Photo URL</label>
            <input
              required
              name="photo"
              type="text"
              className="input mb-4"
              placeholder="Enter your Photo URL"
            />
            <button className="btn btn-primary text-white mt-4">
              Update Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
