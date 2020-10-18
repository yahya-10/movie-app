import React from 'react'

const MovieDetail = ({...card}) => {

    var movieId = parseInt(card.match.params.number) ;
    var selectedMovie = card.find(el => el.id === movieId)

    // var product = card.find(p => p.id == match.params.movieId);
    var movieData;

    if(selectedMovie)
        movieData = <div className="details">
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
            <button>Back to Home</button>
        </div>
    </div>
        else
            movieData = <h2> Sorry. Product doesnt exist </h2>;

    return (
        // <div className="details">
        //     <div className="container">
        //         <div className="image-title">
        //             <div className="image">
        //                 <img src={selectedMovie.posterUrl} alt={selectedMovie.title} />
        //             </div>
        //             <div className="title">
        //                 <h2>{selectedMovie.title}</h2>
        //                 <h3>{selectedMovie.description}</h3>
        //             </div>
        //         </div>
        //         <div className="description">
        //             <p>{selectedMovie.descPar}</p>
        //         </div>
        //         <div className="video">{selectedMovie.trailerVid}</div>
        //         <button>Back to Home</button>
        //     </div>
        // </div>
        <div>{movieData}</div>
    )
}

export default MovieDetail
