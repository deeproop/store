import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';

function NavbarComponent() {
    const cart = useContext(CartContext);

    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    
    return (
        <>
            <Navbar expand="sm"> {/*expand determines where your window collapses */}
                <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle /> {/*This determines the things to collaps on small screen size */}
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}>Cart ({productCount} Items)</Button>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productCount > 0 ?
                      <>
                        <p>Items in your cart: </p>
                        {cart.items.map((currentProduct, idx) => (
                            <h1>{currentProduct.id}</h1>
                        ))}

                        <h1>Total Cost: {cart.getTotalCost().toFixed(2)}</h1>

                        <Button variant="success">
                            Purchase items!
                        </Button>
                      </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;