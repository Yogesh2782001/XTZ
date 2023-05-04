import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

function WareHouseSignUp() {
  return (
    <>
        <div className='container'>
        <div className='one'>
            <h1>Enter your details to register</h1>
        </div>
        <div>
          <form>
            <div>
              <div className='form-l'>
                <input type="name" className='email-l' placeholder='First Name' required/>
              </div>
              <div className='form-l'>
                <input type="name" className='email-l' placeholder='Last Name' required/>
              </div>
              <div className='form-l'>
                <input type="email" className='email-l' placeholder='Email' required/>
              </div>
              <div className='form-l'>
                <input type="tel" className='email-l' placeholder='Contact No.' required/>
              </div>
              <div className='form-l'>
                <input type="password" className='email-l' placeholder='Create Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                 title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
              </div>
              <div className='two'>
                    <h3>Already User? : <Link id='line' className = "link" to="/Warehouse">LOGIN</Link></h3>
              </div>
              <div className='form-l'>
                  <input type="submit" value="REGISTER" className='submit-f'/>
              </div>
            </div>
          </form>
        </div>
        </div>
    </>
  )
}

export default WareHouseSignUp;