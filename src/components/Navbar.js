import {Button, Container, Navbar, Modal} from 'react-bootstrap';
function NavbarComponent() {
    return (
        <Navbar expand="sm"> {/*expand determines where your window collapses */}
            <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
            <Navbar.Toggle /> {/*This determines the things to collaps on small screen size */}
            <Navbar.Collapse className='justify-content-end'>
                <Button>Cart 0 Items</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent;