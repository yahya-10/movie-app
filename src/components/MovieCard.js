import React from 'react'
import { Card, CardDeck } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';


export default function MovieCard({card,movies}) {
    

    return (
            <div className="movie-card">
                <CardDeck style={{margin:10}}>
                    <Card className="card">
                        <Card.Img variant="top" src={card.posterUrl} style={{backgroundSize:"100% 100%",height:"300px",width:"223px"}} />
                        <Card.Body>
                            <Card.Title className="title" style={{fontSize:"30px",color:"#e1e6e2"}}>{card.title}</Card.Title>
                            <Card.Text style={{fontSize:"20px",color:"#e1e6e2"}}>{card.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <StarRatingComponent 
                            name="rate" 
                            editing={false}
                            renderStarIcon={() => <span style={{fontSize:"24px"}}>☆</span>}
                            starCount={5}
                            value={5}
                        />
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
    )
    
}






