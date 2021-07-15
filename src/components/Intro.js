import React from 'react'

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
                </div>
              </div>
              <div></div>
              <div className="intro-card-div">
                <div className="text-focus-in" id="intro-image-div">
                  <img id="intro-image"  src="https://s6.gifyu.com/images/intro_allprojects.gif" alt="project-reel"/>
                </div>
                <div className="second-div"></div>
              </div>
            </>
          } 
        </div> 
      </section>

      
    </>
  )
}

export default Intro