import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px',
      backgroundColor: '#e8f4f8',
      margin: '20px',
      borderRadius: '10px'
    }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Counter Application</h2>
      <p style={{ 
        fontSize: '48px', 
        fontWeight: 'bold', 
        color: '#0066cc',
        margin: '20px 0'
      }}>
        Current Count: {count}
      </p>
      <div>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;