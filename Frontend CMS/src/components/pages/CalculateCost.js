import React,{useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';


function CalculateCost() {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({

    pickup:'',
    drop: '',
    weight: '',
    typeofGood: ''
  });
  const handleChange = (event) => {

    const { name, value } = event.target;

    setOrderData((prevOrderData) => ({

      ...prevOrderData,

      [name]: value,

    }));

  };

 
  const handleSubmit = (event) => {

    event.preventDefault();

    fetch("http://localhost:3000/placeorder/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)

    })

      .then(response => {

        if (response.ok) {
                navigate('/PlaceOrders');
         
          // Add code to handle successful registration (e.g. redirect to another page)
        }
        else {
             console.log("not able to  show");
            
          // Add code to handle failed registration (e.g. display error message)
        }

      })
       
      .catch(error => {


        // Add code to handle error (e.g. display error message)

      });
  };
  return (
   <div>
     <div className='one'>
        <h1>Enter Pickup and Destination Location</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
          <div className='form-l'>
          <select  id="pickup" className="email-l lar"  onChange={handleChange} required>
                <option>---Select---</option>
                <option value={orderData.pickup = "Bangalore"}>Bangalore</option>
                <option value={orderData.pickup= "Chennai"}>Chennai</option>
                <option value={orderData.pickup= "Delhi"}>Delhi</option>
                <option value={orderData.pickup= "Hyderabad"}>Hyderabad</option>
                <option value={orderData.pickup= "Kolkata"}>Kolkata</option>
                <option value={orderData.pickup= "Mumbai"}>Mumbai</option>
             </select> 
          </div>
          <div className='form-l'>
          <select  id="destination" className="email-l lar" onChange={handleChange} required>
                <option>---Select---</option>
                <option value={orderData.drop="Bangalore"}>Bangalore</option>
                <option value={orderData.drop="Chennai"}>Chennai</option>
                <option value={orderData.drop="Delhi"}>Delhi</option>
                <option value={orderData.drop="Hyderabad"}>Hyderabad</option>
                <option value={orderData.drop="Kolkata"}>Kolkata</option>
                <option value={orderData.drop="Mumbai"}>Mumbai</option>
             </select> 
          </div>
          <div className='form-l'>
            <input type="text" className='email-l' value={orderData.email} name='weight' placeholder='Enter Weight in KG' onChange={handleChange} required/>
          </div>
           <div className='form-l'>
          <select  id="pickup" className="email-l lar" onChange={handleChange} required>
                <option value={orderData.typeofGood}>---Select---</option>
                <option value={orderData.typeofGood = "Medical Cares"}>Medical Cares</option>
                <option value={orderData.typeofGood = "Food and Beverages"}>Food and Beverages</option>
                <option value={orderData.typeofGood = "Hazardous"}>Hazardous</option>
                <option value={orderData.typeofGood = "Apparel"}>Apparel</option>
                <option value={orderData.typeofGood = "Furniture"}>Furniture</option>
             </select> 
          </div>
          <div className='form-l'>
            <input type="submit" value="Submit" className='submit-f'/>
          </div>
          </div>
        </form>
      </div>
   </div>
  
    
  )
}

export default CalculateCost;