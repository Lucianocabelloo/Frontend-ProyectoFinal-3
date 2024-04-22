import { Button, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { deleteReservationAPI } from "../../../helpers/reservationQueries";


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
        <Button onClick={ deleteReserve}>Eliminar Reserva</Button>
        <Button >Editar Reserva</Button>
      </ul>
    </Col>
  );
};

export default ItemReservation;
