import React from 'react';

export default function MealCard({ title, imgSrc }) {
    return (
        <article className="meal">
            <h3 className="meal__title">{ title }</h3>
            <figure className="meal__figure">
                <img src={ imgSrc } alt={ title } className="meal__figure__img"/>
            </figure>
        </article>
    )
}
