import { Button } from "react-bootstrap";

const UserItem = () => {
  return (
    <tr className="text-center">
      <td>Pepito Juan</td>
      <td className="filaEmail text-truncate">example@example.com</td>
      <td>Usuario</td>
      <td className="text-center">
        <Button variant="warning" className="me-2 mb-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="me-2 mb-2">
          <i className="bi bi-person-fill-x"></i>
        </Button>
      </td>
    </tr>
  );
};

export default UserItem;
