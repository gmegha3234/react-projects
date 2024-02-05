import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    auth.logout();
    navigate("/");
  }
  return (
    <>
      <div>Welcome {auth.user}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
