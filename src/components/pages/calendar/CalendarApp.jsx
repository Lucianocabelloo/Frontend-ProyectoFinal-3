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
import jsPDF from "jspdf";

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

  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "in",
      format: [3.15, 5.5],
    });

    doc.setFillColor("#fefffc");
    doc.rect(0, 0, 3.15, 5.5, "F");

    doc.setFontSize(14);
    doc.setTextColor("#f0d78d");
    doc.text("Paradise Resort Hotel", 0.25, 0.25);

    doc.setLineWidth(0.01);
    doc.setDrawColor("#08171e");
    doc.line(0.25, 0.35, 2.9, 0.35);

    doc.setFontSize(10);
    doc.setTextColor("#08171e");
    doc.text(`Nombre: ${selectedEvent.title}`, 0.25, 0.6);
    doc.text(`DNI: ${selectedEvent.data.dni}`, 0.25, 0.8);
    doc.text(`Habitación: ${selectedEvent.data.numHabitacion}`, 0.25, 1);
    doc.text(
      `Fecha de Entrada: ${dayjs(selectedEvent.start).format("DD/MM/YYYY")}`,
      0.25,
      1.2
    );
    doc.text(
      `Fecha de Salida: ${dayjs(selectedEvent.end).format("DD/MM/YYYY")}`,
      0.25,
      1.4
    );
    doc.line(0.25, 1.55, 2.9, 1.55);
    doc.text(`Total: $${selectedEvent.data.total}`, 0.25, 1.7);

    doc.line(0.25, 1.8, 2.9, 1.8);
    doc.setFontSize(10);
    doc.text("¡Muchas gracias por reservar con nosotros!", 0.2, 2);
    doc.setFontSize(8);
    doc.text(
      "Este ticket no sirve como factura, solo como comprobante.",
      0.15,
      5
    );

    doc.save("ticket_reserva.pdf");
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
        <h4 className="text-center mt-2 text-dark fs-1">
          {reservationsRoom.mensaje}
        </h4>
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
              <Button variant="info" onClick={generatePDF}>
                <i className="bi bi-printer"></i>
              </Button>
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
