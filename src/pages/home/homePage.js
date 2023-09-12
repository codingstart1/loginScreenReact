import React from 'react';
import userAvatar from '../../assets/images/user-avatar.png'
import { useHistory } from 'react-router-dom';

export default function HomePage() {
  const history = useHistory()
  return (
    <div className='home-screen'>
      <header>
        <h3>System Name</h3>
        <a onClick={()=> history.push('/')}>Logout</a>
      </header>
      <div className='page-content'>
        <div className='user-card'>
          <img src={userAvatar} alt='user-avatar' />
          <h3>User Full Name</h3>
          <div className='user-meta'>
            <p>
              <span>Username:</span>
              <span>Test user name</span>
            </p>
            <p>
              <span>Email:</span>
              <span>test@test.com</span>
            </p>
            <p>
              <span>Gender:</span>
              <span>Male or Female</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
