import DataTable from "react-data-table-component";
import FilterTable from "./FilterTable";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";


const UsersTable = ({ users, handleSearchChange, deleteUser, suspendUser, searchTerm }) => {
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
      cell: (row) => (
        <Form.Group>
          <Form.Check checked={row.activo} onChange={() => suspendUser(row)} />
        </Form.Group>
      ),
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
          <Button variant="danger" className="me-2 mb-2" onClick={() => deleteUser(row)}>
            <i className="bi bi-person-fill-x"></i>
          </Button>
        </div>
      ),
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <FilterTable
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        placeholder="Filtrar por nombre o email"
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
    </>
  );
};

export default UsersTable;
