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
import TheMatrix from './components/image/the-matrix.jpg'

function App(){

      let  obj=[
        {title: 'Joker' ,description:'psychological thriller',posterUrl: (Joker)},
        {title: 'Star Wars' ,description:'science fiction', posterUrl: (StarWars)},
        {title: 'The Irishman' ,description:'epic crime film',posterUrl: (TheIrishman)},
        {title: 'Harry Potter' ,description:'fantasy films',posterUrl: (HarryPotter)},
        {title: 'The Matrix' ,description:'science fiction action',posterUrl: (TheMatrix)}
      ]
    return (
      <div className="App">
        <Header />
        <div className="list-filter">
        <Filter className="filter-field" />
        <MovieList list={obj} />
        </div>
        <Footer />
      </div>
    ); 
}

export default App;
