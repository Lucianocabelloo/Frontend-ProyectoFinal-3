import { Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const RoomCard = () => {
  return (
    <Col md="4" lg="3" className="mb-2">
      <Card>
        <Card.Img
          variant="top"
          src="https://media-cdn.tripadvisor.com/media/photo-s/12/51/74/64/habitacion-estandar.jpg"
        />
        <Card.Body className="text-center">
          <Badge pill className="badgePosition">Standard</Badge>
          <Card.Title>Habitación 1</Card.Title>
          <Card.Text>Indivudual</Card.Text>
          <Link to={'/detalle-habitacion/:id'} className="btn btnCardRoom">Ver Habitación</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
