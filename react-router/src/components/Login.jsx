import { useAuth } from "./Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  function handleLogin() {
    auth.login(user);
    navigate("/profile",{replace:true});
  }
  return (
    <div>
      <div>
        <label htmlFor="">Username:</label>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
}
