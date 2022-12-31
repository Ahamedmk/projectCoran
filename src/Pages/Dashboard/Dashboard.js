 import React from 'react'
// import { useState, useContext } from 'react'
//  import './Dashboard.css'
// import BarCharts from '../../Components/NewCharts/BarCharts'

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)


// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
      
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

export default function Dashboard() {
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'jeu', 'ven', 'sam', 'dim'],
      datasets: [
        {
          label: 'nbres de page lu par jour',
          data: [3, 6, 9, 15,18, 2,4],
          backgroundColor:'rgba(53, 162, 235, 0.5)',
          borderColor: 'black',
          borderWidth: 1,
         }
        ,
        // {
        //   label: '333',
        //   data: [3, 3, 3],
        //   backgroundColor:'red',
        //   borderColor: 'black',
        //   borderWidth: 1,
        // }
      ]
    }
console.log(data.datasets[0].data)
    const options = {

    }

  return (
    <div className='app'>
      <h1>Statistique de lecture</h1>
     <div
      style = {
        {padding: '20px',
        width: '100%'}
      }
     >
      <Bar
         data = {data}
         options = {options}
      ></Bar>
     </div>
    </div>
  )
  
}
