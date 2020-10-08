import React, { useState , useEffect, Component } from 'react';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import './style.css'
import MovieList from './components/MovieList'
import Joker from './components/image/Joker.jpg'
import StarWars from './components/image/star-wars.jpg'
import TheIrishman from './components/image/the-irishman.jpg'
import HarryPotter from './components/image/harry-potter.jpg'

function App(){

      let  obj=[
        {title: 'Joker' ,description:'psychological thriller',posterUrl: (Joker), rate: 8.9},
        {title: 'Star Wars' ,description:'science fiction', posterUrl: (StarWars), rate: 9},
        {title: 'The Irishman' ,description:'epic crime film',posterUrl: (TheIrishman), rate: 7},
        {title: 'Harry Potter' ,description:'fantasy films',posterUrl: (HarryPotter), rate: 7.8},
      ]
    return (
      <div className="App">
        <Header />
        <MovieList list={obj} />
        <Footer />
      </div>
    ); 
}

export default App;
