import React, { useState, useContext } from "react";
import { LoginContext } from "../contexts/Logincontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {token,setToken} = useContext(LoginContext)


  async function checkUser() {
    let item = { email, password };
    console.log(item, "item");
    try {
      let result = await fetch("https://angara-backend.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const res = await result.json();
      res?.token && setToken(res?.token);
      res?.token && localStorage.setItem("token", res?.token);
      if (res?.token == "undefined" || res?.token == null) {
        toast("wrong credentials");
      }
    } catch (err) {
      toast("wrong credentials");
    }
  }

  return (
    <div className=" ">
      <div className="flex justify-center flex-col items-center w-[100vw] h-[100vh]  p-6 sm:p-12 ">
        <div className="w-full flex flex-col gap-5 items- max-w-sm">
          <h1 className="mb-4 text-xl text-center font-semibold text-gray-700 dark:text-gray-200">
            Login
          </h1>
          <label className="block text-sm text-gray-700 dark:text-gray-400">
            <span>Email</span>
            <input
              className="block w-full text-sm focus:outline-none text-gray-300 form-input leading-5 focus:border-black border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray rounded-md dark:bg-gray-700 mt-1 border-[1px]  px-3 py-2"
              type="email"
              required=""
              name="email"
              placeholder="john@doe.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block text-sm text-gray-700 dark:text-gray-400 mt-4">
            <span>Password</span>
            <input
              className="block w-full text-sm focus:outline-none text-gray-300 form-input leading-5 focus:border-black border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray rounded-md dark:bg-gray-700 mt-1 border-[1px]  px-3 py-2"
              type="password"
              required=""
              name="password"
              placeholder="***************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple w-full mt-4"
            type="submit"
            onClick={checkUser}
          >
            Log in
          </button>
        </div>
      </div>

      <div></div>
      <ToastContainer />
    </div>
  );
};

export default Login;
