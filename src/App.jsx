
import './App.css'
import { NavBar } from './components/NavBar'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import  Home  from './pages/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />}  />
          <Route path='/register' element={<Register />}  />
          <Route path='/home' element={<Home />}  />


        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
