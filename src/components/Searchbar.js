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
            <div className="searchbar-group">
                <input onChange={ handleSearchChange } type="text" className="searchbar__input"/>
                <button type="submit" className="searchbar__submit">Get Recipe</button>
            </div>
        </form>
    )
}
