import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import './Presentation.css'


export default function Presentation() {
  const {theme, numberPage, changePage} = useContext(ThemeContext)
  // console.log(theme, numberPage, changePage )

    const [users, setUsers] = useState();
    // const [stateInput, setStateInput] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "http://api.alquran.cloud/v1/surah"
    ).then((response) => response.json());

    setUsers(response.data);
    
  };
  // console.log (users);
 

  useEffect(() => {
    getApiData();
  }, []);

  // console.log(linkedInput)
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
        <h2>Lundi 16 décembre</h2>
        <form className='mb-3'>
        Choisissez le nombre de page lu aujourd'hui :
          <select onChange={changePage} id="page" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <div className="sourate">
           <div className="firstSourate">
           De la sourate : 
           <select>
               {/* {users.map((item, index) => {
              console.log(index);
              return <option value={index}>{item.englishName}</option>
            })}   */}
           </select>
            </div> 
            <div className="endSourate">
                A la sourate :
                <select>
                {/* {users.map((item, index) => {
              console.log(index);
              return <option value={index}>{item.name}</option>
            })}    */}
                </select>
                

            </div>
          </div>
             
          <button className='mt-2 btn btn-primary d-block'>
            valider
          </button>
        

        </form>
      
    </div>
  )
}
