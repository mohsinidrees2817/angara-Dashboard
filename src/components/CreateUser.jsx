import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = ({token,setCreateState,itemId,setUsers,users}) => {
    const [firstname,setFirstname] = useState('')
    const [lastName,setLastname] = useState('')
    const [Useremail,setUserEmail] = useState('')
    const [Userpassword,setUserPassword] = useState('')
    const [role,setRole] = useState('USER')
    
    ///////fetcihing user to edit//////////
    useEffect(() => {
        getUsertoedit();
     }, []);

    const getUsertoedit = async () => {
      if(itemId!==null){
        try{
        const res =  await fetch(`https://angara-backend.herokuapp.com/user/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: 'GET',
        })
        const resp = await res.json();
        // console.log(userTOedit,'edited user')
        setLastname(resp?.lastName)
        setFirstname(resp?.firstName)
        setUserEmail(resp?.email)
        setUserPassword(resp?.password)
        setRole(resp?.role)
      }catch (err) {
        if (err.res?.status === 403) {
          console.log("error");
        }
      }
    }
    else{
      return
    }
    };


    ///////creating user//////////////////
    const createUser = async (e) => {
        e.preventDefault();
        if(itemId==null){
        console.log('User created')
        console.log(firstname,lastName,Useremail,role,Userpassword)
        let userDetails = {
            firstName: firstname,
            lastName: lastName,
            email: Useremail,
            password: Userpassword,
            role: role
        }

        try {
          const ress = await fetch(
            "https://angara-backend.herokuapp.com/user/create",
            {
              method: 'POST',
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(userDetails)
            }
          );
          const ressp = await ress.json();
          console.log(ressp,'axsx')
          if (ress?.status == 201){
            setCreateState(false)
            toast('user created')
          }
          else{
            toast('email already used')
            return
          }
        } catch (err) {
            console.log("error");
          }
        }
        else{
          const updatedUser = { 
            firstName: firstname,
            lastName: lastName,
            password: Userpassword,
            role: role
          }
          console.log(updatedUser,'upasdj')
            try{
            const rees =  await fetch(`https://angara-backend.herokuapp.com/user/${itemId}`,
            {
              method: 'PATCH',
              headers: {
                "Content-type": "application/json",
  
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(updatedUser),
            }
            );
            const reesp = await rees.json();
            console.log(reesp,"user updated")
            if (rees?.status == 200){
              setCreateState(false)
              toast('user Updated')
            }
            else{
              toast('error occured while Updating')
              return
            }
          }catch (err) {
            if (err.rees?.status === 403) {
              console.log("error");
            }
          }

        }
        }
    

      //////////editing user/////



  return (
    <div className="flex flex-col w-full gap-4 p-6 max-w-[1080px]">
        <Link to = '/users'>
      <div className="py-4 flex justify-end"><button className="outline-none  px-3 rounded-md py-2 bg-[#0384fc] text-white " onClick={()=>setCreateState(false)}>see list </button></div>
      </Link>
        <div>
        <p className="text-2xl font-bold dark:text-white text-black">User</p>
        <p className="dark:text-white">Information</p>
        </div>

   <form className="flex flex-col  w-full dark:text-white justify-start items-start dark:bg-[#1a1c23] bg-slate-50 rounded-xl" onSubmit={(e)=>createUser(e)}>
      <div className="flex flex-row  w-full  gap-6">
      <div className="flex flex-col px-8 py-6 ">
        <p className="text-normal font-semibold">First Name</p>
        <input
          type="text"
          value={firstname}
          required
          onChange={(e) => setFirstname(e.target.value)}
          className="mt-2   w-full p-2 rounded border border-stone-200 dark:bg-[#24262d]"
        />
        </div>
        <div className="flex flex-col px-8 py-6">
        <p className="text-normal font-semibold">Last Name</p>
        <input
          type="text"
          value={lastName}
          required
          onChange={(e) => setLastname(e.target.value)}
          className="mt-2   w-full p-2 rounded border border-stone-200 dark:bg-[#24262d]"
        />

        </div>
        </div>
        <div className="flex flex-row w-full  gap-6">
      <div className="flex flex-col px-8">
      <p className="text-normal font-semibold">Email address </p>
        <input
          type="email"
          value={Useremail}
          required
          onChange={(e) => setUserEmail(e.target.value)}
          className="mt-2   w-full p-2 rounded border border-stone-200 dark:bg-[#24262d]"
        />
        </div>
        <div className="flex flex-col px-8 ">
        <p className="text-normal font-semibold">UserPassword</p>
        <input
          type="password"
          value={Userpassword}
          required
          onChange={(e) => setUserPassword(e.target.value)}
          className="mt-2   w-full p-2 rounded border border-stone-200 dark:bg-[#24262d]"
        />      
        </div>
        </div>
        <div>
        <div className="flex flex-col px-8 py-6">
        <p className="text-normal font-semibold">Role </p>
        <select id="filter-by"   className="h-12 border dark:bg-[#24262d]" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="USER">User</option>
            <option value="SUPER_ADMIN">Super_Admin</option>
          </select>
        </div>
        </div>
        <div>
        <div className="flex flex-col px-8">
        { itemId ?
        <div className="py-4 flex"><button className="outline-none  px-3 rounded-md py-2 bg-[#0384fc] text-white "  
        >Save </button></div>
        :
      <div className="py-4 flex"><button className="outline-none  px-3 rounded-md py-2 bg-[#0384fc] text-white " 
       >Create </button></div>
          }

      </div>
        </div>        

        </form>

        <ToastContainer />
    </div>
  );
};

export default CreateUser;
