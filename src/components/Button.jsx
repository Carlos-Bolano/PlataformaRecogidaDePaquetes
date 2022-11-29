import React from 'react'
import {Link} from 'react-router-dom'

function Button() {
    return (
        <div className="d-grid gap-2 col-4 mx-auto ">
            <Link className='btn btn-primary btn-md gap-2 ' to={'/create'}>
                Crear Orden
            </Link>
        </div>
    )
}

export default Button