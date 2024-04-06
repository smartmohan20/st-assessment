import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

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
      setXData(dataX.slice(0, 50));
      setYData(dataY.slice(0, 50));
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

  // Structured plot data
  const plotData = [{
    x: xData?.map(item => item?.RandomNumber),
    y: yData?.map(item => item?.RandomNumber),
    mode: 'markers',
    type: 'scatter'
  }];
  
  return (
    <div>
      <h3>Solution Plot</h3>
      <Plot
        data={plotData}
        layout={{ width: 800, height: 600, title: 'Plot of x vs y' }}
      />
    </div>
  );
}

export default Solution;
