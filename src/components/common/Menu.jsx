import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ userLoggedIn, setUserLoggedIn }) => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("usuarioHotel");
    setUserLoggedIn("");
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      className="d-flex justify-content-center  navbar-dark bg-transparent"
    >
      <Container className="container-nav justify-content-evenly align-items-center">
        <Navbar.Brand
          as={Link}
          to="/"
          className="kaushan-script txt-details-color"
        >
          Paradise Hotel Resort
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center align-items-center"
          id="basic-navbar-nav"
        >
          <Nav>
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink to="/habitaciones" className="nav-link">
              Habitaciones
            </NavLink>
            <NavLink to="/nosotros" className="nav-link">
              Acerca de nosotros
            </NavLink>
            <NavLink to="/galeria" className="nav-link">
              Galeria de Imagenes
            </NavLink>
            <NavLink to="/contacto" className="nav-link">
              Contacto
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="mt-2">
          <Nav className="d-flex flex-row justify-content-evenly bubble align-items-center">
            {Object.keys(userLoggedIn).length > 0 ? (
              <>
                <p className="m-0 text-center"><i className="bi bi-person fs-4"></i> {userLoggedIn.nombre}</p>
                {userLoggedIn.rol === "Administrador" ? (
                  <NavLink to="/administrador" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-nut"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1z" />
                      <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33m-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
                    </svg>
                    Admin
                  </NavLink>
                ) : (
                  false
                )}
                <Button className="nav-link active ms-2" onClick={logout}>
                  <i className="bi bi-box-arrow-left"></i> Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/registro" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-person-add"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>
                  Register
                </NavLink>
                <NavLink to="/iniciar-sesion" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
