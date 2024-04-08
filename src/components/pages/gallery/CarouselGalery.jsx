import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carrousel1 from "../../../assets/img/Carrousel1.jpg";
import carrousel2 from "../../../assets/img/Carrousel2.jpg";
import carrousel3 from "../../../assets/img/Carrousel3.jpg";
import carrousel4 from "../../../assets/img/Carrousel4.jpg";
import carrousel5 from "../../../assets/img/Carrousel5.jpg";
import "./gallery.css"; // Importa tu archivo CSS donde aplicarás los estilos personalizados

function CarouselGalery() {
  const data = [
    {
      id: 1,
      imgSrc: carrousel1,
      text: "Piscina de afuera",
      description: "Disfruta de la serenidad del aire libre con nuestra impresionante piscina exterior, rodeada de exuberante vegetación y el cálido resplandor del sol. Un oasis perfecto para relajarte y disfrutar del ambiente tranquilo."
    },
    {
      id: 2,
      imgSrc: carrousel2,
      text: "Salon comedor",
      description: "Nuestro espacioso y elegante salón comedor te brinda la experiencia culinaria definitiva. Disfruta de exquisitos platos rodeado de un ambiente acogedor y moderno, perfecto para momentos especiales con amigos y familiares."
    },
    {
      id: 3,
      imgSrc: carrousel3,
      text: "Viste Piscina interior con vista desde el jardín.",
      description: "Déjate cautivar por la vista impresionante de nuestra piscina interior desde el jardín. Un lugar encantador donde la naturaleza se combina armoniosamente con el diseño contemporáneo, creando un ambiente de calma y elegancia."
    },
    {
      id: 4,
      imgSrc: carrousel4,
      text: "Vista piscina interior con vista hacia el jardin",
      description: "Experimenta la belleza de nuestra piscina interior con vistas panorámicas hacia el exuberante jardín. Un lugar perfecto para disfrutar de momentos de tranquilidad y serenidad, lejos del bullicio de la vida cotidiana."
    },
    {
      id: 5,
      imgSrc: carrousel5,
      text: "Desayuno",
      description: "Comienza tu día de la mejor manera con nuestro delicioso desayuno. Disfruta de una variedad de sabores frescos y saludables en un entorno acogedor y relajante, ideal para prepararte para un día lleno de actividades emocionantes."
    }
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
              <h3>{item.text}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselGalery;
