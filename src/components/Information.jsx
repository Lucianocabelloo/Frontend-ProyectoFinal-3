import { Row, Col, Container } from "react-bootstrap";
import room1 from '../assets/img/room1.jpg';
import room2 from '../assets/img/room2.jpg';
import room3 from '../assets/img/room3.jpg';

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
            <Col md={4}>
                <img src={room1} className="img-customized" alt="Imagen de la habitacion"/>
            </Col>
            <Col md={4}>
                <img src={room2} className=" img-customized" alt="Imagen de la habitacion"/>
            </Col>
            <Col md={4}>
                <img src={room3} className="img-customized" alt="Imagen de la habitacion"/>
            </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Information;
