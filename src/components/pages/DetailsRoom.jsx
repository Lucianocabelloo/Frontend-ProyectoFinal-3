import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

const DetailsRoom = () => {
  return (
    <Container className="my-4">
      <h1 className="kaushan-script">
        Detalles de <span className="txt-details-color">habitación</span>
      </h1>
      <hr className="txt-details-color my-4" />
      <Row>
        <Col lg={6}>
          <div className="img-container-detail">
            <img
              src="https://images.pexels.com/photos/18368842/pexels-photo-18368842/free-photo-of-hotel-habitacion-pintura-pintando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-room-detail"
              alt="Imagen de la habitación"
            />
          </div>
        </Col>
        <Col lg={6} className="position-relative text-center">
          <span className="room-number">1</span>
          <h2 className="text-uppercase">Nombre de habitación</h2>
          <div className="d-flex align-items-center justify-content-center my-3">
            <div className="line"></div>
            <div className="circle mx-3"></div>
            <div className="line"></div>
          </div>
          <Row className="align-items-center justify-content-center mt-4">
            <Col xs={4} className="txt-details-color">
              <FontAwesomeIcon icon="fa-solid fa-user" className="fs-4 mb-2"/>
              <h3 className="fs-5 txt-details-color fw-semibold">Doble</h3>
            </Col>
            <Col xs={4} className="txt-details-color">
              <FontAwesomeIcon icon="fa-solid fa-bed" className="fs-4 mb-2"/>
              <h3 className="fs-5 txt-details-color fw-semibold">Deluxe</h3>
            </Col>
            <Col xs={12} sm={4} className="txt-details-color mt-3 mt-sm-0">
              <FontAwesomeIcon icon="fa-solid fa-clock" className="fs-4 mb-2"/>
              <h3 className="fs-5 txt-details-color fw-semibold">Disponible</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsRoom;
