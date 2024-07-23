// components/Login.js
import React from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    router.push('/quiz');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
