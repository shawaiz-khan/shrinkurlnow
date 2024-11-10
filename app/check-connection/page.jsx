'use client';
import React, { useEffect, useState } from 'react'

const CheckConnection = () => {
  const [status, setStatus] = useState('Checking...')

  useEffect(() => {
    const fetchConnectionStatus = async () => {
        try {
          const response = await fetch('/api/check-connection', { method: 'GET' })
          const text = await response.text()
      
          console.log('Raw response:', text)
      
          const result = JSON.parse(text)
      
          if (response.ok) {
            setStatus(result.status)
          } else {
            setStatus(`Failed to connect: ${result.error}`)
          }
        } catch (error) {
          console.error('Error fetching connection status:', error)
          setStatus('Error fetching connection status: ' + error.message)
        }
      }

    fetchConnectionStatus()
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Supabase Connection Status</h1>
      <p>{status}</p>
    </div>
  )
}

export default CheckConnection