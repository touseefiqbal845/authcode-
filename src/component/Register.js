import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        email,
        password,
      });
      alert(response.data.message);
      setStep(2); // Move to the verification step
    } catch (error) {
      alert(error.response?.data?.error || 'Error occurred');
    }
  };

  const handleVerify = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/verify', {
        email,
        code,
      });
      alert(response.data.message);
      setStep(3); // Account verified, move to login step
    } catch (error) {
      alert(error.response?.data?.error || 'Error occurred');
    }
  };

  return (
    <div className="register">
      {step === 1 && (
        <div>
          <h2>Register</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Verify Account</h2>
          <input
            type="text"
            placeholder="Enter Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={handleVerify}>Verify</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Account Verified!</h2>
          <a href="/login">Go to Login</a>
        </div>
      )}
    </div>
  );
};

export default Register;
