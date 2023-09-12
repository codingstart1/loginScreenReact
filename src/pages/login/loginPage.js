import React from 'react'
import { useHistory } from 'react-router-dom'

export default function LoginPage() {
    const history = useHistory();
    return (
        <div className='login-screen'>
            <div className='login-form'>
                <div className='left-part' />
                <div className='right-part'>
                    <h3>Login Account</h3>
                    <div className='input-group'>
                        <label>Username</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Enter username'
                        />
                    </div>
                    <div className='input-group'>
                        <label>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            placeholder='Enter password'
                        />
                    </div>
                    <div className='submit-action'>
                        <button className='submit-btn' onClick={()=> history.push('/home')}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
