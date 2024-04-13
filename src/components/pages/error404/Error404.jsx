import { Container } from "react-bootstrap";
import "./error404.css";
import image404 from "../../../assets/img/404.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Link className="myMainE py-5" to="/">
      <Container className="myContE">
        <img
          src={image404}
          alt="Imagen representativa del error 404"
          className="myImgE img-fluid"
        />
        <p className="mt-4 text-center myTextE">
          <b>
            Lo sentimos, pero la dirección web que has ingresado no está
            disponible.
          </b>
        </p>
        <div className="littleRectE"></div>
        <p className="mt-2 text-center myTextE">
          Haz click en cualquier lado para volver al inicio
        </p>
      </Container>
    </Link>
  );
};

export default Error404;
