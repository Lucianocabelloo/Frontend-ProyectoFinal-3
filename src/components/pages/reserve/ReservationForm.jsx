import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createReserveAPI } from "../../../helpers/reservationQueries";
import Swal from "sweetalert2";

const ReservationForm = ({
  email,
  numero,
  nombre,
  precioHab,
  setShowModalReserve,
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
  } = useForm();

  useEffect(() => {
    calcularTotal();
  }, [dates]);

  const onSubmit = async (reserva) => {
    reserva.numHabitacion = numero;
    reserva.email = email;
    reserva.nombreCompleto = nombre;
    reserva.fechaInicio = dates.fechaInicio + "T10:00:00.000Z";
    reserva.fechaFin = dates.fechaFin + "T10:00:00.000Z";
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
  };

  const handleChangeDate = (event) => {
    const { name, value } = event.target;
    setDates({
      ...dates,
      [name]: value,
    });
  };

  const calcularTotal = () => {
    if (dates.fechaInicio && dates.fechaFin) {
      const initDate = new Date(dates.fechaInicio);
      const finishDate = new Date(dates.fechaFin);
      const diffTime = Math.abs(finishDate - initDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const newTotal = diffDays * precioHab;

      setTotal(newTotal);
    }
  };

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
          value={dates.fechaInicio}
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
          value={dates.fechaFin}
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
