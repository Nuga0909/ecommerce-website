import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignInSnipet() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [backendResponse, setBackendResponse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = () => {
    axios
      .post("http://localhost:3000/users/login", formData)
      .then((response) => {
        if (response.data && response.data.token) {
          setBackendResponse("Login successful!");

          setTimeout(() => {
            setModalVisible(false);
            setBackendResponse(null);
            navigate("/your-order-page", {
              state: { firstName: response.data.firstName },
            });
          }, 2000);
        } else {
          setBackendResponse("Unexpected server response");
          setModalVisible(true);
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setBackendResponse(error.response.data.message);
        } else {
          setBackendResponse("Unexpected error occurred");
        }
        setModalVisible(true);

        // Automatically close the modal after 2 seconds
        setTimeout(() => {
          setModalVisible(false);
          setBackendResponse(null);
        }, 2000);
      });
  };

  return (
    <div className="w-[1440px] px-[485px] py-20 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="h-[105px] text-slate-950 text-5xl font-bold font-['Noto Serif Lao'] leading-[56px]">
        Sign in.
      </div>
      {/* ... rest of the component ... */}
      <div className="w-[470px] h-[68px] relative">
        {/* Email Address Input */}
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleInputChange}
          placeholder="Email address"
          className="w-[450px] h-[50px] pl-9 text-base font-normal font-['Rubik'] leading-snug bg-black bg-opacity-10"
        />
      </div>

      <div className="w-[470px] h-[68px] relative">
        {/* Password Input */}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-[450px] h-[50px] pl-9 text-base font-normal font-['Rubik'] leading-snug bg-black bg-opacity-10"
        />
      </div>

      {/* Sign In Button */}
      <div
        className="w-[470px] px-6 py-[17px] bg-slate-950 rounded-[32px] justify-center items-start gap-2.5 inline-flex cursor-pointer hover:bg-green-400"
        onClick={handleSignIn}
      >
        <div className="text-center text-white text-base font-normal font-['Rubik'] leading-snug">
          Sign in
        </div>
      </div>
      <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
        New to Ooja?
      </div>
      <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] underline leading-snug">
        <Link className="create-account" to="/create-account">
          Create an account
        </Link>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p>{backendResponse}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignInSnipet;
