import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#0066cc' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ 
            display: 'block', 
            margin: '10px 0',
            padding: '10px',
            width: '100%',
            fontSize: '14px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ 
            display: 'block', 
            margin: '10px 0',
            padding: '10px',
            width: '100%',
            fontSize: '14px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ 
            display: 'block', 
            margin: '10px 0',
            padding: '10px',
            width: '100%',
            fontSize: '14px',
            height: '100px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#0066cc',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;