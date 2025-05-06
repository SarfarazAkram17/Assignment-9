import React, { use } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";

const ForgotPassword = () => {
    document.title = 'JobTrack || Forget Password';
  const location = useLocation();
  const navigate = useNavigate()
  const { resetPassword } = use(AuthContext);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      alert("Enter your email");
      return;
    }
    resetPassword(email)
      .then(() => {
        alert("password reset email sent");
        window.open("https://mail.google.com", "_blank");
        navigate(-1)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
          <form onSubmit={handleForgotPassword} className="fieldset">
            <label className="label">Email</label>
            <input
              defaultValue={location.state?.email}
              name="email"
              type="email"
              className="input mb-2"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary text-white mt-4">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
