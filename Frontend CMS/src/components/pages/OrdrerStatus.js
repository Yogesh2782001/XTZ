import React from 'react'
import { useState, useEffect } from 'react';
import './OrderStatus.css';


function OrderStatus() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/data.json')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      }, []);


      return (
          <div className='order-container'>
              <div className='one'>
                  <h1>Order Status</h1>
              </div>
        <div id='scrollit'>
        <table>
          <thead>
            <tr>
              <th>Order_id</th>
              <th>Pickup_Location</th>
              <th>Destination_Location</th>
              <th>Order_Status</th>
            </tr>
          </thead>
          <tbody>
          {data.map(datas => (
              <tr key={datas.orderid}>
                <td>{datas.orderid}</td>
                <td>{datas.pickup}</td>
                <td>{datas.dest}</td>
                <td>{datas.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      );
    }

export {OrderStatus}