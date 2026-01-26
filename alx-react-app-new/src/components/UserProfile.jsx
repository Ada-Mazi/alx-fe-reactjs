function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '20px', 
      margin: '20px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;