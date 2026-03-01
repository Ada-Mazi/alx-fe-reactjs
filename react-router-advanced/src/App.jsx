import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <nav style={{ padding: "15px", background: "#333", color: "white" }}>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
        <Link to="/profile" style={{ color: "white", marginRight: "15px" }}>Profile</Link>
        <Link to="/blog/1" style={{ color: "white", marginRight: "15px" }}>Blog Post 1</Link>
        <Link to="/blog/42" style={{ color: "white", marginRight: "15px" }}>Blog Post 42</Link>
        {isAuthenticated ? (
          <button onClick={() => setIsAuthenticated(false)} style={{ cursor: "pointer" }}>
            Log Out
          </button>
        ) : (
          <Link to="/login" style={{ color: "white" }}>Login</Link>
        )}
      </nav>

      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;