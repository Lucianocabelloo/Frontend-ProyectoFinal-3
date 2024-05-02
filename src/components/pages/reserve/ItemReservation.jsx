import { Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { deleteReservationAPI } from "../../../helpers/reservationQueries";
import jsPDF from "jspdf";

const ItemReservation = ({ reservation, deleteReserveFromUser }) => {
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
        <Button variant="info" onClick={generatePDF} className="me-2">
          <i className="bi bi-printer"></i>
        </Button>
        <Button variant="danger" onClick={deleteReserve}>
          <i className="bi bi-trash3"></i>
        </Button>
      </ul>
    </Col>
  );
};

export default ItemReservation;
