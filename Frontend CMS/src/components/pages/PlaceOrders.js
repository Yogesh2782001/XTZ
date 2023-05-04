import React from 'react'
import Orderbtn from './Orderbtn';
import "./PlaceOrders.css"
import 'react-toastify/dist/ReactToastify.css';

function PlaceOrders() {
  
  return (
    <>
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Orderbtn
              src='images/placeorder.jpg'
              text='Place Your Order'
              path='/OrderPlacement'
            />
            <Orderbtn
              src='images/checkstatus.jpg'
              text='Check Your Status'
              path='/OrderStatus'
            />
            <Orderbtn
              src='images/trackshipment.jpg'
              text='Track Your Shipment'
              path='/Track'
            />
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default PlaceOrders