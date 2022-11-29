import React from 'react'
import {Link} from 'react-router-dom'

function OrderList() {
    return (
        <div className="container card overflow-hidden border-0 shadow-lg my-5 p-4">
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr className='text-center'>
                            <th scope="col"># Servicio</th>
                            <th scope="col">Fecha De Entrega</th>
                            <th scope="col">Ciudad de Entrega</th>
                            <th scope="col">Direccion De Entrega</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody id="items">

                        <tr className='text-center'>
                            <td scope="row"><Link to={'/uptade'}> 1</Link></td>
                            <td>01/02/2022</td>
                            <td>barranquilla</td>
                            <td>calle 1 #2 3</td>
                            <td>cancelado</td>
                        </tr>
                        

                    </tbody>
                    <tfoot>
                        <tr id="footer">
                            {/* <th scope="row" colspan="5">Lista vacía - comience a ordenar</th> */}
                        </tr>
                    </tfoot>
                </table>


            </div>


        </div>
    )
}

export default OrderList