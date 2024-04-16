import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { Container, Button, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "dayjs/locale/es";
import {
  getReservationByNumberAPI,
  getReservationsAPI,
} from "../../../helpers/reservationQueries";
import Swal from "sweetalert2";

const CalendarApp = ({ admin, number, allReserve }) => {
  const localizer = dayjsLocalizer(dayjs);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [reservationsRoom, setReservationRoom] = useState([]);

  const { numero } = useParams();

  const numRoom = admin ? numero : number;

  useEffect(() => {
    if (allReserve) {
      getAllReservations();
    } else {
      getReservationRoom(numRoom);
    }
  }, []);

  const getReservationRoom = async (numero) => {
    try {
      const response = await getReservationByNumberAPI(numero);
      if (response.status === 200) {
        const data = await response.json();
        setReservationRoom(data);
      }
    } catch (error) {
      Swal.fire(
        "Ocurrio un error",
        `No se pudo obtener las reservas de la habitación Nro ${numero}, intenta dentro de unos minutos nuevamente`,
        "error"
      );
    }
  };

  const getAllReservations = async () => {
    try {
      const response = await getReservationsAPI();
      if (response.status === 200) {
        const data = await response.json();
        setReservationRoom(data);
      }
    } catch (error) {
      Swal.fire(
        "Ocurrio un error",
        "No se pudo obtener las reservas, intenta dentro de unos minutos nuevamente",
        "error"
      );
    }
  };

  dayjs.locale("es");

  const handleEventClick = (event) => {
    if (admin || allReserve) {
      setSelectedEvent(event);
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const events =
    reservationsRoom.length > 0
      ? reservationsRoom.map((reserva) => ({
          start: dayjs(reserva.fechaInicio).toDate(),
          end: dayjs(reserva.fechaFin).toDate(),
          title: reserva.nombreCompleto,
          data: {
            dni: reserva.dni,
            telefono: reserva.telefono,
            email: reserva.email,
            total: reserva.total,
            numHabitacion: reserva.numHabitacion,
          },
        }))
      : [];

  const EventComponent = ({ event }) => {
    return (
      <div
        className="text-center"
        onClick={() => handleEventClick(event)}
        title=""
      >
        <p className="m-0 text-light">
          {admin || allReserve ? event.title : "Reservado"}
        </p>
      </div>
    );
  };

  const components = {
    event: EventComponent,
  };

  return (
    <>
      {Object.keys(reservationsRoom).length > 0 && (
        <h4 className="text-center mt-2">{reservationsRoom.mensaje}</h4>
      )}
      <Container fluid className="my-3 p-2 mainContainer calendarContainer">
        <Calendar
          localizer={localizer}
          events={events}
          views={["month"]}
          defaultView="month"
          components={components}
          messages={{
            next: "Siguiente",
            previous: "Anterior",
            today: "Hoy",
          }}
        />

        {selectedEvent && (
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Detalles de la reserva</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <b>Número Habitación:</b> {selectedEvent.data.numHabitacion}
              </p>
              <p>
                <b>Reservado por:</b> {selectedEvent.title}
              </p>
              <p>
                <b>DNI:</b> {selectedEvent.data.dni}
              </p>
              <p>
                <b>Telefono:</b> {selectedEvent.data.telefono}
              </p>
              <p>
                <b>Email:</b> {selectedEvent.data.email}
              </p>
              <p>
                <b>Fecha de inicio de reserva:</b>{" "}
                {dayjs(selectedEvent.start).format("DD/MM/YYYY")}
              </p>
              <p>
                <b>Fecha de fin de reserva:</b>{" "}
                {dayjs(selectedEvent.end).format("DD/MM/YYYY")}
              </p>
              <p>
                <b>Total:</b> $ {selectedEvent.data.total}
              </p>
            </Modal.Body>
            <Modal.Footer className="text-end">
              <Link to="/error404" className="btn btn-info">
                <i className="bi bi-printer"></i>
              </Link>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
      <Container className="my-2">
        {admin || allReserve ? (
          <Link to="/administrador" className="btn btn-primary w-100">
            <i className="bi bi-arrow-bar-left"></i> Volver
          </Link>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default CalendarApp;
