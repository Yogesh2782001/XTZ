import React,{useContext, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../App';

function Login() {
    const navigate = useNavigate();
    const {state, dispatch} = useContext(UserContext);
  const [LoginData, setFormData] = useState({
    email: '',
    password: ''
  });

const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((prevFormData) => ({

      ...prevFormData,

      [name]: value,

    }));


};
const handleSubmit = (event) => {

    event.preventDefault();

    console.log(LoginData);

    fetch("http://localhost:3000/auth/login", {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json'

      },

      body: JSON.stringify(LoginData)

    })
    .then(response => response.json())
      .then(data => {

        if (data.reshash) {
          dispatch({type:"USER", payload:true})  
          navigate('/PlaceOrders');
          toast.success("Login Successful")

          // Add code to handle successful registration (e.g. redirect to another page)

        } else {

          console.log('Registration failed.');
          navigate('/User');

          // Add code to handle failed registration (e.g. display error message)

        }

      })

      .catch(error => {

        console.error('Error registering user:', error);

        // Add code to handle error (e.g. display error message)

      });

  };

return (
        <>
            <div className='container'>
                <div className='one'>
                    <h1>USER LOGIN</h1>
                </div>
                
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='form-l'>
                                <input type="email" className='email-l' placeholder='Email' name='email' value={LoginData.email}  onChange={handleChange} required/>
                            </div>
                            <div className='form-l'>
                                <input type="password" className='email-l' placeholder='Password'  name='password' value={LoginData.password}  onChange={handleChange} required/>
                            </div>

                            <div className='two'>
                                <h3>New User? : <Link id='line' className="link" to="/SignUp">CREATE ACCOUNT</Link></h3>
                            </div>
                            <div className='form-l'>
                        <input type="submit" value="LOG IN" className='submit-f'/>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;