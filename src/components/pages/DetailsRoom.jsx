import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getRoomById } from "../../helpers/queries";
import Swal from "sweetalert2";
import CalendarApp from "./calendar/CalendarApp";

const DetailsRoom = () => {
  const { id } = useParams();
  const [room, setRoom] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadRoomData();
  }, []);

  async function loadRoomData() {
    const response = await getRoomById(id);
    if (response.status === 200) {
      const data = await response.json();
      setRoom(data);
    } else {
      Swal.fire({
        title: "Ocurrio un error!",
        text: `No pudimos cargar los datos de la habitación, intente de nuevo en unos minutos.`,
        icon: "error",
      });
    }
  }

  const handleEventClick = (event) => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  let disponibilidad = "";
  room.disponibilidad === true
    ? (disponibilidad = "Disponible")
    : (disponibilidad = "No disponible");

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
              src={room.imagen}
              className="img-room-detail"
              alt="Imagen de la habitación"
            />
          </div>
        </Col>
        <Col lg={6} className="position-relative text-center mt-4 mt-lg-0">
          <span className="room-number">{room.numero}</span>
          <h2 className="text-uppercase">Habitación {room.numero}</h2>
          <div className="d-flex align-items-center justify-content-center my-3">
            <div className="line"></div>
            <div className="circle mx-3"></div>
            <div className="line"></div>
          </div>
          <Row className="align-items-center justify-content-center mt-4">
            <div className="col-4 txt-details-color">
              <FontAwesomeIcon icon="fa-solid fa-user" className="fs-4 mb-2" />
              <h3 className="fs-5 txt-details-color fw-semibold">
                {room.tipoHabitacion}
              </h3>
            </div>
            <div className="col-4 txt-details-color">
              <FontAwesomeIcon icon="fa-solid fa-bed" className="fs-4 mb-2" />
              <h3 className="fs-5 txt-details-color fw-semibold">
                {room.categoria}
              </h3>
            </div>
            <div className="col-12 col-sm-4 txt-details-color mt-2 mt-sm-0">
              <FontAwesomeIcon icon="fa-solid fa-clock" className="fs-4 mb-2" />
              <h3 className="fs-5 txt-details-color fw-semibold">
                {disponibilidad}
              </h3>
            </div>
          </Row>
          <div className="mt-4">
            <p>{room.descripcion}</p>
            <p className="price">${room.precio}</p>
            <div className="d-flex justify-content-center align-items-center gap-4">
              <button className="btn-customized btn-gold">
                Reservar habitación
              </button>
              <Button className="btn-customized" onClick={handleEventClick}>
                Ver fechas disponibles
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Modal show={showModal} fullscreen={true} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Fechas disponibles Habitación n° {room.numero}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-calendar">
          <CalendarApp admin={false} number={room.numero}></CalendarApp>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default DetailsRoom;
