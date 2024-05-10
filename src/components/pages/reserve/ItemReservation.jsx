import { Button, Col, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { deleteReservationAPI } from "../../../helpers/reservationQueries";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";

const ItemReservation = ({ reservation, deleteReserveFromUser }) => {
  const [showModalReserve, setShowModalReserve] = useState(false);
  const [precioHab, setPrecioHab] = useState(0);
  const getDate = (fechaISO) => {
    const date = new Date(fechaISO);
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const dayOfTheWeek = date.getUTCDay();

    return {
      day: day,
      month: months[month],
      year: year,
      dayOfTheWeek: days[dayOfTheWeek],
    };
  };

  const startDate = getDate(reservation.fechaInicio);
  const fullStartDate =
    startDate.dayOfTheWeek +
    " " +
    startDate.day +
    " de " +
    startDate.month +
    " de " +
    startDate.year;

  const endDate = getDate(reservation.fechaFin);
  const fullEndDate =
    endDate.dayOfTheWeek +
    " " +
    endDate.day +
    " de " +
    endDate.month +
    " de " +
    endDate.year;

  const deleteReserve = async () => {
    Swal.fire({
      title: "¿Estás seguro de querer eliminar la reserva?",
      text: "¡Este cambio no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡borrarla!",
      cancelButtonText: "¡Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const answer = await deleteReservationAPI(reservation._id);
        if (answer.status === 200) {
          Swal.fire({
            title: "¡Eliminado!",
            text: `La reserva fue eliminada.`,
            icon: "success",
          });
          deleteReserveFromUser();
        } else {
          Swal.fire({
            title: "¡Ocurrió un error!",
            text: `La reserva no fue eliminada correctamente. Por favor, inténtelo nuevamente en unos minutos.`,
            icon: "error",
          });
        }
      }
    });
  };
  const handleEventReserveModal = (event) => {
    setShowModalReserve(true);
    calcularPrecio();
  };
  const handleReserveModalClose = () => {
    setShowModalReserve(false);
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

    // Línea divisoria
    doc.setLineWidth(0.01);
    doc.setDrawColor("#08171e");
    doc.line(0.25, 0.35, 2.9, 0.35);

    doc.setFontSize(10);
    doc.setTextColor("#08171e");
    doc.text(`Nombre: ${reservation.nombreCompleto}`, 0.25, 0.6);
    doc.text(`DNI: ${reservation.dni}`, 0.25, 0.8);
    doc.text(`Habitación: ${reservation.numHabitacion}`, 0.25, 1);
    doc.text(
      `Fecha de Entrada: ${reservation.fechaInicio
        .split("T")[0]
        .split("-")
        .reverse()
        .join("-")}`,
      0.25,
      1.2
    );
    doc.text(
      `Fecha de Salida: ${reservation.fechaFin
        .split("T")[0]
        .split("-")
        .reverse()
        .join("-")}`,
      0.25,
      1.4
    );
    doc.line(0.25, 1.55, 2.9, 1.55);
    doc.text(`Total: $${reservation.total}`, 0.25, 1.7);

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
  const calcularPrecio = async () => {
    const initDate = new Date(reservation.fechaInicio);
    const finishDate = new Date(reservation.fechaFin);
    const diffTime = Math.abs(finishDate - initDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const newPrice = reservation.total / diffDays;
    setPrecioHab(newPrice);
  };

  return (
    <Col md={12} className="mb-4 bg-color-2 py-3">
      <h4 className="txt-details-color fs-3">
        Habitación {reservation.numHabitacion}
      </h4>
      <hr className="" />
      <ul>
        <li className="list-customized mb-3">
          <span className="fw-bold txt-details-color">Fecha de inicio:</span>
          <br></br>
          {fullStartDate}
        </li>
        <li className="list-customized">
          <span className="fw-bold txt-details-color">Fecha fin:</span>
          <br></br>
          {fullEndDate}
        </li>
        <Button variant="info" onClick={generatePDF} className="mt-3">
          <i className="bi bi-printer"></i>
        </Button>
        <Button
          variant="warning"
          onClick={handleEventReserveModal}
          className="mx-2 mt-3"
        >
          <i className="bi bi-pencil"></i>
        </Button>
        <Button variant="danger" onClick={deleteReserve} className="mt-3">
          <i className="bi bi-trash3"></i>
        </Button>
      </ul>
      <Modal show={showModalReserve} onHide={handleReserveModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="kaushan-script ">Editar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bgLightR">
          <ReservationForm
            email={reservation.email}
            numero={reservation.numHabitacion}
            nombre={reservation.nombreCompleto}
            totalRes={reservation.total}
            dni={reservation.dni}
            telefono={reservation.telefono}
            fechaInicio={reservation.fechaInicio}
            fechaFin={reservation.fechaFin}
            resId={reservation._id}
            editar={true}
            precioHab={precioHab}
            setShowModalReserve={setShowModalReserve}
          ></ReservationForm>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default ItemReservation;
