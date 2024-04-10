import { Col, Card, Button, Badge } from "react-bootstrap";

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
          <Button className="btnCardRoom">Ver Habitación</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
