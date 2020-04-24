import React, { useEffect, useState } from 'react';

export default function MealDetails(props) {
    const mealId = props.match.params.meal_id;
    const [mealData, setMealData] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetchMealDetails();
    }, []);

    async function fetchMealDetails() {
        const API_URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data.meals[0]);

        getIngredientsFromDetails(data.meals[0]);
        setMealData(data.meals[0]);
    }

    function getIngredientsFromDetails(details) {
        let ingredientsArr = [];

        for (let [key, value] of Object.entries(details)) {
            if (key.includes("Ingredient") && value !== "") {
                ingredientsArr.push(value);
            }
        }

        console.log(ingredientsArr);

        setIngredients();
    }

    return (
        <div>
            <h1>{ mealData.strMeal }</h1>
            <h3>{ mealData.strCategory }</h3>
            <figure>
                <img src={ mealData.strMealThumb } alt={ mealData.strMeal }/>
            </figure>
            <ol>

            </ol>
            <p>{ mealData.strInstructions }</p>
        </div>
    )
}
