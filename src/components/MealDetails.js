import React, { useEffect, useState } from 'react';

export default function MealDetails(props) {
    const mealId = props.match.params.meal_id;
    const [mealData, setMealData] = useState([]);

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

    return (
        <div className="meal-details wrapper">
            <h1 className="meal-details__title">{ mealData.strMeal }</h1>
            <h3 className="meal-details__category">{ mealData.strCategory }</h3>
            <figure className="meal-details__figure">
                <img className="meal-details__figure__img" src={ mealData.strMealThumb } alt={ mealData.strMeal }/>
            </figure>
            <p className="meal-details__instructions">{ mealData.strInstructions }</p>
        </div>
    )
}
