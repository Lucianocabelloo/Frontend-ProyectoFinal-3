import { Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const RoomCard = ({room}) => {
  return (
    <Col md="4" lg="3" className="mb-2">
      <Card>
        <Card.Img
          variant="top"
          src={room.imagen}
        />
        <Card.Body className="text-center">
          <Badge pill className="badgePosition">{room.categoria}</Badge>
          <Card.Title>Habitación {room.numero}</Card.Title>
          <Card.Text>{room.tipoHabitacion}</Card.Text>
          <Link to={'/detalle-habitacion/'+room._id} className="btn btnCardRoom">Ver Habitación</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
