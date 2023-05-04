import React, { useState } from 'react'
import './OperationsDash.css';
import { Link } from 'react-router-dom';

function OperationsDash() {

  const [showInfo, setShowInfo] = useState(false);
  const [data, setData] = useState('');

  const handleClick = () => {
    // This is just an example, you would typically fetch data from an API or some other source here
    const dataToDisplay = ' Net Capacity       :20000Kg \n Available Capacity :3750Kg \n Units Available    :S3,D4';
    setData(dataToDisplay);
    setShowInfo(prevShowInfo => !prevShowInfo);
  };
  return (
    <div>
        <div className='heading-dash'>
            <h1>Operations Dashboard</h1>
        </div>
        <div className='box-all'>
            <div className='box'>
                <h3 className='data-op'>Total Orders</h3>
                <h3 className='data-op'>21</h3>
            </div>
            <div className='box'>
                <h3 className='data-op'>Incoming Orders</h3>
                <h3 className='data-op'>6</h3>
            </div>
            <div className='box'>
                <h3 className='data-op'>Outgoing Orders</h3>
                <h3 className='data-op'>4</h3>
            </div>
        </div>
        <div className='box-bt'>
            <div className='one-bt'>
                <button onClick={handleClick} className='bt'>Check Storage</button>
                {showInfo && <div className='show-info'><pre>{data}</pre></div>}
            </div>
            <div className='one-bt'>
               <Link to="/Login">
                   <button className='bt'>Check Driver Status</button>
               </Link>
            </div>
        </div>
    </div>
  )
}

export default OperationsDash;