import DataTable from "react-data-table-component";
import FilterTable from "./FilterTable";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

const RoomsTable = ({rooms, handleSearchChange, searchTerm}) => {
  const filteresRooms = rooms.filter(
    (room) =>
      room.tipoHabitacion
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) ||
      room.categoria.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

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
          <Link
            to={`/administrador/calendario/${row.numero}`}
            className="btn btn-secondary me-2 mb-2"
          >
            <i className="bi bi-calendar-date"></i>
          </Link>
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
    <>
      <FilterTable
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        placeholder="Filtrar por tipo o categoria "
      ></FilterTable>
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
    </>
  );
};

export default RoomsTable;
