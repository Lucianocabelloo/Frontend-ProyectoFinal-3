import { Container, Row, Col, Form } from "react-bootstrap";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Iframe from "react-iframe";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async () => {
    reset;
  };
  return (
    <div className="myMainC pt-5">
      <Container className="mySection">
        <Row>
          <Col xs={12} lg={6}>
            <h3 className="myTitleC pb-4">
              Construyamos hermosos recuerdos{" "}
              <span className="titleDifC">juntos</span>
            </h3>
            <p className="pb-5">
              Siempre puedes enviarnos un mensaje. <br /> Estaremos felices de
              ayudarte. <br />
              Disponible las 24 horas del día.
            </p>
          </Col>
        </Row>
        <Row className="pt-5 justify-content-center gap-5 gap-lg-0 pb-5 pb-sm-0">
          <Col
            xs={12}
            md={6}
            lg={4}
            className="d-flex flex-column align-items-center flex-md-row justify-content-sm-center gap-4 py-2 myColsC"
          >
            <FontAwesomeIcon icon={faEnvelope} className="myIconsC" />
            <p className="mySubtC">
              Envianos un correo <br />
              <span className="planeTextC">hotelresort@paradise.com</span>
            </p>
          </Col>
          <Col
            xs={12}
            md={5}
            lg={4}
            className="d-flex flex-column align-items-center flex-md-row justify-content-sm-center gap-4 py-2 myColsC"
          >
            <FontAwesomeIcon icon={faLocationDot} className="myIconsC" />
            <p className="mySubtC">
              Nuestra ubicaccion <br />
              <span className="planeTextC">Puedes verla aqui.</span>
            </p>
          </Col>
          <Col
            xs={12}
            md={5}
            lg={4}
            className="d-flex flex-column align-items-center flex-md-row justify-content-sm-center gap-4 py-2 myColsC"
          >
            <FontAwesomeIcon icon={faPhone} className="myIconsC" />
            <p className="mySubtC">
              Una llamada <br />
              <span className="planeTextC">+11 958 784 254</span>
            </p>
          </Col>
        </Row>
        <div className="d-none d-sm-flex justify-content-center">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52240.77695956275!2d-59.63562782109828!3d13.299245730679836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43e8a467531643%3A0xfa90798b5f8528fd!2sHarrison&#39;s%20Point%20Light%20House!5e0!3m2!1ses!2sar!4v1712950190775!5m2!1ses!2sar"
            width="900"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="myMapC"
          ></Iframe>
        </div>
      </Container>
      <div className="bgLightC">
        <Container>
          <Row className="gap-4 gap-lg-0 justify-content-center">
            <Col xs={12} md={6}>
              <h3 className="myOTitleC pb-4">
                Ponte en <span className="oTitleDifC">contacto</span> con
                nosotros
              </h3>
            </Col>
            <Col xs={12} md={6}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="formNombreCompleto">
                      <Form.Label className="myLabelR ps-3">
                        Nombre completo
                      </Form.Label>
                      <Form.Control
                        className="myInputR"
                        type="text"
                        placeholder="Pedro Paramo"
                        {...register("nombreCompleto", {
                          required: "Ingresar el nombre es obligatorio",
                          minLength: {
                            value: 3,
                            message:
                              "El nombre debe tener como minimo 3 caracteres",
                          },
                          maxLength: {
                            value: 80,
                            message:
                              "El nombre debe tener como maximo 80 caracteres",
                          },
                        })}
                      />
                      <Form.Text className="textErrorR">
                        <b>{errors.nombreCompleto?.message}&nbsp;</b>
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label className="myLabelR ps-3">
                        Correo electronico
                      </Form.Label>
                      <Form.Control
                        className="myInputR"
                        type="email"
                        placeholder="brucewayne@batimail.com"
                        {...register("email", {
                          required: "Ingresar el correo es obligatorio",
                          minLength: {
                            value: 10,
                            message:
                              "El correo debe tener como minimo 10 caracteres",
                          },
                          maxLength: {
                            value: 340,
                            message:
                              "El correo debe tener como maximo 340 caracteres",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Ingrese un correo valido",
                          },
                        })}
                      />
                      <Form.Text className="textErrorR">
                        <b>{errors.email?.message}&nbsp;</b>
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formConsulta">
                  <Form.Label className="myLabelR ps-3">Consulta</Form.Label>
                  <Form.Control
                    className="myInputR"
                    type="text"
                    as="textarea"
                    placeholder="Escriba aqui su consulta"
                    {...register("consulta", {
                      required: "Ingresar la consulta es obligatorio",
                      minLength: {
                        value: 10,
                        message: "Debe tener como minimo 10 caracteres",
                      },
                      maxLength: {
                        value: 400,
                        message: "Debe tener como maximo 400 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="textErrorR">
                    <b>{errors.consulta?.message}&nbsp;</b>
                  </Form.Text>
                </Form.Group>
                <div className="buttonContR">
                  <button type="submit" className="myButtonR">
                    Enviar
                  </button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
