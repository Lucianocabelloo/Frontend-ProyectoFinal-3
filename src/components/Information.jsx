import { Row, Col, Container, Card } from "react-bootstrap";
import room1 from "../assets/img/room1.jpg";
import room2 from "../assets/img/room2.jpg";
import room3 from "../assets/img/room3.jpg";
import pool from "../assets/img/pool.jpg";
import gym from "../assets/img/gym.jpg";
import spa from "../assets/img/spa.jpg";
import restaurant from "../assets/img/restaurant.jpg";

const Information = () => {
  return (
    <Container className="pt-10-rem">
      <section>
        <h3 className="fs-1 text-center txt-bg-color pt-sm-4 pb-3">
          Explora Nuestras Exquisitas Suites: Lujo Capturado en Cada Rincón
        </h3>
        <p className="text-center txt-bg-color">
          Adéntrate en el encanto y la elegancia de nuestras exquisitas suites.
          Cada imagen captura la esencia del lujo y la comodidad que te espera
          en nuestro hotel. Desde las suaves sábanas hasta los detalles
          cuidadosamente seleccionados, cada rincón de nuestras habitaciones ha
          sido diseñado para brindarte una experiencia inolvidable. Explora
          nuestras suites a través de estas imágenes y déjate seducir por el
          lujo que te espera en nuestro refugio de indulgencia.
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
            <button className="btn-customized-2">Ver Habitaciones</button>
          </Col>
        </Row>
      </section>
      <hr className="text-bg-color" />
      <section className="my-5">
        <h3 className="fs-1 text-center txt-bg-color pb-3">
          Sumérgete en el Mundo del Lujo: Experiencias Excepcionales en Nuestro
          Hotel
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
                <p className="txt-light-customized">
                  Fresco oasis de relajación bajo el sol radiante: ¡tu escapada
                  perfecta te espera junto a nuestra piscina de ensueño!
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
                <p className="txt-light-customized">
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
                <p className="txt-light-customized">
                  Saborea la excelencia culinaria en nuestro oasis gastronómico:
                  ¡una experiencia sensorial única donde cada plato es una obra
                  maestra!
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
                <p className="txt-light-customized">
                  Sumérgete en un mundo de relajación y rejuvenecimiento en
                  nuestro santuario de bienestar: ¡tu escape perfecto para
                  renovar cuerpo, mente y espíritu!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Information;
