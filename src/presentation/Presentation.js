import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
// import {v4 as uuidv4} from 'uuid';
import './Presentation.css'



export default function Presentation() {
  const {theme, numberPage, changePage, setNumberPage} = useContext(ThemeContext)
  console.log(numberPage )

    const [users, setUsers] = useState([]);
    const [tester, setTester] = useState([]);
    const [surah, setSurah] = useState([]);
    const [diag, setDiag] = useState([]);

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
    //  console.log (users);

  useEffect(() => {
    getApiData();
  }, []);


  //------------------- les versets au début de chaque pages-----------------------------
  //  projet
  // const total = () => {numberPage.reduce((a,b) => a + b,0);} 
   const total = numberPage.reduce((a,b) => a + b,0);
  // console.log(total)
  console.log(numberPage)
  const getApiDoto = async () => {
     const response = await fetch(
       "http://api.alquran.cloud/v1/meta"
     ).then((response) => response.json());
     const result = response.data;
      const page = result.pages;
      const pages = page.references;
    //  const pagesTot = pages[total];
     const surah = result.surahs;
     const surahs = surah.references;
      console.log(result)
     setTester(pages);
    setSurah(surahs);  
     
   };
  //  console.log(tester);
  //  console.log(surah);
  

   
  //  console.log(tester);
   useEffect(() => {
    getApiDoto();
 },[]);
 const versetAyahs = tester[total];

//  const sourates = surah[(versetAya.surah) - 1];
//  console.log(versetAyahs.surah)
 console.log(versetAyahs);
  const versetAya = {...versetAyahs};
 console.log(versetAya.surah);
 console.log(versetAya.ayah);



 const sourates = surah[(versetAya.surah) - 1];
 console.log(sourates);
 const souratesFirst = {...sourates};
 console.log(souratesFirst.englishName);


 const verset = () => {
  const surahp =  versetAyahs;
  const tabSurah = (surahp);
   console.log(tabSurah);
 }
verset()
//  console.log(versetAya(hs);
   // setSurah(versetAyahs);
//  console.log(surah);
//  const versetAyah =versetAyahs;
//  console.log(versetAyah)
// -------------------------------------------------------------
  
          // const nameSurah = tester.surah;
          // console.log(nameSurah);
        //  const nbreVerset = tester.references[total].ayah; 
      //  console.log(nameSurah);
          // const nameSurahTotal = surah.references[nameSurah - 1].englishName;
          //  console.log(`ma prochaine page sera la page ${total+ 1} de la sourate ${nameSurahTotal} verset ${nbreVerset}`);
    
  //  console.log(testaz.references)

  
 

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
     setDiag(Number(e)); 
  }
console.log(diag)
  const envoi = e => {
    e.preventDefault();
    setNumberPage([...numberPage, diag])
    console.log (numberPage);
  }
  // useEffect(() =>{
    
  //       localStorage.setItem('items', JSON.stringify(numberPage));
  //   }, [numberPage]);
 
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
        <h2>{dateDay}/{leMois+1}/{annee}</h2>
        <div className="objectif">
          <h2>Terminer la lecture du coran 1 fois par mois</h2>
          
          <p>
            Objectif:
            Lire le Coran tous les jours, minimum 20 pages afin de le terminer chaque mois.
             
          </p>
        
        </div>
        <form className='mb-3' >
        Choisissez le nombre de page lu aujourd'hui :
          <select onChange={e => changeValue(e.target.value)} id="page" >
            {/* <option value = "0">0</option> */}
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
          {/* <div className='versetSuivant d-flex flex-column align-items-center'> 
         <div className="pageSuivante"> Ma prochaine page sera la page : <strong className='nombre'>{total+ 1}</strong> </div>  */}
         {/* <div className="sourateSuivante"> Sourate {nameSurahTotal} verset : <strong className='nombre'>{nbreVerset}</strong> </div> */}
           
          <div className="sourate">
           <div className="firstSourate">
           <div className='session'>
             Ma prochaine page sera la page : <strong>{total+ 1}</strong>  
            <br />
            de la sourate : <strong>{souratesFirst.englishName}</strong>
          <br />
          A partir du verset : <strong>{versetAya.ayah}</strong>
          
           </div>
           
           {/* De la sourate : 
           <select>
                {users.map((item, index) => { 
              return <option value={index} key={index} >{item.englishName}</option>
            })}   
           </select>
            </div> 
            <div className="endSourate">
                A la sourate :
                <select>
                  {users.map((item, index) => {
             
              return <option value={index} key={index} >{item.englishName}</option>
            })}    
                </select> */}
                

            </div>
          </div>
           <div className="button d-flex  justify-content-center" >  
          <button className='ms-3 btn btn-success' onClick={e => envoi(e)}>
            valider
          </button>
          </div>
          {/* </div> */}
        

        </form>
        <div className="suivFirst">
          <button className='svtFirst'>
          <NavLink to="/recap">Suivant </NavLink>
          </button>
        </div>
      
    </div>
  )
}
