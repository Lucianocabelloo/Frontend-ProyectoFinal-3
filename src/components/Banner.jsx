import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className="top">
        <Container>
          <Row>
            <Col lg={7}>
              <p className="kaushan-script fs-2 mb-1 txt-details-color">
                - Paradise Hotel Resort -
              </p>
              <h1 className="txt-light-customized fw-bold pb-4">
                Donde el lujo encuentra su hogar y tus sueños se hacen realidad
              </h1>
              <button className="btn-cutomized">Ver Habitaciones</button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom bg-color pt-5">
        <Container>
          <hr className="text-warning" />
          <Row className="justify-content-center align-items-center">
            <Col lg={5}>
              <h2 className="display-5 txt-details-color">
                <span className="kaushan-script fs-2 txt-light-customized">
                  Bienvenido a
                </span>
                <br></br>Paradise Hotel Resort
              </h2>
            </Col>
            <Col lg={7}>
              <p className="txt-light-customized">
                Sumérgete en un mundo de opulencia y comodidad en nuestro hotel
                de categoría mundial. Desde impecables suites hasta servicios
                exclusivos, cada momento en nuestro refugio del lujo está
                diseñado para deleitar tus sentidos y cumplir tus más altas
                expectativas. Descubre la perfección en cada detalle y reserva
                tu experiencia inolvidable hoy mismo.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
