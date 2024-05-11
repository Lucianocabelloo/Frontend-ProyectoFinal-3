import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carrousel2 from "../../../assets/img/Carrousel2.jpg";
import carrousel4 from "../../../assets/img/Carrousel4.jpg";
import carrousel5 from "../../../assets/img/Carrousel5.jpg";
import "./gallery.css"; // Importa tu archivo CSS donde aplicarás los estilos personalizados

function CarouselGalery() {
  const data = [
    {
      id: 2,
      imgSrc: carrousel2,
      text: "Salon comedor",
      description:
        "Nuestro espacioso y elegante salón comedor te brinda la experiencia culinaria definitiva. Disfruta de exquisitos platos rodeado de un ambiente acogedor y moderno, perfecto para momentos especiales con amigos y familiares.",
    },
    {
      id: 4,
      imgSrc: carrousel4,
      text: "Piscina interior con vista hacia el jardin",
      description:
        "Experimenta la belleza de nuestra piscina interior con vistas panorámicas hacia el exuberante jardín. Un lugar perfecto para disfrutar de momentos de tranquilidad y serenidad, lejos del bullicio de la vida cotidiana.",
    },
    {
      id: 5,
      imgSrc: carrousel5,
      text: "Desayuno",
      description:
        "Comienza tu día de la mejor manera con nuestro delicioso desayuno. Disfruta de una variedad de sabores frescos y saludables en un entorno acogedor y relajante, ideal para prepararte para un día lleno de actividades emocionantes.",
    },
  ];

  return (
    <div className="carousel-container">
      <Carousel className="custom-carousel">
        {data.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="custom-img"
              src={item.imgSrc}
              alt={`imagen ${index}`}
            />
            <Carousel.Caption>
              <h3 className="fw-bold text-uppercase fs-2">{item.text}</h3>
              <div className="d-flex align-items-center justify-content-center my-3">
                <div className="line"></div>
                <div className="circle mx-3"></div>
                <div className="line"></div>
              </div>
              <p className="pb-4">{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselGalery;
