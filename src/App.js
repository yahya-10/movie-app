import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
import './style.css';

import Joker from './components/image/Joker.jpg'
import StarWars from './components/image/star-wars.jpg'
import TheIrishman from './components/image/the-irishman.jpg'
import HarryPotter from './components/image/harry-potter.jpg'
import TheMatrix from './components/image/the-matrix.jpg'
import ReactStars from "react-rating-stars-component";


const App=()=>{
  const [movies, setMovies]= useState([
    {
      id:1,
      title: 'Joker' ,
      description:'psychological thriller',
      posterUrl: (Joker),
      rate:2,
      trailerVid:'https://youtu.be/zAGVQLHvwOY',
      descPar:"Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker."
  },
    {
      id:2,
      title: 'Star Wars' ,
      description:'Science fiction', 
      posterUrl: (StarWars),
      rate:4,
      trailerVid:"https://youtu.be/Q0CbN8sfihY",
      descPar:"Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy."
    },
    {
      id:3,
      title: 'The Irishman' ,
      description:'Epic crime film',
      posterUrl: (TheIrishman),
      rate:3,
      trailerVid:"https://youtu.be/WHXxVmeGQUc",
      descPar:"In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime."
    },
    {
      id:4,
      title: 'Harry Potter' ,
      description:'Fantasy films',
      posterUrl: (HarryPotter),
      rate:5,
      trailerVid:"https://youtu.be/5NYt1qirBWg",
      descPar:"A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of evil. The friends must search for the Horcruxes that keep the dastardly wizard immortal. Harry and Voldemort meet at Hogwarts Castle for an epic showdown where the forces of darkness may finally meet their match."
    },
    {
      id:5,
      title: 'The Matrix' ,
      description:'Science fiction action',
      posterUrl: (TheMatrix),
      rate:1,
      trailerVid:"https://youtu.be/m8e-FF8MsqU",
      descPar:"Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life."
    }
  ])

  const addMovie=(x)=>{
    setMovies([...movies,x])    
  }

  const[searchMovie, setSearchMovie] = useState("");

  const[search, setSearch] = useState("");

  return (
    <BrowserRouter>
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
            movie => movie.title.toLowerCase().includes(searchMovie.toLowerCase().trim()) && movie.rate >=search)}
          />
        <Footer />
      </div>
    </BrowserRouter>
  ); 
}

export default App;
