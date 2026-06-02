import React from 'react'
import main from './imgs/main.jpg';

export const Section1 = () => {

  return (
            <div>
               <section id="one">
                <div>
                 <h2>Home</h2>
                 <img src={main} className="App-main" alt="logo"/>
                 <h3><p>Somos un restaurant con platos unicos y modernos,
                    lleguese a nuestra sucursal a probar nuestras delicias</p> </h3>
                </div>
              </section>
            </div>
  )
}
