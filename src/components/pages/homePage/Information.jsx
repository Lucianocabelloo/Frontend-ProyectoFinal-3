import { Row, Col, Container } from "react-bootstrap";
import room1 from "../../../assets/img/room1.jpg";
import room2 from "../../../assets/img/room2.jpg";
import room3 from "../../../assets/img/room3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Services from "./Services";

const Information = () => {
  return (
    <>
      <section className="pt-10-rem">
        <Container>
          <h3 className="display-5 text-center txt-bg-color pt-sm-4 pb-3">
            Explora Nuestras Exquisitas Suites: Lujo Capturado en Cada Rincón
          </h3>
          <p className="text-center txt-bg-color">
            Adéntrate en el encanto y la elegancia de nuestras exquisitas
            suites. Cada imagen captura la esencia del lujo y la comodidad que
            te espera en nuestro hotel. Desde las suaves sábanas hasta los
            detalles cuidadosamente seleccionados, cada rincón de nuestras
            habitaciones ha sido diseñado para brindarte una experiencia
            inolvidable. Explora nuestras suites a través de estas imágenes y
            déjate seducir por el lujo que te espera en nuestro refugio de
            indulgencia.
          </p>
          <Row className="pt-4">
            <Col md={4} className="mb-5 mb-md-0">
              <img
                src={room1}
                className="img-room"
                alt="Imagen de la habitacion"
              />
            </Col>
            <Col md={4} className="mb-5 mb-md-0">
              <img
                src={room2}
                className=" img-room"
                alt="Imagen de la habitacion"
              />
            </Col>
            <Col md={4} className="mb-5 mb-md-0">
              <img
                src={room3}
                className="img-room"
                alt="Imagen de la habitacion"
              />
            </Col>
            <Col md={12} className="text-center my-4 ">
              <Link to="/habitaciones" className="btn-customized-2 fs-5">
                Ver Habitaciones
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5 bg-color pt-5 pb-4">
        <Container>
          <h3 className="text-center display-5 fw-bold">
            Estos son algunos de nuestros{" "}
            <span className="txt-details-color">servicios</span>
          </h3>
          <div className="d-flex align-items-center justify-content-center mt-4 mb-5">
            <div className="line"></div>
            <div className="circle mx-3"></div>
            <div className="line"></div>
          </div>
          <Services></Services>
        </Container>
      </section>
      <section className="mt-5 bg-color">
        <Container className="py-5">
          <Row className="py-5 justify-content-between align-items-center text-center text-lg-start">
            <Col lg={5}>
              <h3 className="txt-light-customized display-5 fw-semibold">
                Lujos de calidad <br></br>que{" "}
                <span className="txt-details-color">Ofrecemos</span>
              </h3>
            </Col>
            <Col lg={5}>
              <p className="txt-gray pt-3 pt-lg-0">
                Nuestros servicios de lujo te brindan una experiencia
                incomparable. Desde nuestras elegantes habitaciones hasta
                servicios exclusivos, cada momento en nuestro hotel es una
                indulgencia única.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col xs={4} lg={3} className="text-center mb-5">
              <FontAwesomeIcon
                icon="fa-solid fa-wifi"
                className="txt-details-color icon"
              />
            </Col>
            <Col xs={4} lg={3} className="text-center mb-5">
              <FontAwesomeIcon
                icon="fa-solid fa-water-ladder"
                className="txt-details-color icon"
              />
            </Col>
            <Col xs={4} lg={3} className="text-center mb-5">
              <FontAwesomeIcon
                icon="fa-solid fa-utensils"
                className="txt-details-color icon"
              />
            </Col>
            <Col xs={4} lg={3} className="text-center mb-5">
              <FontAwesomeIcon
                icon="fa-solid fa-dumbbell"
                className="txt-details-color icon"
              />
            </Col>
            <Col xs={4} lg={3} className="text-center mb-5">
              <FontAwesomeIcon
                icon="fa-solid fa-bell-concierge"
                className="txt-details-color icon"
              />
            </Col>
            <Col xs={4} lg={3} className="text-center mb-5">
              <FontAwesomeIcon
                icon="fa-solid fa-snowflake"
                className="txt-details-color icon"
              />
            </Col>
            <Col xs={4} lg={3} className="text-center mb-5">
              <FontAwesomeIcon
                icon="fa-solid fa-tv"
                className="txt-details-color icon"
              />
            </Col>
            <Col xs={4} lg={3} className="text-center mb-5">
              <FontAwesomeIcon
                icon="fa-solid fa-square-parking"
                className="txt-details-color icon"
              />
            </Col>
          </Row>
          <div className="d-flex align-items-center justify-content-center mt-3 mb-4">
            <div className="line"></div>
            <div className="circle mx-3"></div>
            <div className="line"></div>
          </div>
          <div className="text-center py-5">
            <h3 className="fs-1 fw-bold txt-light-customized">
              Explora nuestra <span className="txt-details-color">galería</span>
            </h3>
            <p className="txt-gray pt-3 mb-5">
              Explora nuestra galería de imágenes y déjate cautivar por la
              elegancia y el encanto de nuestro hotel. Cada fotografía captura
              la esencia de nuestro oasis de lujo, desde nuestras exquisitas
              habitaciones hasta nuestros espacios comunes meticulosamente
              diseñados.
            </p>
            <Link to="/galeria" className="btn-customized fs-5">
              Ver Galería
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Information;
