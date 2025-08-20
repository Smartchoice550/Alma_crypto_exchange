import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import WalletCard from '../components/WalletCard'

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      {user && <p>Welcome, {user.email}</p>}

      <div className="grid grid-cols-2 gap-4 mt-6">
        <WalletCard currency="BTC" balance="0.05" />
        <WalletCard currency="ETH" balance="1.2" />
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  )
}
