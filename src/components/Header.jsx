import { render } from "@testing-library/react";
import React, { useState, useContext } from "react";
import { LoginContext } from "../contexts/Logincontext";


const Header = () => {
  const [logoutState, setLogoutState] = useState(false);
  const {displayMenu,setDisplayMenu} = useContext(LoginContext)

  function logOut() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="w-full py-4 flex justify-between md:justify-end items-center  px-8 shadow-md dark:shadow-md-black relative box-border bg-white dark:bg-[#1a1c23] max-w-[1180px]">
      <div>
        <img
          src="./Images/menu.png"
          className="w-[30px] md:hidden cursor-pointer"
          onClick={() => setDisplayMenu(!displayMenu)}
        />
      </div>
      <div className="flex justify-between items-center gap-8">
        <button
          onClick={() => {
            document.querySelector("html").classList.toggle("dark");
          }}
        >
          <img src="./Images/dark_mode.png" className="w-[20px] h-[20px]" />
        </button>
        <img
          src="./Images/account.png"
          className="w-[30px] shadow-2xl cursor-pointer color-white"
          onClick={() => setLogoutState(!logoutState)}
        />
      </div>
      {logoutState && (
        <form
          className="absolute flex justify-start items-center gap-2 right-0 md:right-8 mt-32 bg-[#f9fafb] w-56 text-gray-600 px-4 pt-12 pb-4 rounded-lg shadow-2xl cursor-pointer z-50"
          onClick={logOut}
        >
          <img src="./Images/logout.png" className="w-[20px] h-[20px]" />
          <p>Log out</p>
        </form>
      )}
    </div>
  );
};

export default Header;
