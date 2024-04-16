import { Col } from "react-bootstrap";

const ItemReservation = ({ reservation }) => {
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
        {/* <li className="list-customized">Fecha fin{endDate}</li> */}
      </ul>
    </Col>
  );
};

export default ItemReservation;
