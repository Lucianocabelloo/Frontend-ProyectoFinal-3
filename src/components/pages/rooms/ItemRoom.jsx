import { ButtonGroup, Button, Image } from "react-bootstrap";

const ItemRoom = () => {
  return (
    <tr className="text-center">
      <td>1</td>
      <td>Individual</td>
      <td>Standard</td>
      <td>$ 4000</td>
      <td className="text-center">
        <Image
          src="https://www.duo-paris.com/_novaimg/galleria/1444557.jpg"
          alt="hola"
          className="imgTabla"
          thumbnail
        ></Image>
      </td>
      <td>Si</td>
      <td className="text-center">
        <ButtonGroup>
          <Button variant="secondary"><i className="bi bi-calendar-date"></i></Button>
          <Button variant="info"><i className="bi bi-eye"></i></Button>
          <Button variant="warning"><i className="bi bi-pencil-square"></i></Button>
          <Button variant="danger"><i className="bi bi-trash3"></i></Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

export default ItemRoom;
