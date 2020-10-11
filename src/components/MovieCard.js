import React , {Component} from 'react'
import { Card, Image, Col, CardDeck } from "react-bootstrap";
import ReactStars from 'react-rating-stars-component';


export default function MovieCard({card}) {


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
                            <ReactStars size={24} count={5} />
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
    )
    
}






