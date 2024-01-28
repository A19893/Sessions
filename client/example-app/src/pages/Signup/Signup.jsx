import React, { useEffect } from "react";
import RegisterForm from "../../components/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "../../components/SnackBar/SnackBar";
const Signup = () => {
  const showSnackbar = Snackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {message, type}= useSelector((state)=>state.user)
  useEffect(()=>{
    if (message !== "") {  
      showSnackbar(message, type);
      navigate("/login");
      setTimeout(() => {
        dispatch(deleteMessage());
      }, 1000);
    }
  },[message])
  return (
    <div>
      <RegisterForm/>
    </div>
  );
};

export default Signup;
