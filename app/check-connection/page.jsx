import React from 'react';

const CheckConnection = async () => {
  let status = '';
  let errorMessage = '';

  try {
    const response = await fetch(`${process.env.BASE_URL}/api/check-connection`, {
      method: 'GET',
      cache: 'no-store'
    });
    
    const result = await response.json();

    if (response.ok) {
      status = result.status;
    } else {
      status = 'Failed to connect';
      errorMessage = result.error;
    }
  } catch (error) {
    console.error('Error fetching connection status:', error);
    status = 'Error fetching connection status';
    errorMessage = error.message;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Supabase Connection Status</h1>
      <p>{status}</p>
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
};

export default CheckConnection;