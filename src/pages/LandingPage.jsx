import React, { useState } from "react";

const LandingPage = () => {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://foster-birthday-backend.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ password, username: "birthdayboy"}),
        
      });
      if (response.ok) {
        setAccessGranted(true);
        setTimeout(() => {
          window.location.href = "/play";
        }, 3000);
      } else {
        setAccessDenied(true);
      }
    } catch (error) {
      console.log(error);
      setAccessDenied(true);
    }
  };

  return (
    <div className="landing-page">
      <h1>Enter The Secret Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input type="hidden" name="username" value="birthdayboy" />
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
      {accessGranted && (
        <p>Access Granted...</p>
      )}
      {accessDenied && <p>Access Denied</p>}
    </div>
  );
};

export default LandingPage;



