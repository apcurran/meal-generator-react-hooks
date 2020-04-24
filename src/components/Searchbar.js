import React, { useState } from 'react';

export default function Searchbar({ getMeals }) {
    const [query, setQuery] = useState("");

    function handleSearchChange(event) {
        const searchQuery = event.target.value;
        setQuery(searchQuery);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Access current user query state here and send to passed func from parent.
        getMeals(query);
    }

    return (
        <form onSubmit={ handleSubmit } className="searchbar">
            <input onChange={ handleSearchChange } type="text"/>
            <button type="submit">Get Recipe</button>
        </form>
    )
}
