import React from 'react'
import { Container, Image } from 'react-bootstrap'
import aboutImg from "../../../assets/img/about2.jpg"
import "./About.css"
import TeamCard from './TeamCard'
import  luciano from "../../../assets/img/members/luciano.jpg"
import  agustin from "../../../assets/img/members/agustin.jpg"
import  martin from "../../../assets/img/members/martin.jpg"
import  nicolas from "../../../assets/img/members/nico.jpg"

const AboutUs = () => {

    const Team = [
        {
            name: "Luciano Cabello",
            image: luciano,
            description: "Desarrollador Full Stack con experiencia en el stack MERN. Especializado en crear aplicaciones web modernas y escalables utilizando React y Node.js. Apasionado por la tecnología y siempre buscando innovar en sus proyectos.",
            github: "https://github.com/Lucianocabelloo",
            linkedin: "https://www.linkedin.com/in/luciano-cabello-2338461a7"
        },
        {
            name: "Agustin Maza",
            image: agustin,
            description: "Desarrollador Full Stack experto en el stack MERN. Con habilidades sólidas en MongoDB, Express.js, React.js y Node.js, crea aplicaciones web de alta calidad centradas en la experiencia del usuario y el rendimiento óptimo.",
            github: "https://github.com/Agustin030s",
            linkedin: "https://www.linkedin.com/in/sebastian-agustin-maza-1ab71a236/"
        },
        {
            name: "Nicolas Iosa",
            image: nicolas,
            description: "Desarrollador Full Stack con dominio del stack MERN. Resuelve problemas complejos y trabaja en todas las capas de una aplicación, desde la base de datos hasta la interfaz de usuario. Colaborativo y comunicativo, es un activo valioso en cualquier equipo..",
            github: "https://github.com/nicoiosa",
            linkedin: "https://www.linkedin.com/in/nicoiosa/"
        },
        {
            name: "Martin Cornejo",
            image: martin,
            description: "Desarrollador Full Stack con experiencia en el stack MERN y pasión por el diseño. Combina desarrollo web con análisis de objetivos y necesidades del cliente para crear soluciones eficientes. Adaptable y capaz de enfrentar desafíos multidisciplinarios con éxito..",
            github: "https://github.com/MartinCCornejo",
            linkedin: "https://www.linkedin.com/in/mart%C3%ADn-cristian-cornejo-9758101a7"
        }
    ];
    

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
                {
                    Team.map((user, index) => {
                        return(
                            <TeamCard key={index} user={user}/>
                        )
                    })
                    }
            </div>
        </Container>

    </div>
    </>
  )
}

export default AboutUs