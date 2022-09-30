import React from 'react'
import {
    PieChart,
    Pie,
    Tooltip,
    Cell
  } from "recharts";

const PieeChart = () => {

      const data = [
        {
            "name": "Expenses",
            "value": 12,
        },
        {
            "name": "Transfer",
            "value": 20
        },

        {
            "name": "Income",
            "value": 68
          },

      ];

      let colors = ['#7e3af2','#1c64f2','#0694a2']
      return (
        <div className='bg-white dark:bg-[#1a1c23] shadow-md border-[#e5e7eb] box-border rounded-sm'>
        <p className='font-semibold  px-[20px] py-4 dark:text-white'>Account Summary</p>
        <PieChart width={500} height={300}>
        <Tooltip/>
        <Pie data={data}  innerRadius={105} outerRadius={130} >
            {
                data.map((entry,index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]}/>
                ))
              } 
              </Pie>
        </PieChart>
        <div className="flex justify-center items-center">
      <span className="inline-block w-3 h-3 bg-[#1c64f2] rounded-full"></span>
      <p className='text-center py-4 px-2 text-[#725563] dark:text-white'>Income</p>
      <span className="inline-block w-3 h-3  bg-[#0694a2]  rounded-full"></span>
      <p className='text-center py-4 px-2 text-[#725563] dark:text-white'>Expenses</p>
      <span className="inline-block w-3 h-3  bg-[#7e3af2]  rounded-full"></span>
      <p className='text-center py-4 px-2 text-[#725563] dark:text-white'>Transfers</p>
      </div>
        </div>
      );
    };

export default PieeChart