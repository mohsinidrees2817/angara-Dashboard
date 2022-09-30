import React from 'react'
import { YAxis } from 'recharts'
import { BarChart,CartesianGrid,XAxis,Tooltip,Legend,Bar } from 'recharts'


const BarrChart = () => {
    const data = [
        {
          "name": "January",
          "Sales": 66,
        },
        {
          "name": "Febuary",
          "Sales": 33,
        },

        {
          "name": "March",
          "Sales": 43,
        },
        {
          "name": "April",
          "Sales": 12,
        },
        {
          "name": "May",
          "Sales": 54,
        },
        {
          "name": "June",
          "Sales":62,
        },
        {
          "name": "July",
          "Sales": 84,
        },


      ]
  return (
    <div className='bg-white dark:bg-[#1a1c23] shadow-md  box-border'>
    <p className='font-semibold px-[20px] py-4 dark:text-white'>Revenue</p>
  <BarChart  width={500} height={320} data={data} barSize={40}   margin={{
            top: 5,
            bottom: 5,
          }}>
  
  <CartesianGrid />
  <XAxis dataKey="name"   />
  <YAxis tickCount={10} interval={'preserveStart'} />
  <Tooltip />
  <Bar dataKey="Sales" fill="#7e3af2" />
</BarChart>
<p className='text-center p-4 text-[#725563] dark:text-white'>Sales</p>
    </div>
  )
}

export default BarrChart