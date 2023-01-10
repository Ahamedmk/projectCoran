 import React from 'react'
 import { useState, useEffect, useContext } from 'react'
 import { ThemeContext } from '../../Context/ThemeContext';
 import {Link, NavLink} from 'react-router-dom';
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
  const {numberPage} = useContext(ThemeContext)
  const [ajout, setAjout] = useState()

  const copieNumberPage = [...numberPage];
  console.log(copieNumberPage)

    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'jeu', 'ven', 'sam', 'dim', 'Mon', 'Tue', 'Wed', 'jeu', 'ven', 'sam', 'dim', 'Mon', 'Tue', 'Wed', 'jeu', 'ven', 'sam', 'dim',],
      datasets: [
        {
          label: 'nbres de page lu par jour',
          data: [],
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
    const donne = data.datasets[0].data ;
//     const teston = donne.concat(copieNumberPage);
//     console.log(donne)
//     donne.push(teston)
//     console.log(donne.flat(2))
//     donne = donne.flat(2)
//     console.log(donne)
// console.log(teston)
const test = copieNumberPage.map(x => donne.push(x))
console.log(donne)
console.log(test)
// const copie = copieNumberPage.pop();
// donne.push(copie);
// console.log(copieNumberPage.pop())
    const options = {

    }

  return (
    <div className='app'>
      <h1>Statistique de lecture</h1>
     <div
      style = {
        {padding: '10px',
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
