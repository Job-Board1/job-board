import React, { useState } from 'react'
import authService from '../services/authService'
import './AuthForm.css'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignIn = async () => {
    try {
      const response = await authService.signIn({ username, password })
      setMessage(response.data.message)
    } catch (error) {
      setMessage('Error signing in')
    }
  }

  return (
    <div className="auth-form">
      <h2>Sign In</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
      <p>{message}</p>
    </div>
  )
}

export default SignIn
