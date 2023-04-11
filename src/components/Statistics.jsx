import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const data = [
        {
          name: 'Assignment1',
          uv: 40,
          pv: 24,
          amt: 60,
        },
        {
          name: 'Assignment2',
          uv: 30,
          pv: 36,
          amt: 60,
        },
        {
          name: 'Assignment3',
          uv: 20,
          pv: 20,
          amt: 60,
        },
        {
          name: 'Assignment4',
          uv: 27,
          pv: 55,
          amt: 60,
        },
        {
          name: 'Assignment5',
          uv: 18,
          pv: 56,
          amt: 60,
        },
        {
          name: 'Assignment6',
          uv: 23,
          pv: 38,
          amt: 60,
        },
        {
          name: 'Assignment7',
          uv: 34,
          pv: 36,
          amt: 60,
        },
      ];
    return (
        <div className='mt-5 justify-center ms-auto px-5'>
           
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
     
        </div>
    );
};

export default Statistics;