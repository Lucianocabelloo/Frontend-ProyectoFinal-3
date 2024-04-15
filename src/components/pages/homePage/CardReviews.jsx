import { Card, Col, Row } from "react-bootstrap";
import person1 from "../../../assets/img/testi1.jpg";
import person2 from "../../../assets/img/testi2.jpg";
import person3 from "../../../assets/img/testi3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardReviews = () => {
  return (
    <Row className="justify-content-center align-items-center flex-wrap">
      <Col lg={6} xl={4} className="mb-5">
        <Card className="card-review text-center">
          <div className="img-person-container">
            <img
              src={person1}
              alt="Imagen de la persona que dejo el testimonio"
              className="img-person"
            />
          </div>
          <Card.Body>
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="icon txt-details-color"
            ></FontAwesomeIcon>
            <Card.Text className="fst-italic text-secondary">
              Mi estancia en este hotel fue una experiencia maravillosa. Las
              habitaciones son elegantes y confortables, el personal es muy
              atento y el restaurante ofrece una variedad de platos deliciosos.
              Todo está diseñado para garantizar una estancia cómoda y
              memorable. Sin duda, volveré en mi próximo viaje.
            </Card.Text>
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="icon txt-details-color"
            ></FontAwesomeIcon>
            <Card.Title className="text-black fw-bold txt-montserrat mt-2">
              María López
            </Card.Title>
            <Card.Subtitle className="text-muted">México</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} className="mb-5">
        <Card className="card-review text-center">
          <div className="img-person-container">
            <img
              src={person2}
              alt="Imagen de la persona que dejo el testimonio"
              className="img-person"
            />
          </div>
          <Card.Body>
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="icon txt-details-color"
            ></FontAwesomeIcon>
            <Card.Text className="fst-italic text-secondary">
              Este hotel superó todas mis expectativas. Las instalaciones son
              impresionantes, desde la piscina hasta el spa, todo está
              cuidadosamente diseñado para el confort de los huéspedes. El
              servicio es de primera clase; el personal es amable y atento,
              siempre dispuesto a hacer que tu estancia sea inolvidable.
            </Card.Text>
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="icon txt-details-color"
            ></FontAwesomeIcon>
            <Card.Title className="text-black fw-bold txt-montserrat mt-2">
              Carlos Rodríguez
            </Card.Title>
            <Card.Subtitle className="text-muted">Argentina</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} className="mb-5">
        <Card className="card-review text-center">
          <div className="img-person-container">
            <img
              src={person3}
              alt="Imagen de la persona que dejo el testimonio"
              className="img-person"
            />
          </div>
          <Card.Body>
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="icon txt-details-color"
            ></FontAwesomeIcon>
            <Card.Text className="fst-italic text-secondary">
              No tengo más que elogios para este hotel. La atención al detalle
              en cada rincón es impresionante. El spa es un verdadero oasis de
              relajación, y el restaurante ofrece una experiencia gastronómica
              excepcional. Desde el momento en que llegas, te sientes cuidado y
              mimado. Este hotel se ha convertido en mi refugio preferido.
            </Card.Text>
            <FontAwesomeIcon
              icon="fa-solid fa-quote-left"
              className="icon txt-details-color"
            ></FontAwesomeIcon>
            <Card.Title className="text-black fw-bold txt-montserrat mt-2">
              Laura Martínez
            </Card.Title>
            <Card.Subtitle className="text-muted">Colombia</Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardReviews;
