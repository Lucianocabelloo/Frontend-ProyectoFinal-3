import React from 'react'
import { Container, Image } from 'react-bootstrap'
import aboutImg from "../../../assets/img/about2.jpg"
import "./About.css"
import TeamCard from './TeamCard'

const AboutUs = () => {
  return (
    <>
    <div className='About-Container'>
        <Container  className='my-5 About-Content'>
       <div className='About-Titles'>
        <h1>Sobre</h1>
        <h2>Nosotros</h2>
       </div>
       <div className='About-Info'>
        <h2>
            Nuestra Historia
        </h2>

        <p>En Paradise Hotel Resort, la hospitalidad va más allá de ofrecer comodidades de lujo; es una invitación a explorar, relajarse y rejuvenecer en un entorno que honra y respeta la naturaleza. Nuestro equipo dedicado está aquí para asegurarse de que cada momento de tu estadía sea inolvidable, desde las actividades de aventura hasta los momentos de tranquilidad junto al mar o en nuestro spa de clase mundial.</p>
       </div>
        </Container>
    </div>
    <Image  rounded className='imgSeparador' src={aboutImg} alt="Imagen de la empresa"/>
    <div className='Team-Container'>
        <Container className='Team-Content'>
            <h2>
                Equipo de Trabajo
            </h2>
            <div className='Team-Conteiner'>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
            </div>
        </Container>

    </div>
    </>
  )
}

export default AboutUs