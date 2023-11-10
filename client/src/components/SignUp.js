import React, { useState } from 'react'
import authService from '../services/authService'
import './AuthForm.css'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignUp = async () => {
    try {
      const response = await authService.signUp({ username, password })
      setMessage(response.data.message)
    } catch (error) {
      setMessage('Error signing up')
    }
  }

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>{message}</p>
    </div>
  )
};

export default SignUp;
