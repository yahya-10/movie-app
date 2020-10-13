import React, {useState} from 'react'
import { Modal , Button } from 'react-bootstrap'
import ModalImage from '../components/image/modal-image.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddMovie=({addMovie})=> {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[posterUrl, setPosterUrl] = useState("");
    const[rate, setRate] = useState(0);

    

        return (
            <div>
                <button className="add-button" onClick={handleShow}>add Movie +</button>
                <Modal show={show} onHide={handleClose} animation={false} >
        <Modal.Header closeButton>
            <Modal.Title>Add your movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
            <img className="d-block w-100" src={ModalImage} alt="" style={{height:"100", width:"100"}}/>
            <label for="movie title">Movie title : </label>
            <input style={{marginTop:"10px"}}
                className="movie-title" 
                type="text" 
                placeholder=" write the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                /> <br />
            <label for="movie-description">Description : </label>
            <input 
            className="movie-description" 
            type="text" 
            placeholder=" write the description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            /> <br/>
            <label for="homepage">Movie poster link: </label>
            <input type="url" id="url" name="link" 
            placeholder=" enter valid link"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
            /> <br/>
            <label for="movie-description">Rate: </label>
            <input className="rate" placeholder="Rate" 
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            />
            </Modal.Body>
        <Modal.Footer className="modal-footer">
            <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
            <Button variant="primary" onClick={()=>addMovie({title:title,description:description,posterUrl:posterUrl,rate:rate})} >
            Add
            </Button>
        </Modal.Footer>
        </Modal>
            </div>
        );
}
export default AddMovie


