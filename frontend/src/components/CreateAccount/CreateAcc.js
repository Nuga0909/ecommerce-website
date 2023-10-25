import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CreateAcc() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [backendResponse, setBackendResponse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateAccount = () => {
    axios
      .post("http://localhost:3000/users", formData)
      .then((response) => {
        if (response.data && response.data.token) {
          setBackendResponse("User created successfully");
        } else {
          setBackendResponse("Unexpected server response");
        }
        setModalVisible(true);
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
      });
  };

  const closeModal = () => {
    setModalVisible(false);
    setBackendResponse(null);
  };

  return (
    <div className="w-[1440px] px-[485px] py-20 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-start gap-[60px] flex">
        <div className="w-[470px] text-slate-950 text-5xl font-bold font-['Noto Serif Lao'] leading-[56px]">
          Create an Account.
        </div>
        <div className="flex-col justify-start items-start gap-8 flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[470px] h-[68px] relative">
              {/* Email Address Input */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-[450px] text-blue-500 text-base font-normal font-['Rubik'] leading-snug"
              />
            </div>
            <div className="w-[470px] h-[68px] relative">
              {/* Email Address Input */}
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-[450px] text-blue-500 text-base font-normal font-['Rubik'] leading-snug"
              />
            </div>
            <div className="w-[470px] h-[68px] relative">
              {/* Email Address Input */}
              <input
                type="text"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                placeholder="Email address"
                className="w-[450px] text-blue-500 text-base font-normal font-['Rubik'] leading-snug"
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
                className="w-[450px] text-red-500 text-base font-normal font-['Rubik'] leading-snug"
              />
            </div>
            <div
              className="w-[470px] px-6 py-[17px] bg-slate-950 rounded-[32px] justify-center items-start gap-2.5 inline-flex"
              onClick={handleCreateAccount}
            >
              <div className="text-center text-white text-base font-normal font-['Rubik'] leading-snug">
                Create Account
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] leading-snug">
              Already have an account?
            </div>
            <div className="text-center text-slate-950 text-base font-normal font-['Rubik'] underline leading-snug">
              <Link to="/signin">Sign in</Link>
            </div>
          </div>
        </div>
        {/* Modal */}
        {modalVisible && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
              <p>{backendResponse}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateAcc;
