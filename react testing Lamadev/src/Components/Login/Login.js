import { useState } from "react";
import "./Login.css";

function Login() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();

      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <div>
      <span>{user.name}</span>
      <form className="login-form">
        <input
          placeholder="Username"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button onClick={handleClick} disabled={!userInput || !passwordInput}>
          {loading ? "please wait..." : "Login"}
        </button>
        {error && <span title="error-message">Something went wrong!</span>}
      </form>
    </div>
  );
}

export default Login;
