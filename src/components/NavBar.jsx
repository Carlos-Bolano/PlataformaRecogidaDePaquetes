import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

export function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <div className="container-fluid align-center">
        <div className="text-inta fs-2 fw-bolder ">
          <span className="navbar-brand h1 logo-inta ">insta<span className='d-logo'>YA!</span></span>
        </div>
        <ul className='navbar-nav d-flex btns'>
          <li className='nav-item'>
            <Link className='btn btn-primary' to={'/'}>
              Iniciar Sesion 
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='btn btn-outline-primary' to={'/register'}>
              Registrar
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  )
}