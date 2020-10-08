import React from 'react';
import MovieCard from './MovieCard'

const MovieList = ({list}) => {
    return (
        <div>
            {list.map((el, i)=>(<MovieCard key={i} card={el} />))}
        </div>
    )
}

export default MovieList


