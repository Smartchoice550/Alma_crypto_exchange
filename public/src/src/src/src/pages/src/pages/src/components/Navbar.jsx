import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">ALMA Exchange</h1>
      <div>
        <Link to="/" className="mr-4">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  )
}
