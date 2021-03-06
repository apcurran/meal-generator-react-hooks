import React, { useState, useEffect } from 'react';
import MealCard from './MealCard';
import Searchbar from './Searchbar';
import { Link } from "react-router-dom";

export default function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchInitialMeals();
  }, []);
  
  async function fetchInitialMeals() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegan";
    const response = await fetch(API_URL);
    const data = await response.json();
    
    setMeals(data.meals);
  }

  // Function to pass down to Searchbar child and call
  async function getMeals(query) {
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    setMeals(data.meals);
  }
    return (
        <div className="home wrapper">
            <h1 className="home__title">Recipe Generator</h1>
            <Searchbar getMeals={ getMeals } />
            <main className="main-home">
              { meals.map(meal => {
                  return (
                      <Link to={ `/meals/${meal.idMeal}` } key={meal.idMeal}>
                          <MealCard title={ meal.strMeal } imgSrc={ meal.strMealThumb } />
                      </Link>
                  )
              }) }
            </main>
        </div>
    )
}
