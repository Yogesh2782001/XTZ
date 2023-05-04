import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

function WareHouseLogin() {
    return (
        <>
            <div className='container'>
                <div className='one'>
                    <h1>WAREHOUSE LOGIN</h1>
                </div>
                <div>
                    <form>
                        <div>
                            <div className='form-l'>
                                <input type="email" className='email-l' placeholder='Email' required />
                            </div>
                            <div className='form-l'>
                                <input type="password" className='email-l' placeholder='Password' required />
                            </div>
                            <div className='form-l'>
                                <input type="checkbox" className='checkbox-f' />&nbsp; Remember me
                            </div>
                            <div className='two'>
                                <h3>New User? : <Link id='line' className="link" to="/WSignup">CREATE ACCOUNT</Link></h3>
                            </div>
                            <div className='form-l'>
                                <input type="submit" value="LOG IN" className='submit-f' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default WareHouseLogin;