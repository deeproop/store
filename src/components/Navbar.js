import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import { useState } from 'react';

function NavbarComponent() {
    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Navbar expand="sm"> {/*expand determines where your window collapses */}
                <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle /> {/*This determines the things to collaps on small screen size */}
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}>Cart 0 Items</Button>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the Modal Body</h1>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;