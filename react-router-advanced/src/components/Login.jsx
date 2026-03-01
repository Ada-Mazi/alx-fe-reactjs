import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/profile");
  };

  return (
    <div>
      <h2>🔐 Login Page</h2>
      <p>You must log in to view the Profile page.</p>
      <button onClick={handleLogin} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Log In
      </button>
    </div>
  );
};
export default Login;