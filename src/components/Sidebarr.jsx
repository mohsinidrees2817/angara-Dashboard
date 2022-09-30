import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { LoginContext } from '../contexts/Logincontext'

const Sidebarr = () => {
  const {displayMenu,setDisplayMenu} = useContext(LoginContext)

  

  return (
    <div className=''> 
        <div  className={`bg-white dark:bg-[#1a1c23] dark:text-[#9e9e9e] absolute md:static z-30 h-[100vh] mt-[10vh] md:mt-0   md:block ${ !displayMenu ? 'hidden duration-300 ease-linear' : 'block duration-300 ease-linear'}`}>
        <div>
        <p className='text-xl font-bold p-6 dark:text-white'> Angara </p>
        </div>
        <ul className='flex flex-col px-4 box-border md:mr-12' onClick={()=>setDisplayMenu(!displayMenu)}>
            <NavLink to = '/dashboard' className='font-semibold dark:text-white opacity-60 '>
            <li className='p-4 flex gap-6 '><img src="./Images/home.png" className='w-[20px] h-[20px]'/>  Dashboard</li>
            </NavLink>
            <NavLink to = '/users' className='font-semibold opacity-60 dark:text-white'>
            <li className='p-4 flex gap-6 '> <img src="./Images/customer.png" className='w-[20px] h-[20px]'/>  Users</li>
            </NavLink>
            <NavLink to = '/Inventory' className='font-semibold opacity-60 dark:text-white'>
            <li className='p-4 flex gap-6 ' > <img src="./Images/four-lines.png" className='w-[20px] h-[20px]'/> Inventory</li>
            </NavLink>
        </ul>
    </div>
    </div>
  )
}

export default Sidebarr