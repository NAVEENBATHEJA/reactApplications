import React, { useState } from 'react';
import Movie from './Movie';

export default function() {
    const [movies, setMovies] = useState([
        {
            name: "Naveen Kumar",
            price: '$10',
            id: 1234
        },
        {
            name: "Naveen",
            price: '$1',
            id: 12343
        },
        {
            name: "Kumar",
            price: '$1.0',
            id: 12324
        }
    ]);
    return (
        <div>
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} />
            ))}
        </div>
    );
};