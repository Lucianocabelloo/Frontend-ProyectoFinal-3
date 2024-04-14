import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { Container, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "dayjs/locale/es";

const CalendarApp = () => {
  const localizer = dayjsLocalizer(dayjs);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  dayjs.locale("es");

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const events = [
    {
      start: dayjs("2024-04-14T12:00:00").toDate(),
      end: dayjs("2024-04-18T12:00:00").toDate(),
      title: "Juan Perez",
      data: {
        dni: "42965821",
        telefono: "3815736423",
        email: "admin@admin.com",
        total: "15000",
        numHabitacion: "1",
      },
    },
  ];

  const EventComponent = ({ event }) => {
    return (
      <div className="text-center" onClick={() => handleEventClick(event)}>
        <p className="m-0">{event.title}</p>
      </div>
    );
  };

  const components = {
    event: EventComponent,
  };
  return (
    <>
      <Container fluid className="my-4 p-2 mainContainer calendarContainer">
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
              <Button variant="info">
                <i className="bi bi-printer"></i>
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
      <Container>
        <Link to="/administrador" className="btn btn-primary w-100">
          <i className="bi bi-arrow-bar-left"></i> Volver
        </Link>
      </Container>
    </>
  );
};

export default CalendarApp;
