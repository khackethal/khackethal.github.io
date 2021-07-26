import React from 'react'
import { FaJsSquare, FaHtml5, FaCss3Alt, FaSass, FaReact, FaPython, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiBulma, SiMongodb, SiDjango, SiPostgresql, SiYarn, SiNpm, SiJest, SiHeroku, SiNetlify, SiAdobephotoshop, SiAdobeindesign } from 'react-icons/si'



function About () {

  const [ extraAboutOpen, setExtraAboutOpen ] = React.useState(false)

  const handleOpenExtraAbout = () => {
    setExtraAboutOpen(!extraAboutOpen)
  }

  const handleCloseExtraAbout = () => {
    setExtraAboutOpen(!extraAboutOpen)
    setShowGames(false)
    setShowMusic(false)
    setShowCurrentlyReading(false)
    setShowCurrentlyLearning(false)
  }

  //extra about section state toggles
  const [ showMusic, setShowMusic ] = React.useState(false)
  const [ showGames, setShowGames ] = React.useState(false)
  const [ showCurrentlyReading, setShowCurrentlyReading ] = React.useState(false)
  const [ showCurrentlyLearning, setShowCurrentlyLearning ] = React.useState(false)


  const handleShowGames = () => {
    setShowGames(!showGames)
  }

  const handleShowMusic = () => {
    setShowMusic(!showMusic)
  }

  const handleShowCurrentlyReading = () => {
    setShowCurrentlyReading(!showCurrentlyReading)
  }
  
  const handleShowCurrentlyLearning = () => {
    setShowCurrentlyLearning(!showCurrentlyLearning)
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
            <button onClick={handleOpenExtraAbout} id="contact-button-2" className="more-about-button">More</button>
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
    <div className="more-about-div">
      <div>
        <h2 id="about-card-title-black">More about me</h2>
        
        <div className="more-about-inner-div">

          { !showMusic && !showGames && !showCurrentlyLearning && !showCurrentlyReading &&
            <button className="more-about-div-button-music" onClick={handleShowMusic}><div id="button-text"> </div></button>}
          { showMusic && 
            <div className="more-about-text-div">
              <h2 id="more-about-card-title-black">Instruments I play</h2>
              <div className="inner-about">
                <br></br>
                <br></br>
                <p>Guitar - Fairly well</p>
                <p>Drums - Badly, but with confidence</p>
                <br></br>
                <button className="more-about-div-button" onClick={handleShowMusic}>x</button>
              </div>
            </div>
          }

          { !showMusic && !showGames && !showCurrentlyLearning && !showCurrentlyReading && 
          <button className="more-about-div-button-games" onClick={handleShowGames}> <div id="button-text"></div></button>}
          { showGames && 
            <div className="more-about-text-div">
              <h2 id="more-about-card-title-black">Favourite Vintage Games</h2>
              <div className="inner-about">
                <p>Analog: Mensch Ärgere Dich Nicht</p>
                <p><a id="external-link" href="https://en.wikipedia.org/wiki/Mensch_%C3%A4rgere_Dich_nicht" target="blank">{' =>  Read about it'}</a></p>
                <p><a id="external-link" href="https://en.wikipedia.org/wiki/Bomberman_Online" target="blank">Digital: Bomberman</a></p>
                <p><a id="external-link" href="https://stadia.google.com/games/super-bomberman-r-online" target="blank">{' => Play it online'}</a></p>
                <button className="more-about-div-button" onClick={handleShowGames}>x</button>
              </div>
            </div>
          }

          { !showMusic && !showGames && !showCurrentlyLearning && !showCurrentlyReading && 
            <button className="more-about-div-button-reading" onClick={handleShowCurrentlyReading}><div id="button-text"></div></button>}
          { showCurrentlyReading && 
            <div className="more-about-text-div">
              <h2 id="more-about-card-title-black">Currently Reading</h2>
              <div className="inner-about">
                <br></br>
                <p><a id="external-link" href="https://www.amazon.co.uk/Overstory-Shortlisted-Booker-Prize-2018/dp/1784708240" target="blank">The Overstory - Richard Powers</a></p>
                <p><a id="external-link" href="https://www.penguinrandomhouse.com/books/612693/death-in-her-hands-by-ottessa-moshfegh/" target="blank"> Death in Her Hands - Ottessa Moshfegh </a> </p>
                <p><a id="external-link" href="https://www.penguin.co.uk/books/178/178533/tubes/9780141049090.html" target="blank"> Tubes - Andrew Blum </a> </p>
                <button className="more-about-div-button" onClick={handleShowCurrentlyReading}>x</button>
              </div>
            </div>
          }

          { !showMusic && !showGames && !showCurrentlyLearning && !showCurrentlyReading && 
          <button className="more-about-div-button-learning" onClick={handleShowCurrentlyLearning}><div id="button-text"> </div></button>}
          { showCurrentlyLearning && 
            <div className="more-about-text-div">
              <h2 id="more-about-card-title-black">Currently Learning</h2>
              <div className="inner-about">
                <br></br>
                <br></br>
                <p>Next.js</p>
                <p>Web GL</p>
                <br></br>
                <button className="more-about-div-button" onClick={handleShowCurrentlyLearning}>x</button>
              </div>
            </div>
          }
          <button onClick={handleCloseExtraAbout} id="less-button" className="more-about-button">Less</button>
        </div>
      </div>     
    </div>
  </div>
</section>            
      }
    </>
  )
}

export default About