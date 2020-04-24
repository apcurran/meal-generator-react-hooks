import React from 'react';
import Home from './components/Home';
import MealDetails from './components/MealDetails';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={ Home } />
        <Route path="/meals/:meal_id" component={ MealDetails } />
      </div>
    </Router>
  );
}

export default App;
