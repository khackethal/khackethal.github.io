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
          <div className="content-div">
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
                <h1>Kat Hackethal</h1>
                <h2>Software Engineer</h2>
              </div>

              <div id="image-div">
                IMAGE DIV
              </div>
            </>
            } 
            
          </div>
        </div> 
      </section>

      
    </>
  )
}

export default Intro