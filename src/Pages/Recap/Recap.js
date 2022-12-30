import React, {useContext, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from '../../Context/ThemeContext';
import Dashboard from '../Dashboard/Dashboard';

import './Recap.css'



export default function Recap() {
  const {numberPage} = useContext(ThemeContext)

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(numberPage));
  // }, [numberPage]);
  
  const total = numberPage.reduce((a,b) => a + b,0);
  
  const percentage = Math.trunc ((total* 100)/604);
  return (
    <div>
      
      <h1>J'ai lu en tout :  {total} pages </h1>
      
<div className="progression">

  <p>Vous avez atteint : </p>
<CircularProgressbar
 value={percentage} text={`${percentage}%`} 

 styles={buildStyles({
  textColor: "red",
  pathColor: "turquoise",
  trailColor: "gold"
})}
 />
</div>
<div className="recap">
  <h2>Progression</h2>
  <p>il ne reste plus que: &nbsp;<strong>{604 - total }</strong>&nbsp;pages </p>
</div>
<div className="hadithToday">
  <h3>Les mérites de la lecture du coran  :</h3>
  <br />
  <p>
  « Le Messager de Dieu (‘alayhi salat wa salam) a dit : « Celui qui récite une lettre du Livre de Dieu aura une bonne action qui sera décuplée. Je ne dis pas que « Alif, Lam, Mim », est une lettre mais « Alif », est une lettre, « Lam » est une lettre et « Mim » est une lettre. »
  </p>
</div>

   
    </div>
  )
}
