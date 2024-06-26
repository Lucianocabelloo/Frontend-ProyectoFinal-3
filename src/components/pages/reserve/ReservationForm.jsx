import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  createReserveAPI,
  editReservationApi,
} from "../../../helpers/reservationQueries";
import Swal from "sweetalert2";

const ReservationForm = ({
  email,
  numero,
  nombre,
  precioHab,
  setShowModalReserve,
  fechaFin,
  fechaInicio,
  dni,
  telefono,
  totalRes,
  editar,
  resId,
  deleteReserveFromUser,
}) => {
  const [dates, setDates] = useState({
    fechaInicio: "",
    fechaFin: "",
  });
  const [total, setTotal] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const loadData = () => {
    setValue("dni", dni);
    setValue("telefono", telefono);
    setDates({
      fechaInicio: fechaInicio.split("T")[0],
      fechaFin: fechaFin.split("T")[0],
    });
    setTotal(totalRes);
  };
  useEffect(() => {
    calcularTotal();
  }, [dates]);

  useEffect(() => {
    if (editar) {
      loadData();
    }
  }, []);
  const onSubmit = async (reserva) => {
    reserva.numHabitacion = numero;
    reserva.email = email;
    reserva.nombreCompleto = nombre;
    reserva.fechaInicio = dates.fechaInicio + "T10:00:00.000Z";
    reserva.fechaFin = dates.fechaFin + "T10:00:00.000Z";
    if (editar) {
      const response = await editReservationApi(resId, reserva);
      const data = await response.json();
      if (response.status === 200) {
        Swal.fire({
          title: "La reserva fue modificada!",
          text: `La reserva de la habitacion ${reserva.numHabitacion} fue modificada correctamente.`,
          icon: "success",
        });
        reset();
        setShowModalReserve(false);
        deleteReserveFromUser();
      } else {
        Swal.fire({
          title: "¡Ocurrió un error!",
          text: `La reserva de la habitacion ${reserva.numHabitacion} no fue modificada correctamente.`,
          icon: "error",
        });
      }
    } else {
      const response = await createReserveAPI(reserva);
      if (response.status === 201) {
        Swal.fire(
          "Reserva Creada",
          `La habitación Nro. ${reserva.numHabitacion} fue reservada exitosamente`,
          "success"
        );
        reset();
        setShowModalReserve(false);
      } else {
        const data = await response.json();
        Swal.fire("Ocurrio un error", `${data.mensaje}`, "error");
      }
    }
  };

  const handleChangeDate = (event) => {
    const { name, value } = event.target;
    setDates({
      ...dates,
      [name]: value,
    });
  };

  const calcularTotal = async () => {
    if (dates.fechaInicio && dates.fechaFin) {
      const initDate = new Date(dates.fechaInicio);
      const finishDate = new Date(dates.fechaFin);
      const diffTime = Math.abs(finishDate - initDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const newTotal = diffDays * precioHab;
      setTotal(newTotal);
    }
  };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="nombreCompleto">
        <Form.Label className="text-dark">Nombre Completo: </Form.Label>
        <Form.Text className="fs-5 nomFormReserva"> {nombre} </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className="text-dark">Email: </Form.Label>
        <Form.Text className="fs-5 nomFormReserva"> {email} </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="dni">
        <Form.Label className="text-dark">DNI:*</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese su dni"
          className="myInputR"
          {...register("dni", {
            required: "El DNI es obligatorio",
            pattern: {
              value: /^\d{7,8}$/,
              message: "Debe contener entre 7 u 8 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.dni?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="telefono">
        <Form.Label className="text-dark">Teléfono:*</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese su teléfono"
          className="myInputR"
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
      <Form.Group className="mb-3" controlId="fechaInicio">
        <Form.Label className="text-dark">Fecha Inicio Reserva:*</Form.Label>
        <Form.Control
          type="date"
          name="fechaInicio"
          className="myInputR"
          value={dates.fechaInicio}
          min={currentDate}
          {...register("fechaInicio", {
            required: "La fecha de inicio es obligatoria",
          })}
          onChange={handleChangeDate}
        />
        <Form.Text className="text-danger">
          {errors.fechaInicio?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="fechaFin">
        <Form.Label className="text-dark">Fecha Final Reserva:*</Form.Label>
        <Form.Control
          type="date"
          name="fechaFin"
          className="myInputR"
          value={dates.fechaFin}
          min={currentDate}
          {...register("fechaFin", {
            required: "La fecha de fin es obligatoria",
          })}
          onChange={handleChangeDate}
        />
        <Form.Text className="text-danger">
          {errors.fechaFin?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 text-light">
        <p>
          <b>Total: $ {total}</b>
        </p>
      </Form.Group>
      <Form.Group className="mb-3 text-light">
        <p>Los campos que tienen * son obligatorios.</p>
      </Form.Group>
      <Form.Group className="mb-3">
        <button className="btn-customized-2" type="submit">
          <i className="bi bi-arrow-right-circle"></i> Reservar
        </button>
      </Form.Group>
    </Form>
  );
};

export default ReservationForm;
