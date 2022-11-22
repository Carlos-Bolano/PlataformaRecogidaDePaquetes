import React from 'react'
import { useState } from 'react'

import {Link} from 'react-router-dom'

import './Login.css'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validacion, setValidacion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.length === 0 || password.length === 0) {
            setValidacion('Algun campo esta vacio')
            return
        }
        alert(`Hemos obtenido los siguientes valores: \nemail: ${email} \npass: ${password}`)
        setEmail('')
        setPassword('')
    }

    const handleChangeEmail = (e) => {
        const correo = e.target.value
        setEmail(correo)
    }

    const handleChangePassword = (e) => {
        const pass = e.target.value
        setPassword(pass)
    }

    return (
        <section className="page-section bg-white" id="login">
            <div className="container ">
                {/* <!-- Outer Row --> */}
                <div className="row justify-content-center ">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0 ">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row container-login">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image overflow-hidden">
                                        <img src="https://as2.ftcdn.net/v2/jpg/05/38/85/85/1000_F_538858508_8RGLZVzD5wAs5hPu57RYvyWzXofI5Rt9.jpg" width="100%" height="100%" className='object' />
                                    </div>
                                    <div className="col-lg-6 my-auto">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h2 text-gray-900 mb-4">Bienvenido de vuelta!</h1>
                                            </div>
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="form-group ">
                                                    <input

                                                        type="email"
                                                        className="form-control form-control-user mb-4"
                                                        id="inputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Ingrese direccion de correo..."
                                                        value={email}
                                                        onChange={handleChangeEmail}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="inputPassword"
                                                        placeholder="Contraseña"
                                                        value={password}
                                                        onChange={handleChangePassword}
                                                    />
                                                </div>
                                                <div id="emailHelp" className="form-text">{validacion}
                                                </div>
                                                <div className="form-group align-right ">
                                                    <div className="custom-control custom-checkbox small mt-3 d-flex justify-content-center gap-1 ">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheck"
                                                        >
                                                            Recuerdame
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="d-grid gap-2 col-6 mx-auto">
                                                    <button
                                                        id="loginBtn"
                                                        type="submit"
                                                        className="btn btn-primary btn-user btn-block mt-3 "
                                                    >
                                                        Login
                                                    </button>

                                                </div>
                                                <hr />
                                            </form>
                                            {/* <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?
                                                </a>
                                            </div> */}
                                            <div className="text-center">
                                                <Link className="small" to="/register"
                                                >No tengo una cuenta!</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}