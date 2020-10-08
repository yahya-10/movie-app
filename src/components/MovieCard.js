import React , {Component} from 'react'
import { Card, Image, Col, CardDeck } from "react-bootstrap";


export default function MovieCard({card}) {


    return (
        <div className="card-list">
            <div className="movie-card">
                {/* <Card>
                    <Card.Header />
                    <Col><Image src={card.posterUrl} style={{height:"300px",width:"200px"}} ></Image></Col>
                    <Card.Body>
                        <Card.Title style={{fontSize:"30px",color:"#e1e6e2"}}>{card.title}</Card.Title>
                        <Card.Text style={{display:"block", color:"#e1e6e2"}}>
                            {card.description} <br/>
                            {card.rate}
                        </Card.Text>
                    </Card.Body>
                </Card> */}
                <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={card.posterUrl} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                </CardDeck>
            </div>
        </div>
    )
    
}






