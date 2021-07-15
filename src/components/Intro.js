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
              <div className="content-div">
                <div className="animation-div">
                  <h1 id="myname" className="focus-in-contract-bck" >Kat Hackethal</h1>
                  <h2 id="job-title" className="focus-in-contract-bck-2">Software Engineer</h2>
                </div>
              </div>
            </> 
          } 
          { !showIntro &&
            <>
              <div className="header-div">
                <div className="text-focus-in">
                  <h1>Kat Hackethal</h1>
                  <h2>Software Engineer</h2>
                </div>
              </div>
              <div className="content-div">
                <div className="text-focus-in" id="intro-image-div">
                  <li className="link"><Link activeClass="active" to="projects" spy={true} smooth={true}>
                  IMAGE DIV
                  </Link></li>
                </div>
              </div>
            </>
          } 
        </div> 
      </section>

      
    </>
  )
}

export default Intro