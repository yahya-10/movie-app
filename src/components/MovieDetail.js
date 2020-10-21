import React from 'react'
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player'



const MovieDetail = ({movies}) =>
{
    const { id } = useParams();
    const movie = movies.find(movie => movie.id == id);
    var movieData;

    if(movie)
    movieData=(<div className="details">
    <div className="container">
        <div className="title">
            <h2>{movie.title}</h2>
        </div>
        <div className="description">
            <p style={{color:"red"}}>{movie.descPar}</p>
        </div>
        <ReactPlayer url={movie.trailerVid} /> 
    </div>
</div>);
else movieData = (<h2>Sorry Movie doesn't exist</h2>);

    return (
        <div>
            {movieData}
            <Link to = '/' ><button 
            style={{backgroundColor:"#9980FA", color:"black",padding:5,borderRadius:20}}> Back to Home </button> </Link>
        </div>
    )
}

export default MovieDetail
