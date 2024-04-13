import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <tr className="text-center">
      <td>{user.nombreCompleto}</td>
      <td className="filaEmail text-truncate">{user.email}</td>
      <td>{user.rol}</td>
      <td>{user.activo ? "Si" : "No"}</td>
      <td className="text-center">
        <Link
          to="/administrador/editar-usuario"
          className="btn btn-warning me-2 mb-2"
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" className="me-2 mb-2">
          <i className="bi bi-person-fill-x"></i>
        </Button>
      </td>
    </tr>
  );
};

export default UserItem;
