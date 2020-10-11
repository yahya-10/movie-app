import React, {useState,useEffect} from 'react'
import { Modal , Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ModalImage from '../components/image/modal-image.jpg'
// import AddMovie from './AddMovie'
const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="header">
            <h2 className="title">MovieGoat</h2>
            <ul className="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Box Office</a></li>
                <li><a href="#" onClick={handleShow}>add Movie +</a></li>
            </ul>

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Add your movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
            <img className="d-block w-100" src={ModalImage} alt="" style={{height:"100", width:"100"}}/>
            <label for="movie title">Movie title : </label>
            <input style={{marginTop:"10px"}} className="movie-title" type="text" placeholder=" write the title" /> <br />
            <label for="movie description">Description : </label>
            <input className="movie-description" type="text" placeholder=" write the description" /> <br/>
            <label for="homepage">Movie poster link: </label>
            <input type="url" id="url" name="link" placeholder=" enter valid link"></input>
            </Modal.Body>
        <Modal.Footer className="modal-footer">
            <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Add
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
    )
}

export default Header

