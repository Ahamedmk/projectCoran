import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import imgBurger from '../../../assets/menu.png'
import zikrLogo from '../../../assets/zikr_logo.png'

import {Link, NavLink} from 'react-router-dom';

export default function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
 
  useEffect(() => {
    const changeWidth = () => {
    setLargeur(window.innerWidth);
  }
  window.addEventListener('resize', changeWidth);

  return () => {
    window.removeEventListener('resize',changeWidth);
  }

  }, [])

  return (
    <nav className='sidenav'>
      <img className='zikr' src={zikrLogo} alt="" />
      {(toggleMenu || largeur > 500) && (
      <ul className='menuList'>
      <li className='items'><NavLink to="/"
      className={({isActive}) => isActive ? "" : ""}
      >Présentation</NavLink></li>
      <li className='items'><NavLink to="/recap"
       className={({isActive}) => isActive ? "activeLink" : ""}
      >Récapitulatif</NavLink></li>
      <li className='items'><NavLink to="/dashboard"
       className={({isActive}) => isActive ? "activeLink" : ""}
      >Dashboard</NavLink></li>
      </ul>
      )}
      <button onClick={toggleNav}><img className='burger' src={imgBurger} alt="" /></button>
    </nav>
  )
}
