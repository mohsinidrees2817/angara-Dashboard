import React from "react";
import { YAxis } from "recharts";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const LineeChart = () => {
  const data = [
    {
      name: "January",
      Paid: 40,
      Organic: 24,
    },
    {
      name: "Febuary",
      Paid: 30,
      Organic: 13,
    },
    {
      name: "March",
      Paid: 20,
      Organic: 74,
    },
    {
      name: "April",
      Paid: 55,
      Organic: 39,
    },
    {
      name: "May",
      Paid: 38,
      Organic: 48,
    },
    {
      name: "June",
      Paid: 23,
      Organic: 73,
    },
    {
      name: "July",
      Paid: 72,
      Organic: 43,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1c23] shadow-md  box-border">
      <p className="font-semibold px-[20px] py-4 dark:text-white">Traffic</p>
      <LineChart
        width={500}
        height={320}
        data={data}
        barSize={50}
        margin={{
          top: 5,
          bottom: 5,
          right: 30,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis tickCount={7} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Organic"
          stroke="#7e3af2"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="Paid" stroke="#0694a2" strokeWidth={3} />
      </LineChart>
      <div className="flex justify-center items-center">
        <span className="inline-block w-3 h-3 bg-[#0694a2] rounded-full"></span>
        <p className="text-center py-4 px-2 text-[#725563] dark:text-white">
          Organic
        </p>
        <span className="inline-block w-3 h-3  bg-[#7e3af2]  rounded-full"></span>
        <p className="text-center py-4 px-2 text-[#725563] dark:text-white">
          Paid
        </p>
      </div>
    </div>
  );
};

export default LineeChart;
