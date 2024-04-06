import React, { useState, useEffect } from 'react';

const X_ENDPOINT = 'https://retoolapi.dev/gDa8uC/data';
const Y_ENDPOINT = 'https://retoolapi.dev/o5zMs5/data';

const Solution = () => {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const [error, setError] = useState(null);
  
  // Method to fetch data from API
  const fetchData = async () => {
    try {
      const responseX = await fetch(X_ENDPOINT);
      if (!responseX.ok) {
        throw new Error('Failed to fetch X data');
      }

      const responseY = await fetch(Y_ENDPOINT);
      if (!responseY.ok) {
        throw new Error('Failed to fetch Y data');
      }

      const dataX = await responseX.json();
      const dataY = await responseY.json();
      setXData(dataX);
      setYData(dataY);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run only once on component mount

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
