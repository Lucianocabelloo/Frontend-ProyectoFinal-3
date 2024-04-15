import { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { readUsersAPI } from "../../helpers/userQueries";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import FilterTable from "./administrator/FilterTable";
import { getRoomsAPI } from "../../helpers/queries";
import UsersTable from "./administrator/UsersTable";
import RoomsTable from "./administrator/RoomsTable";

const Administrator = () => {
  const [tabla, setTabla] = useState("Habitaciones");
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChange = (event) => {
    setTabla(event.target.value);
  };

  useEffect(() => {
    getUsers();
    getRooms();
  }, []);

  const getUsers = async () => {
    const answer = await readUsersAPI();
    if (answer.status === 200) {
      const data = await answer.json();
      setUsers(data);
    } else {
      Swal.fire(
        "Ocurrio un error",
        "No se pudo obtener los usuarios, intenta dentro de unos minutos nuevamente",
        "error"
      );
    }
  };

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.rol.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <Link
              to="/administrador/crear-usuario"
              className="btn btn-primary me-2"
            >
              <i className="bi bi-person-add"></i>
            </Link>
          )}
        </Col>
      </Row>
      {tabla === "Habitaciones" && (
        <div className="tableContainer">
          <RoomsTable rooms={rooms} handleSearchChange={handleSearchChange} searchTerm={searchTerm}></RoomsTable>
        </div>
      )}
      {tabla === "Usuarios" && (
        <div className="tableContainer">
          <UsersTable users={users} handleSearchChange={handleSearchChange} searchTerm={searchTerm}></UsersTable>
        </div>
      )}
    </Container>
  );
};

export default Administrator;
