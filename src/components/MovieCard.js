import React , {Component} from 'react'
import Joker from '../components/image/Joker.jpg'
import HarryPotter from '../components/image/harry-potter.jpg'
import StarWars from '../components/image/star-wars.jpg'
import TheIrishman from '../components/image/the-irishman.jpg'
import TheMatrix from '../components/image/the-matrix.jpg'
import SherlockHolmes from '../components/image/sherlock-holmes.jpg'

export default class MovieCard extends Component {
    constructor(){
        super();
        this.state={
            title: ['Joker' , 'Harry Potter and the deathly hallows', 'Star Wars', 'The Irishman','The Matrix','Sherlock Holmes'] ,
            description:['it is a great movie','fairytale','science fiction','mafia','science fiction','history'],
            posterUrl: [(Joker),(HarryPotter),(StarWars),(TheIrishman),(TheMatrix),(SherlockHolmes)], 
            rate: [8.9 , 7 , 9.8 , 8.2 , 7.5 , 6]
    }
}
    render() {
        return (
            <div className="movie-card">
                <img src={this.state.posterUrl} />
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
                <span>{this.state.rate}</span>
            </div>
        )
    }
}






