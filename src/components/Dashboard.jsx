import React from 'react'
import BarrChart from './BarrChart'
import LineeChart from './LineeChart'
import PieeChart from './PieeChart'

const Dashboard = () => {

  return (
    <div className='flex flex-col gap-6 max-w-[1080px]'>
      
      <div className='flex flex-wrap bg-white p-6 gap-8 lg:flex-nowrap dark:bg-[#1a1c23] '>
     <div className='flex justify-start items-center gap-8 w-full sm:w-2/4 md:w-1/4  lg:border-r lg:border-[#e5e7eb]'>
      <div className='bg-[#dbeafe] w-[50px] h-[50px] flex justify-center items-center rounded-full'>
      <img src="./Images/four-lines.png" className='w-[15px]' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-[#725563] dark:text-white'>Total Sales</p>
        <p className='text-xl font-semibold text-[#374161] dark:text-[#9e9e9e]'>$376,20</p>
      </div>
     </div>
     <div className='flex justify-start items-center gap-8 w-full sm:w-2/4 md:w-1/4  lg:border-r lg:border-[#e5e7eb]'>
      <div className='bg-[#dcfce7] w-[50px] h-[50px] flex justify-center items-center rounded-full'>
      <img src="./Images/banknotes.png" className='w-[20px]' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-[#725563] dark:text-white'>Units Sold</p>
        <p className='text-xl font-semibold text-[#374161] dark:text-[#9e9e9e]'>468</p>
      </div>
     </div>
     <div className='flex justify-start items-center gap-8 w-full sm:w-2/4 md:w-1/4  lg:border-r lg:border-[#e5e7eb]'>
      <div className='bg-[#ccfbf1] w-[50px] h-[50px] flex justify-center items-center rounded-full'>
      <img src="./Images/customer.png" className='w-[20px] opacity-6' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-[#725563] dark:text-white'>Total Accounts</p>
        <p className='text-xl font-semibold text-[#374161] dark:text-[#9e9e9e]'>35</p>
      </div>
     </div>
     <div className='flex justify-start items-center gap-8 w-full sm:w-2/4 md:w-1/4  '>
      <div className='bg-[#ffedd5] w-[50px] h-[50px] flex justify-center items-center rounded-full'>
      <img src="./Images/inventory.png" className='w-[20px]' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-[#725563] dark:text-white'>FBA Inventory</p>
        <p className='text-xl font-semibold text-[#374161] dark:text-[#9e9e9e]'>6389</p>
      </div>
     </div>
     </div>
     <div className='flex gap-4 flex-wrap overflow-x-auto lg:flex-nowrap rounded-sm sm:overflow-x-hidden'>
      <div className=' w-full lg:w-2/4 '>
        <BarrChart/>
      </div>
      <div className=' w-full lg:w-2/4 '>
        <LineeChart/>
        </div>
        </div>
        <div className='flex gap-4 flex-wrap  overflow-x-auto lg:flex-nowrap rounded-sm  sm:overflow-x-hidden'>
        <div className=' w-full lg:w-2/4 flex justify-center items-center '>
        <PieeChart/>
        </div>  
        <div></div>
        </div>
    </div>
  )
}

export default Dashboard