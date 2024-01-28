import React, { useRef, useState } from "react";
import { checkValidaData } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice.action";
const RegisterForm = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    // Validate the form Data
    const message = checkValidaData(
      email.current.value,
      password.current.value
    );
    message && setErrorMessage(message);
    if (message) return;
    dispatch(addUser({username:name.current.value,email:email.current.value,password:password.current.value}))
  };
  return (
    <div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="w-3/12 bg-blue-400  p-12 my-40 mx-auto right-0 left-0 text-black bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
           Sign Up
        </h1>
          <input
            ref={name}
            type="text"
            placeholder="Enter Username"
            className="p-4 my-4 bg-white w-full"
          />
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4  bg-white w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4  bg-white w-full"
        />
        <p className="tex-white py-2 font-normal text-center">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="py-4 my-4 bg-red-600 w-full rounded-md"
        >
           Sign Up
        </button>
        <p
          className="p-2 m-2 text-center cursor-pointer text-red-600"
          onClick={() => navigate('/login')}
        >
        Already a Registered User?
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
