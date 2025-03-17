import logo from '/assets/lavandero_logo.png';
import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto"> 
          <Nav.Link as={Link} to="/category/Carnes">Carnes</Nav.Link>
          <Nav.Link as={Link} to="/category/Pollo">Pollo</Nav.Link>
          <Nav.Link as={Link} to="/category/Pescados">Pescados</Nav.Link>
          <Nav.Link as={Link} to="/category/Mariscos">Mariscos</Nav.Link>
        </Nav> 
        <CartWidget />
      </Container>
    </Navbar>
  )
}
export default NavBar;