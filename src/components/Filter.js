import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard';
import MovieList from './MovieList';

const Filter = () => {
    const[movies, setMovies] = useState([]);
    const[search, setSearch] = useState('');
    const[filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() =>{
        setFilteredMovies( movies.filter( movie =>{
            return movie.title.toLowerCase().includes(search.toLowerCase())
        })
    )
},[search, movies])

    return (
        <div>
            <input type="text" placeholder="search"/>
            <button onClick={ e => setSearch(e.target.value)}>search</button>
            {filteredMovies.map((movie, idx)=>(
                <MovieCard key={idx} {...movie} />
            ))}
        </div>
    )
}

export default Filter
