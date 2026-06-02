import React from 'react'
import wsp from './imgs/whatsapp.png';

export const Section3 = () => {

  return (
            <div>
							<section id="three">
								<div>
                <h2>Contacto</h2>
                <img src={wsp} className="App-wsp" alt="wsp"/>
                <h3><p>
                <a href="https://wa.me">
                Escribanos a nuestro whatsap para solicitar una reserva
                </a>
                </p> </h3>
								</div>
							</section>
            </div>
  )
}
