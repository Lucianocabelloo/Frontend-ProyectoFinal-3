import { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  deleteUserAPI,
  readUsersAPI,
  suspendUserAPI,
} from "../../helpers/userQueries";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import FilterTable from "./administrator/FilterTable";
import { deleteRoomAPI, getRoomsAPI } from "../../helpers/queries";
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

  const suspendUser = async (row) => {
    const newStatus = !row.activo;
    const id = row._id;
    const answer = await suspendUserAPI({ activo: newStatus }, id);
    if (answer.status === 200) {
      if (row.activo) {
        Swal.fire({
          title: "¡Suspendido!",
          text: `El usuario ${row.nombreCompleto} suspendido.`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "¡Renovado!",
          text: `El usuario ${row.nombreCompleto} fue renovado.`,
          icon: "success",
        });
      }
      const response = await readUsersAPI();
      if (response.status === 200) {
        const data = await response.json();
        setUsers(data);
      }
    } else {
      if (row.activo) {
        Swal.fire({
          title: "¡Ocurrió un error!",
          text: `El usuario ${row.nombreCompleto} no pudo ser suspendido. Por favor, inténtelo nuevamente en unos minutos.`,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "¡Ocurrió un error!",
          text: `El usuario ${row.nombreCompleto} no pudo ser renovado. Por favor, inténtelo nuevamente en unos minutos.`,
          icon: "error",
        });
      }
    }
  };

  const deleteUser = (row) => {
    Swal.fire({
      title: "¿Estás seguro de querer eliminar al usuario?",
      text: "¡Este cambio no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡borrarlo!",
      cancelButtonText: "¡Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const answer = await deleteUserAPI(row._id);
        if (answer.status === 200) {
          Swal.fire({
            title: "¡Eliminado!",
            text: `El usuario ${row.nombreCompleto} fue eliminado.`,
            icon: "success",
          });
          const response = await readUsersAPI();
          if (response.status === 200) {
            const data = await response.json();
            setUsers(data);
          }
        } else {
          Swal.fire({
            title: "¡Ocurrió un error!",
            text: `El usuario ${row.nombreCompleto} no fue eliminado correctamente. Por favor, inténtelo nuevamente en unos minutos.`,
            icon: "error",
          });
        }
      }
    });
  };

  const deleteRoom = (row) => {
    Swal.fire({
      title: "¿Estás seguro de querer eliminar la habitación?",
      text: "¡Este cambio no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡borrarla!",
      cancelButtonText: "¡Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const answer = await deleteRoomAPI(row._id);
        if (answer.status === 200) {
          Swal.fire({
            title: "¡Eliminado!",
            text: `La habitación ${row.numero} fue eliminada.`,
            icon: "success",
          });
          const response = await getRoomsAPI();
          if (response.status === 200) {
            const data = await response.json();
            setRooms(data);
          }
        } else {
          Swal.fire({
            title: "¡Ocurrió un error!",
            text: `La habitación ${row.numero} no fue eliminada correctamente. Por favor, inténtelo nuevamente en unos minutos.`,
            icon: "error",
          });
        }
      }
    });
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
          <RoomsTable
            rooms={rooms}
            handleSearchChange={handleSearchChange}
            deleteRoom={deleteRoom}
            searchTerm={searchTerm}
          ></RoomsTable>
        </div>
      )}
      {tabla === "Usuarios" && (
        <div className="tableContainer">
          <UsersTable
            users={users}
            handleSearchChange={handleSearchChange}
            deleteUser={deleteUser}
            searchTerm={searchTerm}
          ></UsersTable>
        </div>
      )}
    </Container>
  );
};

export default Administrator;
