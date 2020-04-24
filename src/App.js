import React, { useState, useEffect } from 'react';
import MealCard from './components/MealCard';
import Searchbar from './components/Searchbar';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchInitialMeals();
  }, []);
  
  async function fetchInitialMeals() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan";
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data.meals);
    
    setMeals(data.meals);
  }

  // Function to pass down to Searchbar child and call
  async function getMeal(query) {
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);

    setMeals(data.meals);
  }

  return (
    <div className="App">
      <h1>Hello Meals!</h1>
      <Searchbar getMeal={ getMeal } />
      { meals.map(meal => {
        return (
          <MealCard key={meal.idMeal} title={ meal.strMeal } imgSrc={ meal.strMealThumb } />
        )
      }) }
    </div>
  );
}

export default App;
