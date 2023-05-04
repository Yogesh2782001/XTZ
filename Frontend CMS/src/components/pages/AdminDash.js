import React from 'react'
import './PlaceOrders.css'
import Orderbtn from './Orderbtn'

function AdminDash() {
    return (
        <>
            <div className='cards'>
                <h1>Welcome, ADMIN</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                        <Orderbtn
                            src='images/placeorder.jpg'
                            text='Warehouse Status'
                            path='/'
                        />
                        <Orderbtn
                            src='images/checkstatus.jpg'
                            text='Order Status'
                            path='/OrderStatus'
                        />
                        <Orderbtn
                            src='images/trackshipment.jpg'
                            text='Employee Details'
                            path='/Track'
                        />
                        <Orderbtn
                            src='images/trackshipment.jpg'
                            text='Approve Documents'
                            path='/Track'
                        />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDash;