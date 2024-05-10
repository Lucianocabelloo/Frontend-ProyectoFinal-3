import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { getRoomsAPI } from "../../../helpers/queries";
import {
  createReserveAPI,
  editReservationApi,
  getReservationByIdAPI,
} from "../../../helpers/reservationQueries";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const ReservationAdminForm = ({ titulo, editar }) => {
  const [rooms, setRooms] = useState([]);
  const [roomPrice, setRoomPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [dates, setDates] = useState({
    fechaInicio: "",
    fechaFin: "",
  });

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    calcularTotal();
  }, [dates, roomPrice]);

  useEffect(() => {
    getRooms();
    if (editar) {
      loadData();
    }
  }, []);

  const getRooms = async () => {
    const answer = await getRoomsAPI();
    if (answer.status === 200) {
      const data = await answer.json();
      setRooms(data);
    } else {
      Swal.fire(
        "Ocurrio un error",
        "No se pudo obtener las habitaciones, intenta dentro de unos minutos nuevamente",
        "error"
      );
    }
  };

  const onSubmit = async (reserva) => {
    if (editar) {
      const response = await editReservationApi(id, reserva); 
      if (response.status === 200) {
        Swal.fire({
          title: "La reserva fue modificada!",
          text: `La reserva ${reserva.numero} fue modificada correctamente.`,
          icon: "success",
        });
        navigation("/administrador");
      } else {
        Swal.fire({
          title: "¡Ocurrió un error!",
          text: `La reserva ${reserva.numero} no fue modificada correctamente.`,
          icon: "error",
        });
      }
    } else {
      reserva.fechaInicio = dates.fechaInicio + "T10:00:00.000Z";
      reserva.fechaFin = dates.fechaFin + "T10:00:00.000Z";
      console.log(reserva);
      const response = await createReserveAPI(reserva);
      if (response.status === 201) {
        Swal.fire(
          "Reserva Creada",
          `La habitación Nro. ${reserva.numHabitacion} fue reservada exitosamente`,
          "success"
        );
        reset();
        setDates({
          fechaInicio: "",
          fechaFin: "",
        });
      } else {
        const messages = await response.json();
        Swal.fire("Ocurrio un error", `${messages.mensaje}`, "error");
      }
    }
  };

  const loadData = async () => {
    const response = await getReservationByIdAPI(id);
    if (response.status === 200) {
      const searchedReserve = await response.json();
      setValue("dni", searchedReserve.dni);
      setValue("nombreCompleto", searchedReserve.nombreCompleto);
      setValue("email", searchedReserve.email);
      setValue("telefono", searchedReserve.telefono);
      setDates({
        fechaInicio: searchedReserve.fechaInicio.split("T")[0],
        fechaFin: searchedReserve.fechaFin.split("T")[0],
      });
      setValue("numHabitacion", searchedReserve.numHabitacion);

      const selectedRoom = rooms.find(
        (room) => room.numero === searchedReserve.numHabitacion
      );
    } else {
      Swal.fire(
        "Ocurrio un error",
        "No se pudo obtener los datos de la reserva, intenta dentro de unos minutos nuevamente",
        "error"
      );
    }
  };

  const handleChangeData = (event) => {
    const { name, value } = event.target;
    setDates({
      ...dates,
      [name]: value,
    });

    if (name === "numHabitacion") {
      const selectedRoom = rooms.find((room) => room.numero === Number(value));
      if (selectedRoom) {
        setRoomPrice(selectedRoom.precio);
      }
    }
  };

  const calcularTotal = () => {
    if (dates.fechaInicio && dates.fechaFin) {
      const initDate = new Date(dates.fechaInicio);
      const finishDate = new Date(dates.fechaFin);
      const diffTime = Math.abs(finishDate - initDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const newTotal = diffDays * roomPrice;

      setTotal(newTotal);
    }
  };

  return (
    <Container className="my-4 mainContainer">
      <h1 className="mb-3">{titulo} Reserva</h1>
      <hr className="hrRoom" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md="6">
            <Form.Group className="mb-3 " controlId="dni">
              <Form.Label>DNI:*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el dni del cliente"
                className="myInputF"
                {...register("dni", {
                  required: "El DNI es obligatorio",
                  pattern: {
                    value: /^\d{7,8}$/,
                    message: "Debe contener entre 7 u 8 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.dni?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3 " controlId="nombreCompleto">
              <Form.Label>Nombre Completo:*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Nombre Completo del Cliente"
                className="myInputF"
                {...register("nombreCompleto", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener como mínimo 3 caracteres",
                  },
                  maxLength: {
                    value: 80,
                    message: "El nombre debe tener como máximo 80 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreCompleto?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Form.Group className="mb-3 " controlId="email">
              <Form.Label>Email:*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese el email del cliente"
                className="myInputF"
                {...register("email", {
                  required: "El email es obligatorio",
                  minLength: {
                    value: 10,
                    message: "El correo debe tener como mínimo 10 caracteres",
                  },
                  maxLength: {
                    value: 340,
                    message: "El correo debe tener como máximo 340 caracteres",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Ingrese un correo valido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group className="mb-3 " controlId="telefono">
              <Form.Label>Teléfono:*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el teléfono del cliente"
                className="myInputF"
                {...register("telefono", {
                  required: "El número de teléfono es obligatorio",
                  pattern: {
                    value:
                      /^((\+54\s?)?(\s?9\s?)?\d{2,3}[\s-]?\d{3,4}-?\d{3,4}|\d{10,11}|(\d{3,4}[\s-]){1,2}\d{3,4})$/g,
                    message: "Debe tener un formato de telefono valido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.telefono?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Form.Group className="mb-3" controlId="fechaInicio">
              <Form.Label>Fecha Inicio Reserva:*</Form.Label>
              <Form.Control
                type="date"
                name="fechaInicio"
                className="myInputF"
                value={dates.fechaInicio}
                {...register("fechaInicio", {
                  required: "La fecha de inicio es obligatoria",
                })}
                onChange={handleChangeData}
              />
              <Form.Text className="text-danger">
                {errors.fechaInicio?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group className="mb-3" controlId="fechaFin">
              <Form.Label>Fecha Final Reserva:*</Form.Label>
              <Form.Control
                type="date"
                name="fechaFin"
                className="myInputF"
                value={dates.fechaFin}
                {...register("fechaFin", {
                  required: "La fecha de fin es obligatoria",
                })}
                onChange={handleChangeData}
              />
              <Form.Text className="text-danger">
                {errors.fechaFin?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group className="mb-3" controlId="numHabitacion">
              <Form.Label>Habitación:*</Form.Label>
              <Form.Select
                className="myInputSel"
                name="numHabitacion"
                {...register("numHabitacion", {
                  required: "La habitación es obligatoria",
                })}
                onChange={handleChangeData}
              >
                <option value="">Seleccione un Habitación</option>
                {rooms.map((room) => (
                  <option value={room.numero} key={room.numero}>
                    {room.numero} - {room.categoria} - {room.tipoHabitacion} - ${" "}
                    {room.precio}
                  </option>
                ))}
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.numHabitacion?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col className="mt-3 text-center">
            <Form.Group className="mb-3 text-light">
              <p className="fs-3">
                <b>Total: $ {total}</b>
              </p>
            </Form.Group>
            <Form.Group className="mb-3 text-light">
              <p>Los campos que tienen * son obligatorios.</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <button type="submit" className="mb-3 mx-3 myButtonF">
                <i className="bi bi-arrow-right-circle"></i>&nbsp;Reservar
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

export default ReservationAdminForm;
