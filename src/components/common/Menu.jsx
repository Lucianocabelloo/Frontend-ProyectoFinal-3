import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
  return (
    <Navbar fixed="top"  expand="lg" className="d-flex justify-content-center bg-transparent navbar-light bg-light">
    <Container className='container-nav'>
      <Navbar.Brand href="#home">Paradise Hotel Resort</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='justify-content-center' id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Acerca de nosotros</Nav.Link>
          <Nav.Link href="#link">Galeria de Imagenes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse>

        <Nav className='d-flex flex-row justify-content-evenly'>
        <Nav.Link href="#home">Register</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu