import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function HomePage(props) {
  const history = useHistory();

  // we need to fetch userData from history state and set it into our home page
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(props.location.state.userData);
  }, [props.location.userData]);


  return (
    <div className='home-screen'>
      <header>
        <h3>System Name</h3>
        <a onClick={() => history.push('/')}>Logout</a>
      </header>
      <div className='page-content'>
        {userData && (
          <div className='user-card'>
            <img src={userData.image} alt='user-avatar' />
            <h3>{userData.firstName}{' '}{userData.lastName}</h3>
            <div className='user-meta'>
              <p>
                <span>Username:</span>
                <span>{userData.username}</span>
              </p>
              <p>
                <span>Email:</span>
                <span>{userData.email}</span>
              </p>
              <p>
                <span>Gender:</span>
                <span>{userData.gender}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
