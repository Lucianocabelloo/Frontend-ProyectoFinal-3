import { Form } from "react-bootstrap";
import { useState } from "react";

const DateForm = ({ dates, setDates }) => {
  const handleChangeDate = (event) => {
    const { name, value } = event.target;
    setDates({
      ...dates,
      [name]: value,
    });
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="fechaInicio">
        <Form.Label className="text-dark">Fecha Inicio Reserva:*</Form.Label>
        <Form.Control
          type="date"
          name="fechaInicio"
          value={dates.fechaInicio}
          onChange={handleChangeDate}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="fechaFin">
        <Form.Label className="text-dark">Fecha Inicio Reserva:*</Form.Label>
        <Form.Control
          type="date"
          name="fechaFin"
          value={dates.fechaFin}
          onChange={handleChangeDate}
        />
      </Form.Group>
    </>
  );
};

export default DateForm;
