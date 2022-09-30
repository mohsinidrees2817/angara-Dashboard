import React, { useState ,useEffect} from 'react'

const DeletePopup = ({setDeletestate,deletenote}) => {


  return (
    <div className="flex flex-col justify-center items-center absolute w-full md:w-2/4 h-2/4 bg-slate-300 md:mx-[200px] mt-[150px]">
    <p className="text-black text-2xl">Delete User</p>
    <p className="text-black text-sm">Are you sure you want to delete this user?.</p>
    <div className='flex gap-4'>
    <button className=" w-[100px] h-[50px] bg-white mt-4" onClick={()=>setDeletestate(false)}>Cancel</button>
    <button className=" w-[100px] h-[50px] bg-white mt-4" onClick={()=>deletenote()}>Delete</button>
    </div>
  </div>
  )
}

export default DeletePopup