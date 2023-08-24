import {Nav, Navbar, Container} from 'react-bootstrap';

function Navi() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/ESG">ESG</Nav.Link>
            <Nav.Link href="/information">Information</Nav.Link>
            <Nav.Link href="/community">Community</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navi;