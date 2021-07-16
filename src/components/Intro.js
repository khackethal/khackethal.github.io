import React from 'react'
import { Link }  from 'react-scroll'

function Intro() {

  const [ showIntro, setShowIntro ] = React.useState(true)

  setTimeout(() => {
    setShowIntro(false)
  }, 4000)

  return (
    <>
      <section>
        <div className="intro-section"> 
          { showIntro && 
            <>

              <div className="animation-div">
                <h1 id="myname" className="focus-in-contract-bck" >Kat Hackethal</h1>
                <h2 id="job-title" className="focus-in-contract-bck-2">Software Engineer</h2>
              </div>

            </> 
          } 
          { !showIntro &&
            <>
              <div className="header-div">
                <div className="text-focus-in">
                  <h1>Kat Hackethal</h1>
                  <h2>Software Engineer</h2>
                  <div>
                    <button id="contact-button-2"><a id="email-header" href="https://www.linkedin.com/in/kat-hackethal/" target="blank"><img id="linkedin" width="25px" src="https://i.imgur.com/TKivHU9.png" alt="linkedin logo"/></a></button>
                    <button id="contact-button-2"><a id="email-header" href="https://github.com/khackethal" target="blank"><img id="linkedin" height="25px" src="https://i.imgur.com/xJ8UMTm.png" alt="github logo"/></a></button>
                  </div>
                </div>
              </div>
              <li className="intro-link"><Link activeClass="active" to="projects" spy={true} smooth={true}>
                <div className="intro-card-div">
                  <div className="text-focus-in" id="intro-image-div">
                    <img id="intro-image"  src="https://s6.gifyu.com/images/intro_allprojects.gif" alt="project-reel"/>
                  </div>
                </div>
              </Link></li>
            </>
          } 
        </div> 
      </section>

      
    </>
  )
}

export default Intro