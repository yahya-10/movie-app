import React, {Component, list,useEffect, useState} from 'react'
import ReactStars from 'react-rating-stars-component';

class Filter extends Component{
    constructor(props){
        super(props);
        this.state=
        {
        movieadded:  props.movies
    }
}
    render(){
        const[searchMovie, setSearchMovie] = React.useState("");
        const[searchResults, setSearchResults] = React.useState([]);
        useEffect(()=>{
            const results = this.state.movieadded.filter(el =>
                el.toString().toLowerCase().includes(searchMovie)
            );
            setSearchResults(results);
        }, [searchMovie])
        const handleChange = e =>{
            setSearchMovie(e.target.value);
        };   
    return (
        <div style={{backgroundColor:"#353636",height:"300px",position:"fixed"}}>
            <input type="text" 
            placeholder="Search for movies..."
            value={searchMovie}
            onChange={handleChange}
            style={{margin:10}} />
            <ul style={{textAlign:"center"}}>
                {searchResults.map(Item=>(
                <li style={{color:"white"}}><a href="#">{Item}</a></li>
                ))}
            </ul> <br/>
            <ReactStars size={20} style={{padding:20 , textAlign:"center"}} />
        </div>
    );
}
}

export default Filter
