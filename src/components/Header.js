import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/fspa.jpg";


function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <img src={logo} className="header_logo" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default BasicExample;
