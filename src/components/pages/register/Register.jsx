import { Container, Card, Row, Col, Form } from "react-bootstrap";
import "./register.css";
import registerImg from "../../../assets/img/register.jpg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { createUserAPI } from "../../../helpers/userQueries";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (user) => {
    user.rol = "Usuario";
    user.activo = true;
    const answer = await createUserAPI(user);
    if (answer.status === 201) {
      Swal.fire({
        title: "Su usuario ha sido creado!",
        text: `${user.nombreCompleto} has sido registrado correctamente`,
        icon: "success",
      });
      const templateParams = {
        name: user.nombreCompleto,
        email: user.email,
      };
      emailjs.send("paradisehotelresort", "nuevo-usuario", templateParams, {
        publicKey: "Yw6Pt71umYLXr2vzv",
      });
      reset();
    } else {
      Swal.fire({
        title: "Ocurrió un error!",
        text: `${user.nombreCompleto} no fue registrado, pruebe nuevamente en unos minutos`,
        icon: "error",
      });
      reset();
    }
  };
  return (
    <div className="myMainR bgDarkR">
      <Container className="myContR">
        <Card className="bgLightR myCardR">
          <Row>
            <Col className="p-0">
              <Form
                onSubmit={handleSubmit(onSubmit)}
                className="myCardBodyR px-4 px-sm-5 py-4 py-lg-2 py-xl-4"
              >
                <div>
                  <h4 className="myTitleR">Registrarse</h4>
                  <div className="littleRectR"></div>
                </div>
                <div className="myFormR align-self-center">
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
                            "El nombre debe tener como mínimo 3 caracteres",
                        },
                        maxLength: {
                          value: 80,
                          message:
                            "El nombre debe tener como máximo 80 caracteres",
                        },
                      })}
                    />
                    <Form.Text className="textErrorR">
                      <b>{errors.nombreCompleto?.message}&nbsp;</b>
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="myLabelR ps-3">
                      Correo electrónico
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
                            "El correo debe tener como mínimo 10 caracteres",
                        },
                        maxLength: {
                          value: 340,
                          message:
                            "El correo debe tener como máximo 340 caracteres",
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
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label className="myLabelR ps-3">
                      Contraseña
                    </Form.Label>
                    <Form.Control
                      className="myInputR"
                      type={showPassword ? "text" : "password"}
                      placeholder="*******"
                      {...register("password", {
                        required: "Ingresar la contraseña es obligatorio",
                        minLength: {
                          value: 8,
                          message: "el minimo es de 8 caracteres",
                        },
                        maxLength: {
                          value: 24,
                          message: "el maximo es de 24 caracteres",
                        },
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                          message:
                            "La contraseña debe contener al menos una mayúscula, una minúscula y un numero",
                        },
                      })}
                    />
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="myCheckboContR">
                        <input
                          type="checkbox"
                          onChange={toggleShowPassword}
                          id="myCheckboxR"
                          className="myCheckR"
                          value="1"
                        />
                        <label htmlFor="myCheckboxR"></label>
                      </div>
                      <label className="myLabelR">Mostrar contraseña</label>
                    </div>
                    <Form.Text className="textErrorR">
                      <b>{errors.password?.message}&nbsp;</b>
                    </Form.Text>
                  </Form.Group>
                </div>
                <div className="buttonContR">
                  <button type="submit" className="myButtonR">
                    Registrarme
                  </button>
                </div>
              </Form>
            </Col>
            <Col className="p-0 d-none d-lg-block">
              <Card.Img
                src={registerImg}
                className="img-fluid myImageR"
                alt="Imagen representativa de bienvenida"
              />
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
