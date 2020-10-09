import React , {Component} from 'react'
import { Card, Image, Col, CardDeck } from "react-bootstrap";


export default function MovieCard({card}) {


    return (
            <div className="movie-card">
                <CardDeck style={{margin:10}}>
                    <Card>
                        <Card.Img variant="top" src={card.posterUrl} style={{height:"300px",width:"200px"}} />
                        <Card.Body>
                            <Card.Title className="title" style={{fontSize:"30px",color:"black"}}>{card.title}</Card.Title>
                            <Card.Text style={{fontSize:"20px",color:"black"}}>{card.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <span>⭐⭐</span>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
    )
    
}






