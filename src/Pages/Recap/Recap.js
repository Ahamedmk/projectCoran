import React, {useContext} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from '../../Context/ThemeContext';
import Dashboard from '../Dashboard/Dashboard';

import './Recap.css'

export default function Recap() {
  const {numberPage} = useContext(ThemeContext)
  
  const total = numberPage.reduce((a,b) => a + b);
  
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
  <h3>Le hadith du jour :</h3>
  <p>
 D'après 'Aicha (qu'Allah l'agrée), le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit: « Faites une partie de vos prières (1) dans vos maisons et ne faites pas de vos maisons des tombes pour vous comme les juifs et les chrétiens ont pris leurs maisons comme des tombes.
 Et certes la maison dans laquelle est lu le Coran est regardée par les gens du ciel (2) de la même manière que les gens de la terre regardent les étoiles ».
 (Rapporté par Al Sarraj et authentifié par l'imam Dhahabi dans Siyar A'lam Al Noubala vol 8 p 29 et par Cheikh Albani dans la Silsila Sahiha n°3112)
  </p>
</div>

   
    </div>
  )
}
