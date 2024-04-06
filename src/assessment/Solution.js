import React, { useState, useEffect } from 'react';

const Solution = () => {
  const [error, setError] = useState(null);

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      <h3>Solution</h3>
    </div>
  );
}

export default Solution;
