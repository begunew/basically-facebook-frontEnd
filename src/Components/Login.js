import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, password, "hi");

    axios.post({
      url: "http://localhost:3000/login",
      data: {
        email,
        password,
      },
    });
  };

  return (
    <div>
      <div className="main">
        <h1>Login</h1>
        <div className="input-box">
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className="input-box">
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
