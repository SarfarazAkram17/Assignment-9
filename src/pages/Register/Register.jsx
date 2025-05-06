import React, { use, useState } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";

const Register = () => {
  document.title = 'JobTrack || Register';
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { createUser, updateUserProfile, googleSignIn } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    setNameError("");
    setPasswordError("");

    if (name.length < 6) {
      setNameError("Name must be 6 characters or longes");
      return;
    }

    const uppercaseRegex = /(?=.*[A-Z])/;
    const lowercaseRegex = /(?=.*[a-z])/;
    const passwordLength = /.{6,}/;

    if (!uppercaseRegex.test(password)) {
      setPasswordError("Password should have at least one uppercase character");
      return;
    } else if (!lowercaseRegex.test(password)) {
      setPasswordError("Password should have at least one lowercase character");
      return;
    } else if (!passwordLength.test(password)) {
      setPasswordError("Password should have at least 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo)
          .then(() => {})
          .catch((error) => console.log(error));

        navigate(location.state || "/");
      })
      .catch((error) => console.log(error));
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(location.state || "/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold mb-4">Register now!</h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              required
              name="name"
              type="text"
              className="input mb-4"
              placeholder="Enter your name"
            />
            {nameError && (
              <p className="mb-2 text-red-500 font-semibold">{nameError}</p>
            )}
            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input mb-4"
              placeholder="Enter your email"
            />
            <label className="label">Photo URL</label>
            <input
              required
              name="photo"
              type="text"
              className="input mb-4"
              placeholder="Enter your Photo URL"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                required
                name="password"
                type={showPassword ? "text" : "password"}
                className="input mb-4"
                placeholder="Enter your password"
              />
              {passwordError && (
                <p className="mb-2 text-red-500 font-semibold">
                  {passwordError}
                </p>
              )}
              <div onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEyeSlash
                    size={17}
                    className="absolute z-10 top-3 right-6"
                  />
                ) : (
                  <FaEye size={17} className="absolute z-10 top-3 right-6" />
                )}
              </div>
            </div>
            <button className="btn btn-primary text-white mt-4">
              Register
            </button>
            <p className="text-xs mt-4">
              Already have an account ? Please{" "}
              <Link
                to="/login"
                className="text-blue-500 font-semibold underline"
              >
                Login
              </Link>
            </p>
          </form>
          <div className="divider text-gray-400 font-semibold">OR</div>
          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-gray-50 text-black border-[#e5e5e5] mb-2"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#f9fafb"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
