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
    console.log(data.meals);
    
    setMeals(data.meals);
  }

  // Function to pass down to Searchbar child and call
  async function getMeals(query) {
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);

    setMeals(data.meals);
  }
    return (
        <div>
            <h1>Hello Home</h1>
            <Searchbar getMeals={ getMeals } />
            { meals.map(meal => {
                return (
                    <Link to={ `/meals/${meal.idMeal}` } key={meal.idMeal}>
                        <MealCard title={ meal.strMeal } imgSrc={ meal.strMealThumb } />
                    </Link>
                )
            }) }
        </div>
    )
}
