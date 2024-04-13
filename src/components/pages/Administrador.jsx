import { useState } from "react";
import { Table, Row, Col, Container, Form, Button } from "react-bootstrap";
import UserItem from "./users/UserItem";
import ItemRoom from "./rooms/ItemRoom";
import { Link } from "react-router-dom";

const Administrator = () => {
  const [tabla, setTabla] = useState("Habitaciones");

  const handleOnChange = (event) => {
    setTabla(event.target.value);
  };

  return (
    <Container className="my-4">
      <h1 className="display-3">Administrador</h1>
      <hr className="hrRoom" />
      <Row className="align-items-center justify-content-sm-center">
        <Col md="4" className="mb-3">
          <Form.Select
            onChange={handleOnChange}
            className="selectPersonalizado"
          >
            <option value="Habitaciones">Habitaciones</option>
            <option value="Usuarios">Usuarios</option>
          </Form.Select>
        </Col>
        <Col md="8" className="text-md-end text-center mb-3">
          {tabla === "Habitaciones" && (
            <Link to="/administrador/crear" className="btn btn-primary me-2">
              <i className="bi bi-building-add"></i>
            </Link>
          )}
          {tabla === "Usuarios" && (
            <Button>
              <i className="bi bi-person-add"></i>
            </Button>
          )}
        </Col>
      </Row>
      {tabla === "Habitaciones" && (
        <div className="tableContainer">
          <Form>
            <Row className="justify-content-center align-items-center">
              <Col md="8" className="text-center text-md-end">
                <Form.Label className="text-dark">Buscar:</Form.Label>
              </Col>
              <Col md="4">
                <Form.Control type="text"></Form.Control>
              </Col>
            </Row>
          </Form>
          <Table responsive striped hover bordered className="my-4" id="rooms">
            <thead className="text-center">
              <th>Número</th>
              <th>Tipo</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Disponible</th>
              <th>Opciones</th>
            </thead>
            <tbody>
              <ItemRoom></ItemRoom>
              <ItemRoom></ItemRoom>
            </tbody>
          </Table>
        </div>
      )}
      {tabla === "Usuarios" && (
        <div className="tableContainer">
          <Form>
            <Row className="justify-content-center align-items-center">
              <Col md="8" className="text-center text-md-end">
                <Form.Label className="text-dark">Buscar:</Form.Label>
              </Col>
              <Col md="4">
                <Form.Control type="text"></Form.Control>
              </Col>
            </Row>
          </Form>
          <Table responsive striped hover bordered className="my-4" id="users">
            <thead className="text-center">
              <th>Nombre Completo</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Opciones</th>
            </thead>
            <tbody>
              <UserItem></UserItem>
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default Administrator;
