import React, { useState , useEffect, Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import './style.css';
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
// import Filter from './components/Filter'
import Joker from './components/image/Joker.jpg'
import StarWars from './components/image/star-wars.jpg'
import TheIrishman from './components/image/the-irishman.jpg'
import HarryPotter from './components/image/harry-potter.jpg'
import TheMatrix from './components/image/the-matrix.jpg'


const App=()=>{
  const [movies, setMovies]= useState([
    {title: 'Joker' ,description:'psychological thriller',posterUrl: (Joker),rate:1},
    {title: 'Star Wars' ,description:'Science fiction', posterUrl: (StarWars),rate:2},
    {title: 'The Irishman' ,description:'Epic crime film',posterUrl: (TheIrishman),rate:3},
    {title: 'Harry Potter' ,description:'Fantasy films',posterUrl: (HarryPotter),rate:5},
    {title: 'The Matrix' ,description:'Science fiction action',posterUrl: (TheMatrix),rate:4}
  ])

  const addMovie=(x)=>{
    setMovies([...movies,x])
  }
  
  const[searchMovie, setSearchMovie] = useState("");
  const[filterMovie, setfilterMovie] = useState([]);

  useEffect(()=>{
    setfilterMovie(movies.filter((movie)=>{
      return movie.title.toLowerCase().includes(searchMovie.toLowerCase())
        }))
  },[searchMovie])

  return (
      <div className="App">
        <Header />
        <div className="add-search">
        <AddMovie addMovie={addMovie} />
        <input className="search-bar" type="text" placeholder="search..." onChange={e=>setSearchMovie(e.target.value)} />
        </div>
        <MovieList movies={movies,filterMovie} />
        <Footer />
      </div>
    ); 
}

export default App;
