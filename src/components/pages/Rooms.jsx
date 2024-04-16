import { Container, Row, Col, Image, Form, Spinner } from "react-bootstrap";
import wifi from "../../assets/img/wifi.png";
import bata from "../../assets/img/bata.png";
import air from "../../assets/img/air.png";
import minibar from "../../assets/img/minibar.png";
import safe from "../../assets/img/safe.png";
import cafe from "../../assets/img/cafe.png";
import RoomCard from "./rooms/RoomCard";
import { useEffect, useState } from "react";
import { getRoomsAPI } from "../../helpers/queries";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getRooms();
  }, []);

  async function getRooms() {
    try {
      const response = await getRoomsAPI();
      if (response.status === 200) {
        const data = await response.json();
        setRooms(data);
        setLoading(false);
      } else {
        setLoading(false);
        Swal.fire({
          title: "Ocurrio un error!",
          text: `Intente esta operación en unos minutos`,
          icon: "error",
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Error al obtener los datos de las habitaciones:", error);
    }
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredRooms = selectedCategory
    ? rooms.filter((room) => room.categoria === selectedCategory)
    : rooms;

  return (
    <>
      <section className="tituloPrincipal mb-3">
        <h1 className="text-center fw-bold text-uppercase">Rooms & Suites</h1>
      </section>
      <Container className="my-5">
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
        <Row className="justify-content-evely align-items-center mt-5">
          <Col lg="8">
            <h2 className="display-5 mb-4 mb-lg-0">Nuestras <span className="txt-details-color">habitaciones</span></h2>
          </Col>
          <Col lg="4">
            <Form.Select
              className="selectPersonalizado"
              onChange={handleCategoryChange}
            >
              <option value="">Todos</option>
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Ejecutiva">Ejecutiva</option>
              <option value="Suite">Suite</option>
            </Form.Select>
          </Col>
        </Row>
        {loading && (
          <>
            <Spinner
              variant="light"
              animation="border"
              className="d-flex m-auto"
              size="lg"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h2 className="text-center my-3">Cargando...</h2>
          </>
        )}
        {!loading && (
          <Row className="justify-content-center justify-content-lg-evenly align-items-center">
            {filteredRooms.length > 0
              ? filteredRooms.map((room) => (
                  <RoomCard room={room} key={room._id}></RoomCard>
                ))
              : (<p className="text-center text-secondary fs-3 my-5">No hay habitaciones para esta categoria</p>)}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Rooms;
