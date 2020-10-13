import React, { useState , useEffect, Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import './style.css';
import MovieList from './components/MovieList'
import Joker from './components/image/Joker.jpg'
import StarWars from './components/image/star-wars.jpg'
import TheIrishman from './components/image/the-irishman.jpg'
import HarryPotter from './components/image/harry-potter.jpg'
import TheMatrix from './components/image/the-matrix.jpg'
import AddMovie from './components/AddMovie'

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

  return (
      <div className="App">
        <Header />
        <AddMovie addMovie={addMovie} />
        <div className="list-filter">
        <MovieList movies={movies} />
        </div>
        <Footer />
      </div>
    ); 
}

export default App;
