import { Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
  return (
    <Col md="4" lg="3" className="mb-2 my-5">
      <Card>
        <Card.Img
          variant="top"
          src={room.imagen}
          className="card-room-img"
        />
        <Card.Body className="text-center py-4">
          <Badge pill className="badgePosition mb-3 fs-6">{room.categoria}</Badge>
          <Card.Title className="fs-3">Habitación {room.numero}</Card.Title>
          <Card.Text>{room.tipoHabitacion}</Card.Text>
          <p className="fw-semibold txt-details-color fs-4">${room.precio}</p>
          <Link to={'/detalle-habitacion/'+room._id} className="btn btnCardRoom">Ver Habitación</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
