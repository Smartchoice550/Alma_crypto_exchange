import React from 'react'

export default function WalletCard({ currency, balance }) {
  return (
    <div className="border p-4 rounded-lg shadow bg-white">
      <h2 className="text-lg font-bold">{currency}</h2>
      <p className="text-gray-600">Balance: {balance}</p>
    </div>
  )
}
