import React, { useState , useEffect, Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import './style.css';
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import Joker from './components/image/Joker.jpg'
import StarWars from './components/image/star-wars.jpg'
import TheIrishman from './components/image/the-irishman.jpg'
import HarryPotter from './components/image/harry-potter.jpg'

function App(){

      let  obj=[
        {title: 'Joker' ,description:'psychological thriller',posterUrl: (Joker)},
        {title: 'Star Wars' ,description:'science fiction', posterUrl: (StarWars)},
        {title: 'The Irishman' ,description:'epic crime film',posterUrl: (TheIrishman)},
        {title: 'Harry Potter' ,description:'fantasy films',posterUrl: (HarryPotter)},
      ]
    return (
      <div className="App">
        <Header />
        <MovieList list={obj} />
        <Filter />
        {/* <Footer /> */}
      </div>
    ); 
}

export default App;
