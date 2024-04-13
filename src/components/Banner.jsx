import { Container, Row, Col } from "react-bootstrap";
import imgBanner from "../assets/img/img-banner2.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div className="top">
        <Container>
          <Row className="pb-5">
            <Col md={12} lg={8} className="text-center text-lg-start">
              <p className="kaushan-script fs-3 mb-1 txt-details-color">
                - Paradise Hotel Resort -
              </p>
              <h1 className="txt-light-customized fw-bold display-5 pb-4 txt-shadow">
              Convierte tu estancia en una experiencia inolvidable
              </h1>
              <Link to="/habitaciones" className="btn-customized">Ver Habitaciones</Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom bg-color pt-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={5}>
              <h2 className="display-5 txt-details-color fw-bold">
                <span className="kaushan-script fw-normal fs-2 txt-light-customized">
                  Bienvenido a
                </span>
                <br></br>Paradise Hotel Resort
              </h2>
            </Col>
            <Col lg={7} className="pt-2 pt-lg-0">
              <p className="txt-light-customized">
                Sumérgete en un mundo de opulencia y comodidad en nuestro hotel
                de categoría mundial. Desde impecables suites hasta servicios
                exclusivos, cada momento en nuestro refugio del lujo está
                diseñado para deleitar tus sentidos y cumplir tus más altas
                expectativas. Descubre la perfección en cada detalle y reserva
                tu experiencia inolvidable hoy mismo.
              </p>
            </Col>
            <Col lg={12}>
              <div className="img-banner-container">
                <img
                  src={imgBanner}
                  alt="Imagen de la piscina del hotel"
                  className="img-banner"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
