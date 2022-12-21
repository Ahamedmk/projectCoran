
// import './App.css';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function App() {
  const data = {
    labels: ['Yes', 'No'],
    datasets: [{
      label: 'Poll',
      data: [3, 6],
      backgroundColor: ['black', 'red'],
      borderColor: ['black', 'red'],
    }]
  }

  const options = {

  }

  return (
    <div className="App">
      <h1 style={ {padding: '20px'}}>comment creer un donut</h1>
      <div>
       <Doughnut
       data = {data}
       options = {options}
       >
        
       </Doughnut>
      </div>
    </div>
  );
};

export default App