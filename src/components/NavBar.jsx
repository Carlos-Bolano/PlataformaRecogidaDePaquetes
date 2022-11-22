import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export function NavBar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <div className="text-inta">
          <span class="navbar-brand mb-0 h1 logo-inta">insta<span className='d-logo'>YA</span></span>
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