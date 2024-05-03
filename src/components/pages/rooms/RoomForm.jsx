import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createRoomsAPI,
  editRoomAPI,
  getRoomById,
} from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import "../users/forms.css";

const RoomForm = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    if (editar) {
      loadDataRoom();
    }
  }, []);
  const loadDataRoom = async () => {
    const answer = await getRoomById(id);
    if (answer.status === 200) {
      const searchedRoom = await answer.json();
      setValue(`numero`, searchedRoom.numero);
      setValue(`tipoHabitacion`, searchedRoom.tipoHabitacion);
      setValue(`categoria`, searchedRoom.categoria);
      setValue(`descripcion`, searchedRoom.descripcion);
      setValue(`precio`, searchedRoom.precio);
      setValue(`imagen`, searchedRoom.imagen);
      setValue(`disponibilidad`, searchedRoom.disponibilidad);
    }
  };
  const onSubmit = async (room) => {
    if (editar) {
      const response = await editRoomAPI(room, id);
      if (response.status === 200) {
        Swal.fire({
          title: "¡Habitacion modificada!",
          text: `La habitación ${room.numero} fue modificada correctamente.`,
          icon: "success",
        });
        navigation("/administrador");
      } else {
        Swal.fire({
          title: "¡Ocurrió un error!",
          text: `La habitación ${room.numero} no fue modificada correctamente. Por favor, inténtelo nuevamente en unos minutos.`,
          icon: "error",
        });
      }
    } else {
      const answer = await createRoomsAPI(room);
      if (answer.status === 201) {
        Swal.fire(
          "Habitación Creada",
          `La habitación Nro. ${room.numero} fue creada exitosamente`,
          "success"
        );
        reset();
      } else {
        const data = await answer.json();
        console.log(data.errors.msg);
        Swal.fire(
          "Ocurrio un error",
          `${data.errors.length > 0 ? data.errors[0].msg : data.message}`,
          "error"
        );
      }
    }
  };

  return (
    <Container className="my-4 mainContainer">
      <h1 className="mb-4">{titulo} Habitación</h1>
      <hr className="hrRoom mb-5" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="justify-content-around">
          <Col md={5}>
            <Form.Group className="mb-3 text-light" controlId="numero">
              <Form.Label>Número de Habitación:*</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                className="myInputF"
                {...register("numero", {
                  required: "El número de habitación es obligatorio",
                  min: {
                    value: 1,
                    message: "El número minimo es 1",
                  },
                  max: {
                    value: 30,
                    message: "El número máximo es 30",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.numero?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group className="mb-3 text-light" controlId="tipoHabitacion">
              <Form.Label>Tipo Habitación:*</Form.Label>
              <Form.Select
              className="myInputSel"
                {...register("tipoHabitacion", {
                  required: "El tipo de habitación es obligatorio",
                })}
              >
                <option value="">Seleccione un Tipo</option>
                <option value="Individual">Individual</option>
                <option value="Doble">Doble</option>
                <option value="Triple">Triple</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.tipoHabitacion?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group className="mb-3 text-light" controlId="categoria">
              <Form.Label>Categoria:</Form.Label>
              <Form.Select
              className="myInputSel"
                {...register("categoria", {
                  required: "La categoria es obligatoria",
                })}
              >
                <option value="">Seleccione una Categoria</option>
                <option value="Standard">Standard</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Ejecutiva">Ejecutiva</option>
                <option value="Suite">Suite</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.categoria?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group className="mb-3 text-light" controlId="precio">
              <Form.Label>Precio:*</Form.Label>
              <Form.Control
              className="myInputF"
                type="number"
                placeholder="5000"
                {...register("precio", {
                  required: "El precio es obligatorio",
                  min: {
                    value: 4000,
                    message: "El precio minimo es 4000",
                  },
                  max: {
                    value: 500000,
                    message: "El precio máximo es 500000",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.precio?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={11}>
            <Form.Group className="mb-3 text-light" controlId="descripcion">
              <Form.Label className="me-3">Descripción:*</Form.Label>
              <Form.Control
              className="myInputF"
                as="textarea"
                rows={3}
                placeholder="Ej. Habitación deluxe con 2 camas somier, con vista al mar."
                {...register("descripcion", {
                  required: "La descripción es obligatoria",
                  minLength: {
                    value: 15,
                    message:
                      "La descripción debe tener como mínimo 15 caracteres",
                  },
                  maxLength: {
                    value: 350,
                    message:
                      "La descripción debe tener como máximo 350 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.descripcion?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group className="mb-3 text-light" controlId="imagen">
              <Form.Label>Imagen:*</Form.Label>
              <Form.Control
              className="myInputF"
                type="text"
                placeholder="https://web.com/ejemplo.png"
                {...register("imagen", {
                  required: "La imagen es obligatoria",
                  pattern: {
                    value:
                      /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                    message:
                      "Debe ingresar una URL de imagen valida (png, jpg, jpeg, gif, png, svg)",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group className="mb-3 text-light" controlId="disponibilidad">
              <Form.Label className="me-3">Disponible:*</Form.Label>
              <Form.Select
              className="myInputSel decorated"
                {...register("disponibilidad", {
                  required: "La disponibilidad es obligatoria",
                })}
              >
                <option value="">Seleccione una opción</option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.disponibilidad?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md={11} className="mt-3 text-center">
            <Form.Group className="mb-3 text-light">
              <p>Los campos que tienen * son obligatorios.</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <button type="submit" className="mb-3 mx-3 myButtonF">
                <i className="bi bi-floppy"></i>&nbsp;Guardar
              </button>
              <Link to="/administrador" className="myButtonF myButtonFDif">
                <i className="bi bi-arrow-bar-left"></i>&nbsp;Volver
              </Link>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default RoomForm;
