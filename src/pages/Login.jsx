import React, { useEffect } from "react";
import githubLogo from "../assets/githubLogo.png";
import googleLogo from "../assets/googleLogo.png";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { authAction } from "../features/authSlice/AuthSlice";

const Login = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const obj = {
          _id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };
        dispatch(authAction.addUser(obj));
        localStorage.setItem("obj", JSON.stringify(obj));

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("Log Out Succesfull");
        dispatch(authAction.removeUser());
        localStorage.removeItem("obj");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-7 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        {!userInfo && (
          <div
            onClick={handleLogin}
            className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
          >
            <img className="w-8" src={googleLogo} alt="googleLogo" />
            <span className="text-sm text-gray-900"> Sign in with Google</span>
          </div>
        )}
        {userInfo && (
          <div className="flex w-80 h-72 text-white flex-col items-center justify-center bg-slate-800 rounded-2xl border-x-gray-200 border-4">
            <div className="text-semibold font-bold pb-3">{userInfo.email}</div>
            <img
              src={userInfo.image}
              className="text-semibold font-bold rounded-full"
            />
            <p className="py-3">Hi, {userInfo.name}</p>
            <button
              onClick={handleSignOut}
              className="bg-black w-52 text-white text-base py-2 px-4 tracking-wide rounded-md hover:bg-gray-600 duration-300"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
      {/* <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img className="w-8" src={githubLogo} alt="githubLogo" />
          <span className="text-sm text-gray-900">Sign in with Github</span>
        </div>
        {userInfo && (
          <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
            Sign Out
          </button>
        )}
      </div> */}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
