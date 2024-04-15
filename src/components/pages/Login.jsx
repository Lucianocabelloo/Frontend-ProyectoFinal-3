import { Container, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../helpers/userQueries";
import Swal from "sweetalert2";
import { useState } from "react";

const Login = ({ setUserLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (user) => {
    const answer = await login(user);
    if (answer.status === 200) {
      Swal.fire("¡Bienvenido!", "Has iniciado sesión correctamente", "success");
      const data = await answer.json();
      sessionStorage.setItem(
        "usuarioHotel",
        JSON.stringify({
          nombreCompleto: data.nombreCompleto,
          email: data.email,
          rol: data.rol,
          token: data.token,
        })
      );
      setUserLoggedIn(data);
      if (data.rol === "Administrador") {
        navigate("/administrador");
      } else {
        navigate("/");
      }
    } else {
      Swal.fire(
        "Ocurrio un error",
        "Correo o contraseña incorrectos o usuario suspendido",
        "error"
      );
    }
  };

  return (
    <div className="bg-login mainContainer">
      <Container>
        <Row className="box-login">
          <Col lg={6} className="py-5 px-2 px-sm-4">
            <div className="text-center">
              <h1 className="txt-bg-color txt-montserrat fw-bold mb-4 display-5">
                Iniciar sesión
              </h1>
              <hr />
              <div className="d-flex justify-content-center gap-4 align-items-center">
                <Link to={"/google"} className="icon-login txt-bg-color">
                  <i className="bi bi-google"></i>
                </Link>
                <Link to={"/facebook"} className="icon-login txt-bg-color">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link to={"/linkedin"} className="icon-login txt-bg-color">
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link to={"/twitter-x"} className="icon-login txt-bg-color">
                  <i className="bi bi-twitter-x"></i>
                </Link>
              </div>
            </div>
            <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="txt-montserrat fw-semibold txt-bg-color">
                  Ingrese el email
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="pedro@example.com"
                  className="input-customized"
                  {...register("email", {
                    required: "El email es obligatorio",
                    minLength: {
                      value: 10,
                      message: "El email debe contener al menos 10 caracteres",
                    },
                    maxLength: {
                      value: 340,
                      message:
                        "El email debe contener como máximo 340 caracteres",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      message:
                        "Ingrese una dirección de correo electrónico válida",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className="txt-montserrat fw-semibold txt-bg-color">
                  Ingrese la contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*******"
                  className="input-customized"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 8,
                      message: "el minimo es de 8 caracteres",
                    },
                    maxLength: {
                      value: 24,
                      message: "el maximo es de 24 caracteres",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message:
                        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <div className="text-center">
                <Link
                  to={"/recuperar-password"}
                  className="text-secondary fw-bold text-center text-decoration-none"
                >
                  Olvidó su contraseña?
                </Link>
                <button
                  type="submit"
                  className="btn-customized-2 d-block m-auto mt-4 fs-5"
                >
                  Iniciar sesión
                </button>
              </div>
            </Form>
          </Col>
          <Col lg={6} className="bg-right-login py-5">
            <div className="text-center">
              <h2 className="kaushan-script txt-details-color display-4">
                Hola amigo!
              </h2>
              <p className="txt-light-customized mt-4 mb-5">
                Regístrate ahora para acceder a ofertas exclusivas, descuentos
                especiales y una experiencia de reserva sin complicaciones.
              </p>
              <Link
                to={"/registro"}
                className="btn-customized fs-5 text-decoration-none"
              >
                Registrarse
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
