import { Container, Row, Col, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="bg-login mainContainer">
      <Container>
        <Row className="box-login">
          <Col lg={6}>
            <div className="text-center">
              <h1 className="txt-bg-color txt-montserrat fw-bold mb-4">
                Iniciar sesión
              </h1>
              <hr />
              <div className="d-flex justify-content-center gap-4 align-items-center">
                <button className="icon-login">
                  <i class="bi bi-google"></i>
                </button>
                <button className="icon-login">
                  <i class="bi bi-facebook"></i>
                </button>
                <button className="icon-login">
                  <i class="bi bi-linkedin"></i>
                </button>
                <button className="icon-login">
                  <i class="bi bi-twitter-x"></i>
                </button>
              </div>
            </div>
            <Form className="mt-4">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="txt-montserrat fw-semibold">
                  Ingrese el email
                </Form.Label>
                <Form.Control type="email" placeholder="pedro@example.com" className="input-customized"/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="txt-montserrat fw-semibold ">
                  Ingrese la contraseña
                </Form.Label>
                <Form.Control type="password" placeholder="*******" className="input-customized"/>
              </Form.Group>
            <div className="text-center">
              <a href="#" className="text-secondary fw-bold text-center">
                Olvidó su contraseña?
              </a>
              <button className="btn-customized-2 d-block m-auto mt-4 fs-5">Iniciar sesión</button>
            </div>
            </Form>
          </Col>
          <Col lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
