import { Row, Col, Container, Card } from "react-bootstrap";
import room1 from "../assets/img/room1.jpg";
import room2 from "../assets/img/room2.jpg";
import room3 from "../assets/img/room3.jpg";
import pool from "../assets/img/pool.jpg";
import gym from "../assets/img/gym.jpg";
import spa from "../assets/img/spa.jpg";
import restaurant from "../assets/img/restaurant.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <>
      <section className="pt-10-rem">
        <Container>
          <h3 className="fs-1 text-center txt-bg-color pt-sm-4 pb-3">
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
              <Link to="/habitaciones" className="btn-customized-2">Ver Habitaciones</Link>
            </Col>
          </Row>
        </Container>
      </section>
      <hr className="text-bg-color" />
      <section className="my-5">
        <Container>
          <h3 className="fs-1 text-center txt-bg-color pb-3">
            Sumérgete en el Mundo del Lujo: Experiencias Excepcionales en
            Nuestro Hotel
          </h3>
          <p className="text-center txt-bg-color">
            Descubre un oasis de elegancia y confort, donde cada detalle está
            diseñado para superar tus expectativas y brindarte una estancia
            inolvidable.
          </p>
          <Row className="justify-content-center align-items-center my-5 gap-5">
            <Col md={5}>
              <div className="card-customized bg-color p-1">
                <div className="img-container">
                  <img
                    src={pool}
                    className="img-customized"
                    alt="Imagen de la piscina del hotel"
                  />
                </div>
                <div className="card-body p-2">
                  <hr className="text-warning m-0" />
                  <h4 className="kaushan-script txt-details-color fs-1 pt-2">
                    Piscina
                  </h4>
                  <hr className="text-warning my-2" />
                  <p className="txt-gray">
                    Fresco oasis de relajación bajo el sol radiante: ¡tu
                    escapada perfecta te espera junto a nuestra piscina de
                    ensueño!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="card-customized bg-color p-1">
                <div className="img-container">
                  <img
                    src={gym}
                    className="img-customized"
                    alt="Imagen de la piscina del hotel"
                  />
                </div>
                <div className="card-body p-2">
                  <hr className="text-warning m-0" />
                  <h4 className="kaushan-script txt-details-color fs-1 pt-2">
                    Gimnasio
                  </h4>
                  <hr className="text-warning my-2" />
                  <p className="txt-gray">
                    Alcanza tus metas fitness en nuestro santuario de bienestar:
                    ¡tu gimnasio de lujo te espera para desafiar tus límites y
                    revitalizar tu cuerpo y mente!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="card-customized bg-color p-1">
                <div className="img-container">
                  <img
                    src={restaurant}
                    className="img-customized"
                    alt="Imagen de la piscina del hotel"
                  />
                </div>
                <div className="card-body p-2">
                  <hr className="text-warning m-0" />
                  <h4 className="kaushan-script txt-details-color fs-1 pt-2">
                    Restaurante
                  </h4>
                  <hr className="text-warning my-2" />
                  <p className="txt-gray">
                    Saborea la excelencia culinaria en nuestro oasis
                    gastronómico: ¡una experiencia sensorial única donde cada
                    plato es una obra maestra!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="card-customized bg-color p-1">
                <div className="img-container">
                  <img
                    src={spa}
                    className="img-customized"
                    alt="Imagen de la piscina del hotel"
                  />
                </div>
                <div className="card-body p-2">
                  <hr className="text-warning m-0" />
                  <h4 className="kaushan-script txt-details-color fs-2 pt-2">
                    SPA de Lujo
                  </h4>
                  <hr className="text-warning my-2" />
                  <p className="txt-gray">
                    Sumérgete en un mundo de relajación y rejuvenecimiento en
                    nuestro santuario de bienestar: ¡tu escape perfecto para
                    renovar cuerpo, mente y espíritu!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5 bg-color">
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
          <hr className="txt-details-color my-4"/>
          <div className="text-center">
          <h3 className="fs-1 fw-bold txt-light-customized">
            Explora nuestra <span className="txt-details-color">galería</span>
          </h3>
          <p className="txt-gray pt-3">
            Explora nuestra galería de imágenes y déjate cautivar por la
            elegancia y el encanto de nuestro hotel. Cada fotografía captura la
            esencia de nuestro oasis de lujo, desde nuestras exquisitas
            habitaciones hasta nuestros espacios comunes meticulosamente
            diseñados.
          </p>
          <Link to="/galeria" className="btn-customized mt-3">Ver Galería</Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Information;
