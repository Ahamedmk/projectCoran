import React, {useContext} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeContext } from '../../Context/ThemeContext';

import './Recap.css'

export default function Recap() {
  const {numberPage} = useContext(ThemeContext)
  console.log(numberPage)
  const nbreLecturePage = numberPage;
  let vide = []
  vide.push(numberPage)
  console.log(vide)

  
  const percentage = Math.trunc ((nbreLecturePage * 100)/365);
  return (
    <div>
      
      <h1>J'ai lu en tout :  {numberPage}</h1>
      
<div className="progression">
  <p>Vous avez atteint : </p>
<CircularProgressbar
 value={percentage} text={`${percentage}%`} 

 styles={{
  // Customize the root svg element
  root: {},
  // Customize the path, i.e. the "completed progress"
  path: {
    // Path color
    stroke: `rgba(62, 152, 199, ${percentage / 100})`,
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
    // Customize transition animation
    transition: 'stroke-dashoffset 1s ease 0s',
    // Rotate the path
    // transform: 'rotate(0.25turn)',
    transformOrigin: 'center center',
  }}}
 />
</div>
   
    </div>
  )
}
