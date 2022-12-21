import React from 'react'
import './Sidebar.css'
import {Link, NavLink} from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className='sidenav'>
      <NavLink to="/"
      className={({isActive}) => isActive ? "activeLink" : ""}
      >Présentation</NavLink>
      <NavLink to="/recap"
       className={({isActive}) => isActive ? "activeLink" : ""}
      >Récapitulatif</NavLink>
      <NavLink to="/dashboard"
       className={({isActive}) => isActive ? "activeLink" : ""}
      >Dashboard</NavLink>
    </nav>
  )
}
