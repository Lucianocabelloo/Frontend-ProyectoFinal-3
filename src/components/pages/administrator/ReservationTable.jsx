import DataTable from "react-data-table-component";
import { Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import FilterTable from "./FilterTable";

const ReservationTable = ({
  reservations,
  handleSearchChange,
  searchTerm,
  deleteReserve,
}) => {
  const filteredReservations = reservations.filter(
    (reservation) =>
      reservation.nombreCompleto
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) ||
      reservation.email
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) ||
      reservation.dni.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  const columnsReserve = [
    {
      name: "Nombre Completo",
      selector: (row) => row.nombreCompleto,
    },
    {
      name: "DNI",
      selector: (row) => row.dni,
      sortable: true,
    },
    {
      name: "Teléfono",
      selector: (row) => row.telefono,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Fecha Inicio",
      selector: (row) => row.fechaInicio.split("T")[0],
    },
    {
      name: "Fecha Fin",
      selector: (row) => row.fechaFin.split("T")[0],
    },
    {
      name: "Num. Habitación",
      selector: (row) => row.numHabitacion,
    },
    {
      name: "Estado",
      selector: (row) =>
        calculateReservationState(row.fechaInicio, row.fechaFin),
      cell: (row) => (
        <Badge bg={getBadgeVariant(row)} pill>
          {calculateReservationState(row.fechaInicio, row.fechaFin)}
        </Badge>
      ),
    },
    {
      name: "Opciones",
      cell: (row) => (
        <div className="text-center my-2">
          <Button
            variant="danger"
            className="me-2 mb-2"
            onClick={() => deleteReserve(row)}
          >
            <i className="bi bi-trash3"></i>
          </Button>
        </div>
      ),
    },
  ];

  const calculateReservationState = (fechaInicio, fechaFin) => {
    const currentDate = new Date();
    const startDate = new Date(fechaInicio);
    const endDate = new Date(fechaFin);

    if (currentDate >= startDate && currentDate <= endDate) {
      return "Activa";
    } else if (currentDate > endDate) {
      return "Completada";
    } else if (currentDate < startDate) {
      return "Próxima";
    }
  };

  const getBadgeVariant = (row) => {
    const state = calculateReservationState(row.fechaInicio, row.fechaFin);
    switch (state) {
      case "Activa":
        return "success";
      case "Completada":
        return "danger";
      case "Próxima":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <>
      <FilterTable
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        placeholder="Filtrar por nombre, dni o email"
      ></FilterTable>
      <div className="mt-4">
        <DataTable
          columns={columnsReserve}
          data={filteredReservations}
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

export default ReservationTable;
