import React from 'react'

const MovieDetail = (movies) => {

    var movieId = parseInt(movies.match.params.number) ;
    // console.log(movieId)
    

    var selectedMovie = movies.find(el => el.id === movieId)
    
    // const selectedMovie = () =>{(movie.id === movieId) ? movie : "Sorry movie doesn't exist!"}

    return (
        <div className="details">
            <div className="container">
                <div className="image-title">
                    <div className="image">
                        <img src={selectedMovie.posterUrl} alt={selectedMovie.title} />
                    </div>
                    <div className="title">
                        <h2>{selectedMovie.title}</h2>
                        <h3>{selectedMovie.description}</h3>
                    </div>
                </div>
                <div className="description">
                    <p>{selectedMovie.descPar}</p>
                </div>
                <div className="video">{selectedMovie.trailerVid}</div>
            </div>
        </div>
    )
}

export default MovieDetail
