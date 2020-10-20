import React from 'react'
import YouTube from 'react-youtube';



const MovieDetail = ({movieData, match}) =>
{
    
    const card = movieData.find((id) => id === match.params.movieId); 

    return (
        <div className="details">
            <div className="container">
                <div className="title">
                    <h2>{card.title}</h2>
                </div>
                <div className="description">
                    <p>{card.descPar}</p>
                </div>
                <YouTube>{card.trailerVid}</YouTube>
                <button>Back to Home</button>
            </div>
        </div>
    )
}

export default MovieDetail
