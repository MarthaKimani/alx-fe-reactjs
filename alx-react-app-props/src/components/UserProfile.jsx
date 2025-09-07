import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', marginBottom: '8px' }}>{userData.name}</h2>
      <p style={{ fontSize: '16px' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{userData.age || 'N/A'}</span>
      </p>
      <p style={{ color: 'dimgray', lineHeight: '1.5' }}>{userData.bio || 'No bio available.'}</p>
    </div>
  );
}

export default UserProfile;
