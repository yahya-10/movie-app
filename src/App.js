import React, { useState , useEffect, Component } from 'react';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import './style.css'
import MovieCard from './components/MovieCard'

// const FEATURED_API : "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082aO088b18page=1" ;
// const IMG_API : "https://image.tmdb.org/t/p/w1280" ;
// const SEARCH_API : "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082aO088b1&query="

class App extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     title: 'Joker' ,
  //     description:'it is a great movie' ,
  //     posterUrl:'/Joker.jpg' , 
  //     rate: 8.9
  //   }
  // }

  render(){
    return (
      <div className="App">
        <Header />
        <MovieCard />
        <Footer />
      </div>
    );
  }  
}

export default App;
