import React, { useEffect, useState, useContext } from "react";
import CreateUser from "./CreateUser";
import DeletePopup from "./DeletePopup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../contexts/Logincontext";



  const Users = () => {
  const [statee,setStatee] = useState(false)
  const [deleteState , setDeletestate] = useState(false)
  const [itemId , setItemid] = useState(null)
  const [users, setUsers] = useState([]);
  const [createState, setCreateState] = useState(false);

  const {token} = useContext(LoginContext)



  useEffect(()=>{
    setTimeout(() => {      
      setStatee(false);      
    }, 2000);                                                  
    setStatee(true);
  },[])

  const getUser = async () => {
    try {
      const result = await fetch(
        "https://angara-backend.herokuapp.com/user/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "GET",
        }
      );
      const resp = await result.json();
      setUsers(resp);
    } catch (error) {
      if (error.response?.status === 403) {
        console.log("error");
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);


  useEffect(() => {
    getUser();
  }, [deleteState]);

  
  useEffect(() => {
    getUser();
  }, [createState]);

 
  const deletenote = async () => {
    try{
    const res =  await fetch(`https://angara-backend.herokuapp.com/user/${itemId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const resp = await res.json();
    toast("user deleted!");
    setDeletestate(false)
  }catch (err) {
    if (err.res?.status === 403) {
      console.log("error");
    }
  }
};


  return (
    <div className="w-full">
      {createState ? 
      <div>
        <CreateUser token={token} users={users} setUsers={setUsers} itemId={itemId} setCreateState={setCreateState}/>
      </div>
       :
       <div>
      <div className="">
        {deleteState && <DeletePopup setDeletestate={setDeletestate} itemId={itemId} deletenote={deletenote} createState={setCreateState}/>}
      </div>
      <div className="py-4 flex justify-end" onClick={()=>setItemid(null)}><button className="outline-none  px-3 rounded-md py-2 bg-[#0384fc] text-white " onClick={()=>setCreateState(true)}>Create User</button></div>
      {users.length != 0 ? (
        <div className="overflow-x-auto rounded-lg ">
        <table className=" w-full box-border overflow-x-auto rounded-lg p-4">
          <thead>
                  <tr className="text-xs font-semibold text-left text-gray-500 uppercase border-b dark:text-[#9e9e9e] dark:border-gray-700 dark:bg-[#1a1c23] bg-gray-100  w-full  ">
                    <th className="px-4 py-4">
                      User
                    </th>
                    <th className="px-4 py-4" >
                      Role
                    </th>
                    <th className="text-center px-4 py-4">
                      Accounts
                    </th>
                    <th className="px-4 py-4">
                      Action
                    </th>
                  </tr>
                  </thead>
          {users?.map((item) => {
            return (
              <tbody key={item?._id}>
              <tr className="text-s font-semibold text-left text-gray-600 border-b  bg-white dark:text-[#9e9e9e] dark:border-gray-700 dark:bg-[#1a1c23] w-full">
                  <td  className="px-4 py-4">{item?.firstName} <p className="text-xs font-normal dark:text-[#9e9e9e] text-gray-500">{item?.email}</p></td>
                  <td className="px-4 py-4 font-normal" >{item?.role}</td>
                  <td className="text-center px-4 py-4">0</td>
                  <td  className="px-4 py-4" ><div className="flex gap-4 cursor-pointer" onClick={()=>setItemid(item?._id)}>
                    <div>
                      <img src="./Images/pencil.png" className="w-[15px]" onClick={()=>setCreateState(true)}></img>
                    </div>
                    <img src="./Images/delete.png" className="w-[15px] " onClick={()=>setDeletestate(true)}/></div></td>
                </tr>
                </tbody>
            );
          })}
          <tbody>
          <tr className="text-xs font-semibold text-left text-gray-500   uppercase border-b dark:text-[#9e9e9e] dark:bg-[#1a1c23] dark:border-gray-700  bg-gray-100  w-full ">
                    <th className="px-4 py-4">
                    SHOWING 1- {users.length} OF {users.length}
                    </th>
                    <th className="px-4 py-4" >
                      
                    </th>
                    <th className="text-center px-4 py-4">
                    </th>
                    <th className="px-4 py-4">
                      <button className="bg-[#9333ea] w-[24px] h-[24px] text-white rounded">1</button>
                    </th>
                  </tr>
                  </tbody>
        </table> 
        </div>


      ) : (
        <div>
          <div className=" flex items-center justify-center">
        <img src="./Images/loader.svg" className=" w-32" /></div>
        </div>
      )}

      </div>
      }
      <ToastContainer />
    </div>
  );
};

export default Users;
