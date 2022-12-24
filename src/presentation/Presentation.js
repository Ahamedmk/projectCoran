import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import {v4 as uuidv4} from 'uuid';
import './Presentation.css'


export default function Presentation() {
  const {theme, numberPage, changePage, setNumberPage} = useContext(ThemeContext)
  console.log(numberPage )

    const [users, setUsers] = useState([]);
    const [tester, setTester] = useState([]);

    const laDate = new Date()
    const dateDay = laDate.getDate()
    const leMois = laDate.getMonth()
    const annee = laDate.getFullYear()

    
    //------------------- Api pour les noms de verset -----------------------------
   const getApiData = async () => {
     const response = await fetch(
       "http://api.alquran.cloud/v1/surah"
     ).then((response) => response.json());

     setUsers(response.data);
    
   };
    console.log (users);

  useEffect(() => {
    getApiData();
  }, []);


  //------------------- les versets au début de chaque pages-----------------------------
  //  projet

//   const getApiDoto = async () => {
//     const response = await fetch(
//       "http://api.alquran.cloud/v1/meta"
//     ).then((response) => response.json());

//     setTester(response.data);
   
//   };

//    const test = tester.pages.references;
//    console.log (test[6].ayah);
  

//  useEffect(() => {
//    getApiDoto();
//  }, []);


  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'b969c368d3mshea5764361ad2523p118c58jsn25fbc64c99a9',
  //     'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
  //   }
  // };
  
  // fetch('https://al-quran1.p.rapidapi.com/1-114', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  

  const changeValue = (e) => {
     setNumberPage([...numberPage,Number(e)]); 
  }
 
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
        <h2>
            {dateDay}/{leMois+1}/{annee} </h2>
        <form className='mb-3'>
        Choisissez le nombre de page lu aujourd'hui :
          <select onChange={e => changeValue(e.target.value)} id="page" >
            <option value = "0">0</option>
            <option value = "1" >1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6" >6</option>
            <option value = "7">7</option>
            <option value = "8">8</option>
            <option value = "9">9</option>
            <option value = "10">10</option>
            <option value = "11" >11</option>
            <option value = "12">12</option>
            <option value = "13">13</option>
            <option value = "14">14</option>
            <option value = "15">15</option>
            <option value = "16" >16</option>
            <option value = "17">17</option>
            <option value = "18">18</option>
            <option value = "19">19</option>
            <option value = "20">20</option>
            <option value = "21" >21</option>
            <option value = "22">22</option>
            <option value = "23">33</option>
            <option value = "24">24</option>
            <option value = "25">25</option>
            <option value = "26" >26</option>
            <option value = "27">27</option>
            <option value = "28">28</option>
            <option value = "29">29</option>
            <option value = "30">30</option>
          </select>

          <div className="sourate">
           <div className="firstSourate">
           De la sourate : 
           <select>
                {users.map((item, index) => {
              
              return <option value={index} >{item.englishName}</option>
            })}   
           </select>
            </div> 
            <div className="endSourate">
                A la sourate :
                <select>
                 {users.map((item, index) => {
             
              return <option value={index} >{item.englishName}</option>
            })}   
                </select>
                

            </div>
          </div>
             
          <button className='ms-3 btn btn-success  d-block'>
            valider
          </button>
        

        </form>
      
    </div>
  )
}
