import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#333', 
      padding: '15px',
      marginBottom: '20px'
    }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '20px',
        justifyContent: 'center',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to="/" style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ 
            color: 'white', 
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;