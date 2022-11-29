import React from "react";

import { Link } from "react-router-dom";
import "./CreateOrder.css";

function CreateOrder() {
  return (
    <div className="container">
      <h1 className="h1 text-center my-5">
        Gestion De Paquetes - Registro De Ordenes
      </h1>
      <div className="container card overflow-hidden border-0 shadow-lg my-5 p-4">
        <form>
          <header>
            <div className="d-flex  justify-content-between flex-wrap">
              <div className="form-group input-group-sm  d-flex align-items-center">
                <label htmlFor="" className="input-group-text">
                  Fecha
                </label>
                <input
                  type="text"
                  placeholder="00/00/0000"
                  className="input-small form-control rounded-2 "
                />
              </div>

              <div className="form-group input-group-sm  d-flex align-items-center">
                <label htmlFor="" className="input-group-text">
                  Hora
                </label>
                <input
                  type="text"
                  placeholder="00:00 00"
                  className="input-small form-control rounded-2"
                 
                />
              </div>

              <div className="form-group input-group-sm  d-flex align-items-center">
                <label htmlFor="" className="input-group-text">
                  Alto
                </label>
                <input
                  type="text"
                  placeholder="00 Cm "
                  className="input-small form-control rounded-2"
                 
                />
              </div>

              <div className="form-group input-group-sm  d-flex align-items-center">
                <label htmlFor="" className="input-group-text">
                  Acho
                </label>
                <input
                  type="text"
                  placeholder="00 Cm"
                  className="input-small form-control rounded-2"
                 
                />
              </div>

              <div className="form-group input-group-sm  d-flex align-items-center">
                <label htmlFor="" className="input-group-text">
                  Peso
                </label>
                <input
                  type="text"
                  placeholder="00 Kg"
                  className="input-small form-control rounded-2"
                 
                />
              </div>
            </div>
          </header>
        </form>

        <section className="mt-5 d-flex justify-content-between gap-4 flex-wrap ">
          <div className="left-conten gap-4 d-flex flex-column">
            <div className="form-group input-group-sm gap-2 justify-content-between d-flex align-items-center">
              <label htmlFor="" className="text-primary fw-bold">
                {" "}
                Direccion Recogida
              </label>
              <input
                type="text"
                placeholder="calle 1 #2 3"
                className=" form-control rounded-2 input-medium"
               
              />
            </div>

            <div className="form-group input-group-sm gap-2 justify-content-between d-flex align-items-center">
              <label htmlFor="" className="text-primary fw-bold">
                {" "}
                Ciudad Recogida
              </label>
              <input
                type="text"
                placeholder="Barranquilla"
                className=" form-control rounded-2 input-medium"
               
              />
            </div>

            <div className="form-group input-group-sm gap-2 justify-content-between d-flex align-items-center">
              <label htmlFor="" className="text-primary fw-bold">
                {" "}
                Nombre Destinario
              </label>
              <input
                type="text"
                placeholder="Manuel Enrique Cepeda Flores"
                className=" form-control rounded-2 input-medium"
                
              />
            </div>

            <div className="form-group input-group-sm gap-2 justify-content-between d-flex align-items-center">
              <label htmlFor="" className="text-primary fw-bold">
                {" "}
                Ciudad Destinario
              </label>
              <input
                type="text"
                placeholder="Bogota"
                className=" form-control rounded-2 input-medium"
              
              />
            </div>
          </div>

          <div className="right-content gap-4 d-flex flex-column">
            <div className="form-group input-group-sm justify-content-between  gap-2 d-flex align-items-center">
              <label htmlFor="" className="text-primary fw-bold">
                Direccion Entrega
              </label>
              <input
                type="text"
                placeholder="calle 1 #2 3"
                className=" form-control rounded-2 input-medium"
              
              />
            </div>

            <div className="form-group input-group-sm justify-content-between  gap-2 d-flex align-items-center">
              <label htmlFor="" className="text-primary fw-bold">
                Ciudad entrega
              </label>
              <input
                type="text"
                placeholder="Bogota"
                className=" form-control rounded-2 input-medium"
              
              />
            </div>
            <div className="form-group input-group-sm justify-content-between  gap-2 d-flex align-items-center">
              <label htmlFor="" className="text-primary fw-bold">
                Estado de Entrega
              </label>
              <select
                className="form-select form-select-lg input-medium "
                aria-label=".form-select-lg example"
              >
                <option defaultValue>Guardado</option>
                <option value="1">Cancelado</option>
                <option value="2">Cumplido</option>
              </select>
            </div>
            <div className="">

            <Link to={"/home"} className=" btn btn-primary input-medium ">
              Crear Orden
            </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CreateOrder;
