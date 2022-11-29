import React from 'react'
import Button from '../components/Button'
import OrderList from '../components/OrderList'

function Home() {
    return (
        <div className='container'>
            <h1 className='h1 text-center my-5'>Gestion De Paquetes - Listado De Ordenes</h1>
            <Button />
            <OrderList />
        </div>
    )
}

export default Home