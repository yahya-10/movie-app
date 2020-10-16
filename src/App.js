import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import './style.css';
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
import Joker from './components/image/Joker.jpg'
import StarWars from './components/image/star-wars.jpg'
import TheIrishman from './components/image/the-irishman.jpg'
import HarryPotter from './components/image/harry-potter.jpg'
import TheMatrix from './components/image/the-matrix.jpg'
import ReactStars from "react-rating-stars-component";


const App=()=>{
  const [movies, setMovies]= useState([
    {title: 'Joker' ,description:'psychological thriller',posterUrl: (Joker),rate:2},
    {title: 'Star Wars' ,description:'Science fiction', posterUrl: (StarWars),rate:4},
    {title: 'The Irishman' ,description:'Epic crime film',posterUrl: (TheIrishman),rate:3},
    {title: 'Harry Potter' ,description:'Fantasy films',posterUrl: (HarryPotter),rate:5},
    {title: 'The Matrix' ,description:'Science fiction action',posterUrl: (TheMatrix),rate:1}
  ])

  const addMovie=(x)=>{
    setMovies([...movies,x])
  }
  
  const[searchMovie, setSearchMovie] = useState("");

  const[search, setSearch] = useState("");

  return (
      <div className="App">
        <Header />
        <div className="add-search">
          <AddMovie addMovie={addMovie} />
          <input className="search-bar" type="text" placeholder="search..." onChange={e=>setSearchMovie(e.target.value)} /><br/>
          <ReactStars
            count={5}
            onChange={(newRate)=>setSearch(newRate)}
            size={24}
            activeColor="#ffd700"
          />
        </div>
          <MovieList movies={movies.filter( 
            movie => movie.title.toLowerCase().includes(searchMovie.toLowerCase()) && movie.rate >=search)
          }/>
        <Footer />
      </div>
    ); 
}

export default App;
