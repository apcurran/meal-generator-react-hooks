import React, { useState, useEffect } from 'react';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchInitialMeals();
  }, []);
  
  async function fetchInitialMeals() {

  }

  return (
    <div className="App">
      <h1>Hello Meals!</h1>
    </div>
  );
}

export default App;
