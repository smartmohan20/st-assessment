const Solution = () => {
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div className="Solution">
      <header className="Solution-header">
        <h3>Solution</h3>
      </header>
    </div>
  );
}

export default Solution;
