import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { createUserAPI } from "../../../helpers/userQueries";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const UserForm = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async (user) => {
    if (editar) {
      console.log("Aca se edita");
    } else {
      console.log(user);
      const answer = await createUserAPI(user);
      if (answer.status === 201) {
        Swal.fire(
          "Usuario creado",
          "El usuario fue creado exitosamente",
          "success"
        );
        const templateParams = {
          name: user.nombreCompleto,
          email: user.email,
        };
        emailjs.send("paradisehotelresort", "nuevo-usuario", templateParams, {
          publicKey: "Yw6Pt71umYLXr2vzv",
        });
        reset();
      } else {
        Swal.fire(
          "Ocurrio un error",
          "El usuario no pudo ser creado, intentelo nuevamente dentro de unos minutos",
          "error"
        );
      }
    }
  };

  return (
    <Container className="my-4 mainContainer">
      <h1 className="mb-3">{titulo} Usuario</h1>
      <hr className="hrRoom" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 text-light" controlId="nombreCompleto">
          <Form.Label>Nombre Completo:*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. Juan Perez"
            {...register("nombreCompleto", {
              required: "El nombre completo es obligatorio",
              minLength: {
                value: 3,
                message:
                  "El nombre completo debe tener como minimo 3 caracteres",
              },
              maxLength: {
                value: 80,
                message:
                  "El nombre completo debe tener como máximo 80 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreCompleto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="email">
          <Form.Label>Email:*</Form.Label>
          <Form.Control
            type="email"
            placeholder="usuario@usuario.com"
            {...register("email", {
              required: "El email es obligatorio",
              minLength: {
                value: 10,
                message: "El email debe tener 10 caracteres como minimo",
              },
              maxLength: {
                value: 340,
                message: "El email debe tener como máximo 340 caracteres",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Debes ingresar un formato valido de email",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="password">
          <Form.Label>Contraseña:*</Form.Label>
          <Form.Control
            type="password"
            placeholder="*********"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "La contraseña debe tener como minimo 8 caracteres",
              },
              maxLength: {
                value: 16,
                message: "La contraseña debe tener 16 caracteres como máximo",
              },
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message:
                  "La contraseña debe tener al menos, una máyuscula, una minuscula y un número",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="rol">
          <Form.Label>Rol:*</Form.Label>
          <Form.Select
            {...register("rol", {
              required: "El rol es obligatorio",
            })}
          >
            <option value="">Seleccione un Rol</option>
            <option value="Administrador">Administrador</option>
            <option value="Usuario">Usuario</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.rol?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light">
          <p>Los campos que tienen * son obligatorios.</p>
        </Form.Group>
        <Form.Group className="mb-3">
          <Button type="submit" variant="success me-2">
            <i className="bi bi-floppy"></i> Guardar
          </Button>
          <Link to="/administrador" className="btn btn-primary">
            <i className="bi bi-arrow-bar-left"></i> Volver
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UserForm;
