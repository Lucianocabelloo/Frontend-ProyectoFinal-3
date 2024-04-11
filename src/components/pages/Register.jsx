import { Container, Card, Row, Col, Form } from "react-bootstrap";
import "./register.css";
import registerImg from "../../assets/img/register.jpg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { createUserAPI } from "../../helpers/userQueries";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (user) => {
  const answer = await createUserAPI(user);
    if (answer.status === 201) {
      Swal.fire({
        title: "Su usuario a sido creado!",
        text: `${user.nombreCompleto} has sido registrado correctamente`,
        icon: "success",
      });
      reset();
    } else {
      Swal.fire({
        title: "Ocurrio un error!",
        text: `${user.nombreCompleto} no fue registrado, pruebe nuevamente en unos minutos`,
        icon: "error",
      });
    }
  };
  return (
    <div className="myMain bgDark">
      <Container className="myCont my-5">
        <Card className="bgLight myCard">
          <Row>
            <Col className="p-0">
              <Form
                onSubmit={handleSubmit(onSubmit)}
                className="myCardBody px-4 px-sm-5 py-4"
              >
                <div>
                  <h4 className="myTitle">Registrarse</h4>
                  <div className="littleRect"></div>
                </div>
                <div className="myForm align-self-center">
                  <Form.Group className="mb-3" controlId="formNombreCompleto">
                    <Form.Label className="myLabel ps-3">
                      Nombre completo
                    </Form.Label>
                    <Form.Control
                      className="myInput"
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
                    <Form.Text className="textError">
                      <b>{errors.nombreCompleto?.message}&nbsp;</b>
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="myLabel ps-3">
                      Correo electronico
                    </Form.Label>
                    <Form.Control
                      className="myInput"
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
                    <Form.Text className="textError">
                      <b>{errors.email?.message}&nbsp;</b>
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label className="myLabel ps-3">Contraseña</Form.Label>
                    <Form.Control
                      className="myInput"
                      type="password"
                      placeholder="*******"
                      {...register("password", {
                        required: "Ingresar la contraseña es obligatorio",
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                          message:
                            "La contraseña debe contener al menos una mayuscula, una minuscula y un numero",
                        },
                      })}
                    />
                    <Form.Text className="textError">
                      <b>{errors.password?.message}&nbsp;</b>
                    </Form.Text>
                  </Form.Group>
                </div>
                <div className="buttonCont">
                  <button type="submit" className="myButton">
                    Registrarme
                  </button>
                </div>
              </Form>
            </Col>
            <Col className="p-0 d-none d-lg-block">
              <Card.Img src={registerImg} className="img-fluid myImage" />
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
