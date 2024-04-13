import React from 'react'
import { Container } from 'react-bootstrap'
import aboutImg from "../../../assets/img/about2.jpg"
import "./About.css"

const AboutUs = () => {
  return (
    <div className='About-Container'>
        <Container className='my-5 About-Content'>
        <section className='Section-Title'>
            <h1>Sobre Nosotros</h1>
        </section>
        <section className='Section-Content'>
            <div className='Section-Info'>
                <h2>Nuestra historia</h2>
                <p>En el corazón de Costa Serena, entre las olas que acarician la playa y los árboles que susurran secretos antiguos, nació Paradise Hotel Resort. Desde 2010, hemos sido un refugio de lujo donde el océano y la selva convergen para brindarte una experiencia inolvidable.</p>
                <p>Cada día, celebramos la belleza de este paraíso con vistas panorámicas desde nuestras suites y momentos de conexión con la naturaleza en nuestras villas entre árboles centenarios. Nuestro compromiso con la sostenibilidad ambiental se refleja en prácticas de conservación que protegen la biodiversidad que nos rodea.</p>
                <p>En Paradise Hotel Resort, la hospitalidad va más allá de ofrecer comodidades de lujo; es una invitación a explorar, relajarse y rejuvenecer en un entorno que honra y respeta la naturaleza. Nuestro equipo dedicado está aquí para asegurarse de que cada momento de tu estadía sea inolvidable, desde las actividades de aventura hasta los momentos de tranquilidad junto al mar o en nuestro spa de clase mundial.</p>
                <p>Bienvenidos a Paradise Hotel Resort, donde el lujo encuentra su hogar en la tranquilidad de la naturaleza, y donde la magia de Costa Serena espera ser descubierta por ti.</p>

            </div>
            <div className='Section-Img'>
                    <img src={aboutImg} alt="" />
            </div>
        </section>
        <section className='Section-Footer'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quae sunt, dolores quidem esse dicta numquam debitis quo ad accusantium repudiandae, sapiente beatae vitae aspernatur animi voluptates laudantium cumque quasi?</p>
        </section>

        </Container>
    </div>
  )
}

export default AboutUs