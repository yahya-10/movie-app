import React, { Component } from 'react';
import MovieCard from './MovieCard'

const MovieList=({movies})=>{

    return (
        <div className="movie-list">
            {movies.map((el, i)=>(<MovieCard key={i} card={el} />))}
        </div>
    )

}

export default MovieList


