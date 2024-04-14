import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getRoomById } from "../../helpers/queries";
import Swal from "sweetalert2";
import CalendarApp from "./calendar/CalendarApp";
import { useForm } from "react-hook-form";

const DetailsRoom = ({ userLoggedIn }) => {
  const { id } = useParams();
  const [room, setRoom] = useState([]);
  const [showModalCalendar, setShowModalCalendar] = useState(false);
  const [showModalReserve, setShowModalReserve] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setvalue,
  } = useForm();

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

  const onSubmit = (reserva) => {
    reserva.numHabitacion = room.numero;
    console.log(reserva);
  };

  const handleEventCalendarModal = (event) => {
    setShowModalCalendar(true);
  };

  const handleModalCloseCalendar = () => {
    setShowModalCalendar(false);
  };

  const handleEventReserveModal = (event) => {
    setShowModalReserve(true);
  };

  const handleReserveModalClose = () => {
    setShowModalReserve(false);
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
              <Button
                className="btn-customized btn-gold"
                onClick={handleEventReserveModal}
              >
                Reservar habitación
              </Button>
              <Button
                className="btn-customized"
                onClick={handleEventCalendarModal}
              >
                Ver fechas disponibles
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Modal
        show={showModalCalendar}
        fullscreen={true}
        onHide={handleModalCloseCalendar}
      >
        <Modal.Header closeButton>
          <Modal.Title className="kaushan-script">
            Fechas disponibles{" "}
            <span className="txt-details-color">
              Habitación n° {room.numero}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-calendar">
          <CalendarApp admin={false} number={room.numero}></CalendarApp>
        </Modal.Body>
      </Modal>

      <Modal show={showModalReserve} onHide={handleReserveModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="kaushan-script ">
            Reservar <span className="txt-details-color">Habitación</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="nombreCompleto">
              <Form.Label
                className="text-dark"
                {...register("nombreCompleto", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener 3 caracteres como mínimo",
                  },
                  maxLength: {
                    value: 80,
                    message: "El nombre debe tener 80 caracteres como máximo",
                  },
                })}
              >
                Nombre Completo:*
              </Form.Label>
              <Form.Control
                type="text"
                disabled={true}
                value={userLoggedIn.nombreCompleto}
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="dni">
              <Form.Label className="text-dark">DNI:*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su dni"
                {...register("dni", {
                  required: "El DNI es obligatorio",
                  minLength: {
                    value: 8,
                    message: "El dni debe tener 8 caracteres como mínimo",
                  },
                  maxLength: {
                    value: 10,
                    message: "El dni debe tener 10 caracteres como máximo",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.dni?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 " controlId="telefono">
              <Form.Label className="text-dark">Teléfono:*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su teléfono"
                {...register("telefono", {
                  required: "El número de teléfono es obligatorio",
                  minLength: {
                    value: 7,
                    message:
                      "El número de teléfono debe tener 7 caracteres como mínimo",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "El número de teléfono debe tener 15 caracteres como máximo",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.telefono?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fechaInicio">
              <Form.Label className="text-dark">
                Fecha Inicio Reserva:*
              </Form.Label>
              <Form.Control
                type="date"
                {...register("fechaInicio", {
                  required: "La fecha de inicio es obligatoria",
                })}
              />
              <Form.Text className="text-danger">
                {errors.fechaInicio?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fechaFin">
              <Form.Label className="text-dark">Fecha Fin Reserva:*</Form.Label>
              <Form.Control
                type="date"
                {...register("fechaFin", {
                  required: "La fecha de fin es obligatoria",
                })}
              />
              <Form.Text className="text-danger">
                {errors.fechaFin?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 text-light">
              <p>Los campos que tienen * son obligatorios.</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Button type="submit" variant="primary">
                <i className="bi bi-arrow-right-circle"></i> Reservar
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default DetailsRoom;
