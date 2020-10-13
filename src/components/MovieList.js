import React, { Component } from 'react';
import MovieCard from './MovieCard'
import AddMovie from './AddMovie'

const MovieList=({movies})=>{

    return (
        <div className="movie-list">
            {/* <AddMovie /> <br/> */}
            {movies.map((el, i)=>(<MovieCard key={i} card={el} />))}
        </div>
    )

}

export default MovieList


