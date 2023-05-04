import React,{useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../App';


function SignUp() {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(UserContext);
  const [formData, setFormData] = useState({

    firstname: '',
    lastname : '',
    email: '',
    contact : '',
    password: ''

  });
  const [isEmailError, setIsEmailError] = useState(false);
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prevFormData) => ({

      ...prevFormData,

      [name]: value,

    }));
      setIsEmailError(false);
  };

 
  const handleSubmit = (event) => {

    event.preventDefault();

    console.log(formData);

    fetch("http://localhost:3000/auth/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)

    })

      .then(response => {

        if (response.ok) {
          dispatch({type:"USER", payload:true})
                navigate('/PlaceOrders');
                toast.success("Registration Successful")
         
          // Add code to handle successful registration (e.g. redirect to another page)
        }
        else {

            setIsEmailError(true);
            toast.error("Registration Failed")
            
          // Add code to handle failed registration (e.g. display error message)
        }

      })
       
      .catch(error => {


        // Add code to handle error (e.g. display error message)

      });
  };
  return (
    <>
          <div className='container'>
        <div className='one'>
          <h1>Enter your details to register</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className='form-l'>
                <input type="text" className='email-l' name='firstname' value={formData.firstname} placeholder='First Name' onChange={handleChange} required />
              </div>
              <div className='form-l'>
                <input type="text" className='email-l' name='lastname' value={formData.lastname} placeholder='Last Name' onChange={handleChange} required />
              </div>
              <div className='form-l'>
                <input type="email" className={isEmailError ? 'email-l error-email' : 'email-l'} name='email' value={formData.email} placeholder='Email' onChange={handleChange} required />
              </div>
              <div className='form-l'>
                <input type="text" className='email-l' name='contact' value={formData.contact} placeholder='Contact No.' onChange={handleChange} required />
              </div>
              <div className='form-l'>
                <input type="password" className='email-l' name='password' value={formData.password} placeholder='Create Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onChange={handleChange} required />
              </div>
              <div className='two'>
                <h3>Already User? : <Link id='line' className="link" to="/User">LOGIN</Link></h3>
              </div>
              <div className='form-l'>
                <input type="submit" value="REGISTER" className='submit-f' />
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export {SignUp}