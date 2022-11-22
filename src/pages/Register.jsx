import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

export function Register() {
    // utilice esta plantilla para adaptarla de manera que tambien
    // pueda obtener los valores solicitados mediante estados.

    // Si desea ir mas alla, cree un nuevo componente donde agregue un listado de
    // los datos que se han ido introduciendo.
    // No permita el actuar por defecto del boton Regitrar cuenta
  return (
    <section className="page-section bg-white" id="register">
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* <!-- Nested Row within Card Body --> */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image">
                <img src="https://img.freepik.com/premium-photo/cropped-image-female-barista-working-coffeeshop-using-cash-register-when-accepting-payment-entering-order-detaikls_274689-21011.jpg?w=900" className='img-left' width="100%" height="100%" alt="" />
              </div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h2 text-gray-900 mb-4">Crea una cuenta!</h1>
                  </div>
                  <form className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user mb-4"
                          id="exampleFirstName"
                          placeholder="Nombres"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user mb-4"
                          id="exampleLastName"
                          placeholder="Apellidos"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user mb-4"
                        id="exampleInputEmail"
                        placeholder="Correo electronico"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          className="form-control form-control-user mb-4"
                          id="exampleInputPassword"
                          placeholder="Contraseña"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user mb-4"
                          id="exampleRepeatPassword"
                          placeholder="Repite la contraseña"
                        />
                      </div>
                    </div>
                    <div className="d-flex">

                    <button
                      className="btn btn-primary btn-user btn-block mx-auto"
                    >
                      Registrar cuenta
                    </button>

                    </div>
                  </form>
                  <hr />
                  {/* <!-- <div className="text-center">
                    <a className="small" href="forgot-password.html"
                      >Forgot Password?</a
                    >
                  </div> --> */}
                  <div className="text-center">
                    <Link className="small" to="/"
                      >Tienes una cuenta? logueate!</Link>
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