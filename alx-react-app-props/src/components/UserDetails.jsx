import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      margin: '20px'
    }}>
      <h3 style={{ color: '#333' }}>User Details</h3>
      <p style={{ fontSize: '16px' }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{ fontSize: '16px' }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;