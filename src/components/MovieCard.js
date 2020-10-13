import React , {Component,useState} from 'react'
import { Card, CardDeck } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';


export default function MovieCard({card,rate}) {
    // const [rating, setRating] = useState(0)
    

    return (
            <div className="movie-card">
                <CardDeck style={{margin:10}}>
                    <Card className="card" style={{backgroundColor:"black"}}>
                        <Card.Img variant="top" src={card.posterUrl} style={{backgroundSize:"cover",height:"300px",width:"200px"}} />
                        <Card.Body>
                            <Card.Title className="title" style={{fontSize:"30px",color:"#e1e6e2"}}>{card.title}</Card.Title>
                            <Card.Text style={{fontSize:"20px",color:"#e1e6e2"}}>{card.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <StarRatingComponent 
                            // name="rate" 
                            // editing={false}
                            // size={24}
                            // renderStarIcon={() =>setRating(ratingValue)}
                            // starCount={5}
                            // value={rate}
                        />
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
    )
    
}






