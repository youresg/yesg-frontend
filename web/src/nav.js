import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navi() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ESG">ESG</Nav.Link>
            <Nav.Link as={Link} to="/information">Information</Nav.Link>
            <Nav.Link as={Link} to="/community">Community</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navi;