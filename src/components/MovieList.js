import React from 'react';
import MovieCard from './MovieCard'
import { Route, Link } from 'react-router-dom'
import MovieDetail from './MovieDetail';

const MovieList=({movies})=>{

    var linkList = movies.map((movie,i) => {
        return(
        <Link to = {`/movieList/${movie.id}`}>
            <MovieCard key={i} card={movie} />
        </Link>
        )
    })

    return (
        <div className="movie-list">
            {/* {movies.map((el, i)=>(<MovieCard key={i} card={el} />))} */}
            {linkList}
            <Route path={`${movies.url}/:movieId`}
            render={ (props) => <MovieDetail card = {movies} {...props} />}/>

        </div>
    )

}

export default MovieList



