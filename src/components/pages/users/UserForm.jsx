import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UserForm = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (user) => {
    if (editar) {
      console.log("Aca se edita");
    } else {
      console.log(room);
    }
  };

  return (
    <Container className="my-4 mainContainer">
      <h1 className="mb-3">{titulo} Usuario</h1>
      <hr className="hrRoom"/>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 text-light" controlId="nombreCompleto">
          <Form.Label>Nombre Completo:*</Form.Label>
          <Form.Control type="text" placeholder="Ej. Juan Perez" />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="email">
          <Form.Label>Email:*</Form.Label>
          <Form.Control type="email" placeholder="usuario@usuario.com" />
          <Form.Text className="text-danger">Error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 text-light" controlId="password">
          <Form.Label>Contraseña:*</Form.Label>
          <Form.Control type="password" placeholder="*********" />
          <Form.Text className="text-danger">Error</Form.Text>
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
          <Button variant="success me-2">Guardar</Button>
          <Link to="/administrador" className="btn btn-primary">
            Volver
          </Link>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UserForm;
