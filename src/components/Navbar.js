import React  from 'react'
import { Link }  from 'react-scroll'


function Navbar() {


  return (

    <div  className="navbar">
      <nav className="navbar">

        <li className="link"><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></li>
        <li className="link"><Link activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link></li>
        <li className="link" ><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></li>
      </nav>
    </div>
  )
}

export default Navbar

