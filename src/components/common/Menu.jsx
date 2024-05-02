import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getReservationsAPI } from "../../helpers/reservationQueries";
import ItemReservation from "../pages/reserve/ItemReservation";
import Swal from "sweetalert2";

const Menu = ({ userLoggedIn, setUserLoggedIn }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [userReservations, setUserReservations] = useState([]);

  useEffect(() => {
    if (userLoggedIn && userLoggedIn.email) {
      getUserReservations();
    }
  }, [userLoggedIn]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout = () => {
    sessionStorage.removeItem("usuarioHotel");
    setUserLoggedIn("");
    navigate("/");
  };
  async function getUserReservations() {
    const response = await getReservationsAPI();
    if (response.status === 200) {
      const reservasDeUsuario = userLoggedIn.email;
      const data = await response.json();
      const reservasFiltradas = data.filter(
        (reserva) => reserva.email === reservasDeUsuario
      );
      setUserReservations(reservasFiltradas);
    } else {
      Swal.fire({
        title: "Ocurrio un error!",
        text: `Vuelva a ingresar en unos minutos.`,
        icon: "error",
      });
    }
  }

  const deleteReserveFromUser = () => {
    setUserReservations([]);
  };

  return (
    <Navbar
      expand="lg"
      className="d-flex justify-content-center navbar-dark bg-transparent py-3"
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
              Nosotros
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
                {userLoggedIn.rol !== "Administrador" && (
                  <button
                    className="btn btn-outline-warning me-2 fw-semibold"
                    onClick={handleShow}
                  >
                    Mis reservas
                  </button>
                )}
                <button
                  className="btn btn-outline-danger fw-semibold"
                  onClick={logout}
                >
                  <i className="bi bi-box-arrow-left "></i> Salir
                </button>

                <p className="m-0 ms-3 text-center fw-bold">
                  <i className="bi bi-person fs-4 txt-details-color"></i>{" "}
                  {userLoggedIn.nombreCompleto.split(" ")[0]}
                </p>
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
              </>
            ) : (
              <>
                <NavLink to="/registro" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person-add"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                  </svg>
                  Registrarse
                </NavLink>
                <NavLink to="/iniciar-sesion" className="nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  Iniciar sesión
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="bg-color"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-light fs-2">
            Mis reservas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className="p-3 py-2">
            {userReservations.length !== 0 ? (
              userReservations.map((reservation) => (
                <ItemReservation
                  key={reservation._id}
                  reservation={reservation}
                  deleteReserveFromUser={deleteReserveFromUser}
                ></ItemReservation>
              ))
            ) : (
              <Col md={12} className="pt-4">
                <h4 className="text-secondary fs-3 text-center txt-montserrat fw-normal">
                  No hay reservas
                </h4>
              </Col>
            )}
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default Menu;
