import React from 'react'

export function SectionHeader()
{
    return(
			<section>
				<header>
					<p>Ven a esta web para descubir el mejor menu del dia</p>
				</header>
				<nav>
					<ul className="menu-horizontal">
						<li> <a href="#one">Sobre Nosotros</a></li>
						<li> <a href="#two">Galeria</a></li>
						<li> <a href="#three">Contacto</a></li>
						<li> <a href="#four">Ubicacion</a></li>	
					</ul>
				</nav>
				<footer>
				</footer>
			</section>
)
}
