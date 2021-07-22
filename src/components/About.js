import React from 'react'
import { FaJsSquare, FaHtml5, FaCss3Alt, FaSass, FaReact, FaPython, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiBulma, SiMongodb, SiDjango, SiPostgresql, SiYarn, SiNpm, SiJest, SiHeroku, SiNetlify, SiAdobephotoshop, SiAdobeindesign } from 'react-icons/si'



function About () {

  const [ extraAboutOpen, setExtraAboutOpen ] = React.useState(false)

  // const handleOpenExtraAbout = () => {
  //   setExtraAboutOpen(!extraAboutOpen)
  // }

  const handleCloseExtraAbout = () => {
    setExtraAboutOpen(!extraAboutOpen)
  }

  return (
    <>
      {!extraAboutOpen && 
    <section className="about-section" id="about">
      <h1  id="about-section-header"></h1>

      <div className="inner-about-section">
        <div className="left-side-about">
          <div>
            <h2 id="about-card-title-black">About</h2>
          </div>
          <div className="about-text-div">
          My very first job was at an e-commerce startup, <br></br> where I was involved in shoot production but also very close to the software engineering team, which helped me to develop a good understanding of the Frontend and Backend setup of the website. <p>That job started my interest in coding, leading to several courses taken in my spare time, and finally the decision to switch to Software Engineering full time.
          I’m curious to learn, I love a good puzzle and finding solutions. </p> <p>I have great experience working in and managing teams, and an excellent understanding of other job roles and the lifecycle of delivering a product to clients. 
            </p><p>I’m currently looking for a position as Junior Software Engineer, ideally working with React. </p>
            {/* <button onClick={handleOpenExtraAbout} id="contact-button-2" className="more-about-button">More</button> */}
            <div className="portrait-div">
              <img  id="about-portrait" width="90px" src="https://i.imgur.com/pwie0Y7.png" alt="linkedin logo"/>
            </div>
          </div>
        </div>

        

        <div className="right-side-about">

          <div><h2 id="about-card-title">Tech Skills</h2>
          </div>
            
          <div className="techskill-div">
              
            <div className="frontend-div"> 
              <div className="inner-div"><FaHtml5 /><p id="tech-description">html 5</p></div>
              <div className="inner-div"><FaCss3Alt /><p id="tech-description">Css</p></div>
              <div className="inner-div">< FaJsSquare /><p id="tech-description">JavaScript</p></div>
              <div className="inner-div"><FaSass /><p id="tech-description">Sass</p></div>           
              <div className="inner-div"><SiBulma /><p id="tech-description">Bulma</p></div>
              <div className="inner-div">< FaReact /><p id="tech-description">React JS</p></div>
              <div className="inner-div">< FaPython /><p id="tech-description">Python</p></div>
              <div className="inner-div">< FaNodeJs /><p id="tech-description">Node.js</p></div>                
              <div className="inner-div">< SiMongodb /><p id="tech-description">Node.js</p></div>              
              <div className="inner-div">< SiDjango /><p id="tech-description">Mongo db</p></div>             
              <div className="inner-div">< SiPostgresql /><p id="tech-description">Postgresqul</p></div>
              <div className="inner-div"><SiYarn /><p id="tech-description">Yarn</p></div>
              <div className="inner-div">< SiNpm /><p id="tech-description">Npm</p></div>
              <div className="inner-div">< FaGithub /><p id="tech-description">Github</p></div>
              <div className="inner-div"> < SiJest  /><p id="tech-description">Jest</p></div>
              <div className="inner-div"> < SiHeroku /><p id="tech-description">Heroku</p></div>
              <div className="inner-div"> < SiNetlify /><p id="tech-description">Netlify</p></div>
              <div className="inner-div"> <SiAdobephotoshop /><p id="tech-description">Photoshop</p></div>
              <div className="inner-div"> < SiAdobeindesign /><p id="tech-description">Indesign</p></div>
            </div>

          </div>

        </div>
      </div>
    </section> 
      }
      { extraAboutOpen &&

<section className="about-section" id="about">
  <h1  id="about-section-header"></h1>

  <div className="inner-about-section">
    <div className="left-side-about">
      <div>
        <h2 id="about-card-title-black">More</h2>
        
        <div>
          Animal
        </div>

        <div>
          Games
        </div>

        <div>
        Travel
        </div>

        <div>
          Leisure
        </div>

      

      


        <button onClick={handleCloseExtraAbout} id="contact-button-2" className="more-about-button">Less</button>
      </div>
      
    </div>

  </div>

</section>            
      }
    </>
  )
}

export default About