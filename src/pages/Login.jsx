import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
    console.log(result);
  };
  return (
    <>
      <p>Sign in with Google to continue..</p>
      <button onClick={signInWithGoogle}> Sign in with Google</button>
    </>
  );
};

export default Login;
