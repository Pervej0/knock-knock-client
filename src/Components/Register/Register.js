import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";

const Register = () => {
  const { signInGoogle, manuallySignUp } = useAuth();
  const [userError, setUserError] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "password" && value.length < 6) {
      setUserError("Password atleast have 6 Length!");
      return;
    }
  };

  const registerSubmit = () => {
    // console.log(userInfo);

    if (userInfo.name === "") {
      setUserError("Please enter your name!");
      return;
    }
    if (userInfo.email === "") {
      setUserError("Please enter your email!");
      return;
    }
    if (userInfo.password === "") {
      setUserError("Please enter your password!");
      return;
    }

    if (userInfo.password !== userInfo.confirmPassword) {
      setUserError("Password dosen't matched!");
      return;
    }

    manuallySignUp(userInfo?.email, userInfo?.confirmPassword, userInfo?.name);
    setUserError("");
    // history.push("/");
  };

  return (
    <section className="register-section flex items-center bg-gray-800">
      <div className="w-2/4 mx-auto border border-gray-400 p-6 text-white my-10">
        <div className="text-center">
          <div className="mb-3">
            <label className="block text-left text-white font-semibold text-xl mb-2">
              Full Name:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border-0 border-b"
              onBlur={handleUserInput}
              name="name"
              type="text"
              required
              placeholder="Enter name"
            />
          </div>
          <div className="mb-3">
            <label className="block text-left text-white font-semibold text-xl mb-2">
              Your Email:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border-0 border-b"
              onBlur={handleUserInput}
              name="email"
              type="email"
              required
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-white font-semibold text-xl mb-2">
              Your Password:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border-0 border-b"
              onBlur={handleUserInput}
              name="password"
              type="password"
              required
              placeholder="Enter password"
              maxLength="14"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-white font-semibold text-xl mb-2">
              Confirm Password:
            </label>
            <input
              className="w-full py-2 px-2 text-lg bg-transparent focus:outline-none border-0 border-b"
              onBlur={handleUserInput}
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm password"
            />
          </div>
          <p className="text-red-500 text-xl my-4">{userError}</p>
          <button
            type="button"
            onClick={registerSubmit}
            className="inline-block py-2 px-5 transition duration-500 ease-in-out hover:bg-transparent hover:text-white border hover:border-white text-white bg-blue-600 uppercase"
          >
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <div className="text-white text-center my-4 text-lg">
            ---------------- or ------------------
          </div>
          <div className="text-center">
            <button
              onClick={() => signInGoogle()}
              className="px-4 py-2 border flex items-center justify-center mx-auto my-6"
            >
              <FontAwesomeIcon icon={faGoogle} size="2x" />
              &nbsp; Sign Up With Google
            </button>
          </div>
          <div>
            <h4>
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-400 font-semibold">
                Just log in
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
