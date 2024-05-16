/** @format */

import React from "react";
import BgImage from "../images/bg.jpg";
import Header from "./Header";
import { useState, useRef } from "react";
import isFormValidate from "./utils/isFormValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [passNotValid, setPassNotValid] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const dispatch = useDispatch();

  const submitFormHandler = () => {
    let isValidated = isFormValidate(
      email?.current?.value,
      password?.current?.value
    );
    if (isValidated === null) {
      setPassNotValid(false);
      setEmailNotValid(false);
      if (!isSignIn) {
        //sign up
        createUserWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: userName?.current?.value,
            })
              .then(() => {
                const { email, displayName, uid } = auth.currentUser;
                dispatch(
                  addUser({
                    email: email,
                    displayName: displayName,
                    uid: uid,
                  })
                );
                navigate("/browse");
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage + errorCode);
          });
      } else {
        //sign in
        signInWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage + errorCode);
          });
        navigate("/browse");
      }
    } else if (isValidated === "email") {
      setEmailNotValid(true);
      setPassNotValid(false);
    } else if (isValidated === "password") {
      setPassNotValid(true);
      setEmailNotValid(false);
    } else {
      setPassNotValid(true);
      setEmailNotValid(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <Header />
        <img src={BgImage} alt="BackgroundImage" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white bg-black bg-opacity-70 w-[28rem] absolute flex flex-col p-16 gap-4 rounded-sm">
        <h2 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            ref={userName}
            className="h-14 bg-black bg-opacity-60 p-4 border-l-rose-1001 border-2 rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="h-14 bg-black bg-opacity-60 p-4 border-l-rose-1001 border-2 rounded-md"
          type="text"
          placeholder="Email or Mobile Number"
          ref={email}
        />
        {emailNotValid && (
          <p className="text-red-600 font-semibold">Email is Not Valid</p>
        )}
        <input
          className="h-14 bg-black bg-opacity-60 p-4 border-l-rose-1001 border-2 rounded-md"
          type="password"
          placeholder="Password"
          ref={password}
        />
        {passNotValid && (
          <p className="text-red-600 font-semibold">Password is Not Valid</p>
        )}
        <button
          className="p-2 bg-red-700 font-bold rounded-md"
          onClick={submitFormHandler}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-200 mx-auto">
          {isSignIn ? "New to Netflix?" : "Already a User?"}{" "}
          <span
            onClick={() => setIsSignIn(!isSignIn)}
            className="font-bold text-white cursor-pointer">
            {isSignIn ? "Sign Up Now" : "Sign in Now"}{" "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
