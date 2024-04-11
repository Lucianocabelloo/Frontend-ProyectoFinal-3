import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
    return (
        <div className="bg-login mainContainer">
            <Container>
            <Row className="box-login">
                <Col lg={6}>
                    <div className="text-center">
                    <h1 className="txt-bg-color txt-montserrat fw-bold mb-4">Iniciar sesión</h1>
                    <hr/>
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
                </Col>
                <Col lg={6}>

                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Login;