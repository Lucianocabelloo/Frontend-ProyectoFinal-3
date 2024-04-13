import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { readUsersAPI } from "../../helpers/userQueries";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import FilterTable from "./administrator/FilterTable";
import { getRoomsAPI } from "../../helpers/queries";

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
    console.log(answer);
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

  const filteresRooms = rooms.filter(
    (room) =>
      room.tipoHabitacion
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) ||
      room.categoria.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const columnsUsers = [
    {
      name: "Nombre Completo",
      selector: (row) => row.nombreCompleto,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Rol",
      selector: (row) => row.rol,
    },
    {
      name: "Activo",
      selector: (row) => row.activo,
      cell: (row) => (row.activo ? "Si" : "No"),
    },
    {
      name: "Opciones",
      cell: (row) => (
        <div className="text-center my-2">
          <Link
            to={`/administrador/editar-usuario/${row._id}`}
            className="btn btn-warning me-2 mb-2"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" className="me-2 mb-2">
            <i className="bi bi-person-fill-x"></i>
          </Button>
        </div>
      ),
    },
  ];

  const columnsRooms = [
    {
      name: "Número",
      selector: (row) => row.numero,
      sortable: true,
    },
    {
      name: "Tipo",
      selector: (row) => row.tipoHabitacion,
    },
    {
      name: "Categoria",
      selector: (row) => row.categoria,
    },
    {
      name: "Precio",
      selector: (row) => row.precio,
    },
    {
      name: "Imagen",
      cell: (row) => (
        <Image
          src={row.imagen}
          alt={row.descripcion}
          className="imgTabla"
          thumbnail
        ></Image>
      ),
    },
    {
      name: "Disponible",
      selector: (row) => row.disponibilidad,
      cell: (row) => (row.disponibilidad ? "Si" : "No"),
    },
    {
      name: "Opciones",
      cell: (row) => (
        <div className="text-center my-2">
          <Button variant="secondary" className="me-2 mb-2">
            <i className="bi bi-calendar-date"></i>
          </Button>
          <Link
            to={`/detalle-habitacion/${row._id}`}
            className="btn btn-info me-2 mb-2"
          >
            <i className="bi bi-eye"></i>
          </Link>
          <Link
            to={`/administrador/editar/${row._id}`}
            className="btn btn-warning me-2 mb-2"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" className="me-2 mb-2">
            <i className="bi bi-trash3"></i>
          </Button>
        </div>
      ),
    },
  ];

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
          <FilterTable searchTerm={searchTerm} handleSearchChange={handleSearchChange} placeholder="Filtrar por tipo o categoria "></FilterTable>
          <div className="mt-4">
            <DataTable
              columns={columnsRooms}
              data={filteresRooms}
              pagination
              paginationPerPage={5}
              responsive
              striped
              highlightOnHover
              noHeader
              paginationRowsPerPageOptions={[5, 10, 20]}
            />
          </div>
        </div>
      )}
      {tabla === "Usuarios" && (
        <div className="tableContainer">
          <FilterTable
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            placeholder="Filtrar por nombre, email o rol"
          ></FilterTable>
          <div className="mt-4">
            <DataTable
              columns={columnsUsers}
              data={filteredUsers}
              pagination
              paginationPerPage={5}
              responsive
              striped
              highlightOnHover
              noHeader
              paginationRowsPerPageOptions={[5, 10, 20]}
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Administrator;
