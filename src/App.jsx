import Login from "./components/Login";
import "./App.css";
import Header from './components/Header';


import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import Inventory from "./components/Inventory";
import Sidebarr from "./components/Sidebarr";
import Dashboard from "./components/Dashboard";
import {LoginContext} from "./contexts/Logincontext";

function App() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [displayMenu, setDisplayMenu] = useState(false)


  useEffect(() => {
    if (localStorage) {
      const token = localStorage.getItem("token");
      token && setToken(token);
      setLoading(false);
    }
  }, []);

  return (
    <BrowserRouter>
    <LoginContext.Provider value={{token , setToken, displayMenu,setDisplayMenu}}>
      <div className="dark:bg-[#121317] bg-[#f9fafb] ">
        {token ? (
          <div className="flex w-full " >
            <div className="dark:bg-[#1a1c23] bg-white">
            <Sidebarr/>
            </div>
            <div className="  bg-[#f9fafb] dark:bg-[#121317] w-full  box-border">
              <div>
            <Header/>
            </div>
            <div className=" w-full p-4">
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />:<></>
                <Route path="inventory" element={<Inventory />} />
              </Routes>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {!loading ? (
              <div>
                <Login  />
              </div>
            ) : (
              <div className="w-[100vw] h-[100vh] flex justify-center items-center">
                <img src="./Images/loader.svg" alt="" />
              </div>
            )}
          </div>
        )}
      </div>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
