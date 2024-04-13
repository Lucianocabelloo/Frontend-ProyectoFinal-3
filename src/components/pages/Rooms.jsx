import { Container, Row, Col, Image, Form } from "react-bootstrap";
import wifi from "../../assets/img/wifi.png";
import bata from "../../assets/img/bata.png";
import air from "../../assets/img/air.png";
import minibar from "../../assets/img/minibar.png";
import safe from "../../assets/img/safe.png";
import cafe from "../../assets/img/cafe.png";
import RoomCard from "./rooms/RoomCard";

const Rooms = () => {
  return (
    <>
      <section className="tituloPrincipal mb-3">
        <h1 className="text-center">Rooms & Suites</h1>
      </section>
      <Container className="my-4">
        <Row className="mb-3">
          <Col md="4">
            <hr className="hrRoom" />
          </Col>
          <Col md="4">
            <h3 className="text-light text-center">Comodidades</h3>
          </Col>
          <Col md="4">
            <hr className="hrRoom" />
          </Col>
        </Row>
        <Row className="justify-content-center justify-content-md-between align-items-center mb-3">
          <Col xs="6" sm="4" lg="2" className="text-center">
            <Image src={wifi} className="imgIcon"></Image>
            <p className="service">Internet</p>
          </Col>
          <Col xs="6" sm="4" lg="2" className="text-center">
            <Image src={cafe} className="imgIcon"></Image>
            <p className="service">Máquina de Cafe</p>
          </Col>
          <Col xs="6" sm="4" lg="2" className="text-center">
            <Image src={minibar} className="imgIcon"></Image>
            <p className="service">Mini Bar</p>
          </Col>
          <Col xs="6" sm="4" lg="2" className="text-center">
            <Image src={safe} className="imgIcon"></Image>
            <p className="service">Caja de Seguridad</p>
          </Col>
          <Col xs="6" sm="4" lg="2" className="text-center">
            <Image src={air} className="imgIcon"></Image>
            <p className="service">Aire Acondionado</p>
          </Col>
          <Col xs="6" sm="4" lg="2" className="text-center">
            <Image src={bata} className="imgIcon"></Image>
            <p className="service">Batas de baño</p>
          </Col>
        </Row>
        <hr className="hrRoom" />
        <Row className="justify-content-evely align-items-center">
          <Col lg="8">
            <h2 className="tituloHab mt-4">Habitaciones</h2>
          </Col>
          <Col lg="4">
            <Form.Select>
              <option value="">Todos</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Ejecutiva">Ejecutiva</option>
              <option value="Suite">Suite</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="justify-content-center justify-content-lg-evenly align-items-center">
          <RoomCard></RoomCard>
          <RoomCard></RoomCard>
          <RoomCard></RoomCard>
          <RoomCard></RoomCard>
        </Row>
      </Container>
    </>
  );
};

export default Rooms;
