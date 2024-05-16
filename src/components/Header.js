/** @format */

import React from "react";
import Logo from "../images/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute flex justify-between w-full items-center">
      <img className="h-20 w-44 mx-24 my-2 fle" src={Logo} alt="logo" />
      { user && (<div className="flex mx-10 gap-2 items-center">
        <img
          className="w-14 h-14"
          src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
        />
        <p onClick={signOutHandler} className="font-bold cursor-pointer">
          (Sign Out)
        </p>
      </div>)}
    </div>
  );
};

export default Header;
