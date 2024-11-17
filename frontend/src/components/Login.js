import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../fbc';

function Login({ setUser }) {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      setUser(user);

      const firstName = user.displayName.split(' ')[0];
      alert(`Welcome, ${firstName}!`);

      navigate('/dashboard');
    } catch (error) {
      alert('Google Login Failed!');
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Xeno CRM</h1>
      <button className="login-button small" onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;
