import React from 'react';

const LoginPage = ({ onLogin }) => {
  const handleLoginClick = () => {
    // Perform login logic, e.g., form validation, API call, etc.
    // If login is successful, call the onLogin function
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {/* Your login form here */}
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
