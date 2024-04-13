import { Col, Container, Row } from "react-bootstrap";

const DetailsRoom = () => {
    return (
        <Container className="my-4">
            <h1 className="kaushan-script fw-semibold">Detalles de <span className="txt-details-color">habitación</span></h1>
            <hr className="txt-details-color"/>
            <Row>
                <Col lg={6}>
                    <div className="img-container-detail">
                    <img src="https://images.pexels.com/photos/18368842/pexels-photo-18368842/free-photo-of-hotel-habitacion-pintura-pintando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-room-detail" alt="Imagen de la habitación"/>
                    </div>
                </Col>
                <Col lg={6}>

                </Col>
            </Row>
        </Container>
    );
};

export default DetailsRoom;