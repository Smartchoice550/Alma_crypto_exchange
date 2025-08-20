import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
    } else {
      navigate('/dashboard')
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setError(error.message)
    } else {
      alert('Check your email for confirmation!')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">Login / Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="flex flex-col w-64">
        <input
          className="mb-2 p-2 border"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-2 p-2 border"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 mb-2"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="bg-green-500 text-white p-2"
          onClick={handleSignup}
        >
          Register
        </button>
      </form>
    </div>
  )
}
