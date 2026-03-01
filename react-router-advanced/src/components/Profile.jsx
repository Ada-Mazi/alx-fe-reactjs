import { Link, Outlet } from "react-router-dom";

const Profile = () => (
  <div>
    <h2>👤 Profile Page</h2>
    <nav style={{ marginBottom: "15px" }}>
      <Link to="details" style={{ marginRight: "15px" }}>Profile Details</Link>
      <Link to="settings">Profile Settings</Link>
    </nav>
    <Outlet />
  </div>
);
export default Profile;