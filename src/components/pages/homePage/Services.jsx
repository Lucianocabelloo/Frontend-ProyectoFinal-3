import { Col, Row } from "react-bootstrap";
import pool from "../../../assets/img/pool.jpg";
import gym from "../../../assets/img/gym.jpg";
import restaurant from "../../../assets/img/restaurant.jpg";
import spa from "../../../assets/img/spa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <Row className="gap-4 justify-content-center align-items-center">
      <Col md={5} className="mb-5 d-none d-md-block">
        <div className="img-service-container">
          <img src={pool} className="img-service" alt="Imagen del servicio" />
        </div>
      </Col>
      <Col md={6} className="mb-5">
        <div className="d-flex align-items-center gap-4">
          <FontAwesomeIcon
            icon="fa-solid fa-water-ladder"
            className="txt-details-color icon border-right-gold"
          />
          <h4 className="kaushan-script display-5">Piscina</h4>
        </div>
        <hr className="text-warning" />
        <p className="txt-gray">
          Nuestra impresionante piscina al aire libre es un oasis de relajación
          y disfrute. Rodeada de exuberantes jardines y áreas de descanso, es el
          lugar perfecto para relajarse bajo el sol, disfrutar de un refrescante
          chapuzón o simplemente desconectar y disfrutar de la tranquilidad. Con
          servicio de bar y cómodas tumbonas, nuestra piscina ofrece un ambiente
          idílico para relajarse y recargar energías.
        </p>
      </Col>
      <Col md={6} className="mb-5">
        <div className="d-flex align-items-center gap-4">
          <FontAwesomeIcon
            icon="fa-solid fa-dumbbell"
            className="txt-details-color icon border-right-gold"
          />
          <h4 className="kaushan-script display-5">
            Gimnasio
          </h4>
        </div>
        <hr className="text-warning" />
        <p className="txt-gray">
          Nuestro gimnasio de alta tecnología está equipado con equipos de
          última generación y ofrece un ambiente inspirador para mantenerse en
          forma durante tu estancia. Ya seas un aficionado al fitness o un
          atleta experimentado, nuestro gimnasio ofrece una amplia variedad de
          máquinas y clases dirigidas por profesionales para ayudarte a alcanzar
          tus objetivos de fitness. Además, nuestros entrenadores personales
          están disponibles para proporcionar asesoramiento experto y programas
          de entrenamiento personalizados.
        </p>
      </Col>
      <Col md={5} className="mb-5 d-none d-md-block">
        <div className="img-service-container">
          <img src={gym} className="img-service" alt="Imagen del servicio" />
        </div>
      </Col>
      <Col md={5} className="mb-5 d-none d-md-block">
        <div className="img-service-container">
          <img
            src={restaurant}
            className="img-service"
            alt="Imagen del servicio"
          />
        </div>
      </Col>
      <Col md={6} className="mb-5">
        <div className="d-flex align-items-center gap-4">
          <FontAwesomeIcon
            icon="fa-solid fa-utensils"
            className="txt-details-color icon border-right-gold"
          />
          <h4 className="kaushan-script display-5">
            Restaurante
          </h4>
        </div>
        <hr className="text-warning" />
        <p className="txt-gray">
          Nuestro restaurante gourmet es una experiencia culinaria inigualable
          que combina ingredientes frescos y de alta calidad con técnicas
          culinarias innovadoras. Con un menú cuidadosamente elaborado por
          nuestros chefs de renombre, cada plato es una obra maestra que deleita
          los sentidos. Ya sea que estés buscando una cena íntima o una comida
          relajada, nuestro restaurante es el lugar perfecto para una
          experiencia gastronómica excepcional.
        </p>
      </Col>
      <Col md={6} className="mb-5">
        <div className="d-flex align-items-center gap-4">
          <FontAwesomeIcon
            icon="fa-solid fa-spa"
            className="txt-details-color icon border-right-gold"
          />
          <h4 className="kaushan-script display-5">
            SPA de Lujo
          </h4>
        </div>
        <hr className="text-warning" />
        <p className="txt-gray">
          Nuestro spa de lujo es un santuario de bienestar diseñado para ofrecer
          una experiencia de relajación y rejuvenecimiento incomparable. Con una
          amplia gama de tratamientos y masajes, desde faciales revitalizantes
          hasta masajes relajantes, nuestro equipo de terapeutas expertos está
          dedicado a proporcionarte un cuidado personalizado que satisfaga tus
          necesidades individuales. Sumérgete en un mundo de serenidad y déjate
          llevar por la tranquilidad y el bienestar.
        </p>
      </Col>
      <Col md={5} className="mb-5 d-none d-md-block">
        <div className="img-service-container">
          <img src={spa} className="img-service" alt="Imagen del servicio" />
        </div>
      </Col>
    </Row>
  );
};

export default Services;
