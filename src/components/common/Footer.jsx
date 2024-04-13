import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
      <Container fluid className='footer-Container '>
        <section className='footer-Content py-5 bg-transparent' >
          <div className='footer-Description'>
            <h3>Paradise Hotel Resort</h3>
            <p>En el corazón de Costa Serena, entre las olas que acarician la playa y los árboles que susurran secretos antiguos, nació Paradise Hotel Resort. Desde 2010, hemos sido un refugio de lujo donde el océano y la selva convergen para brindarte una experiencia inolvidable.</p>
          </div>
          <div className='footer-Contact'>
            <h3>Contacto</h3>
            <p>Ubicacion. Pais</p>
            <p>+3815293845</p>
            <p>paradisehotelresort@gmail.com</p>

          </div>
          <div className='footer-Links'>
            <h3>Links</h3>
            <ul>
              <li>Sobre Nosotros</li>
              <li>FAQ</li>
              <li>Privacy</li>
              <li>Terminos y condiciones</li>
            </ul>
          </div>
          <div className='footer-SocialMedia'>
            <h3>Redes Sociales</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </section>
      </Container>
    )
}

export default Footer