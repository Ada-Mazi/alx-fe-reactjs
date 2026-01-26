import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';
import './App.css'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ padding: '20px', backgroundColor: '#f0f8ff', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>
          React Context API Demo
        </h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;