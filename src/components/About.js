import React from 'react'
// import { SvgIcon } from './Icons'

// const techFrontEnd = ['HTML', 'CSS', 'SASS', 'Bulma', 'JavaScript', 'React', 'Ajax', 'Axios', 'Netlify', 'Jest']
// const techBackEnd = ['Python', 'Node.js', 'MongoDB', 'Mongoose', 'Express', 'Django', 'SQL', 'PostgreSQL', 'TablePlus', 'REST APIs', 'Heroku' ]
// const techPackage = ['Yarn', 'npm', 'Pip', 'Pipenv']
// const versionControl = ['Git', 'Github']
// const design = ['Indesign', 'Photoshop']


function About () {

  return (
    <section className="about-section" id="about">
      <h1  id="about-section-header">About</h1>

      <div className="inner-about-section">
        <div className="left-side-about">
          <img  id="about-portrait" width="100px" src="https://i.imgur.com/Jn4jAQC.png" alt="linkedin logo"/>
          <div className="about-text-div">
          My very first job was at an e-commerce startup, <br></br> where I was involved in shoot production but also very close to the software engineering team, which helped me to develop a good understanding of the Frontend and Backend setup of the website. <p>That job started my interest in coding, leading to several courses taken in my spare time, and finally the decision to switch to Software Engineering full time.
          I’m curious to learn, I love a good puzzle and finding solutions. </p> <p>I have great experience working in and managing teams, and an excellent understanding of other job roles and the lifecycle of delivering a product to clients. 
              <br></br>I’m currently looking for a position as Junior Software Engineer, ideally working with React. </p>
          </div>
        </div>

        <div className="right-side-about">
          <div><h2 id="about-card-title">Tech Skills</h2>
            <div>
              <p>FrontEnd</p>
              <div> 
                {/* { techFrontEnd.map(icon => (
                  <div key={icon}>
                    <SvgIcon/>
                  </div>
                ))} */}
              </div>

              <div>
                <p>Backend</p>
                <div> 
                  {/* { techBackEnd.map(icon => (
                    <div key={icon}>
                      <SvgIcon/>
                    </div>
                  ))} */}
                </div>
              </div>

              <div>
                <p>Package</p>
                <div> 
                  {/* { techPackage.map(icon => (
                    <div key={icon}>
                      <SvgIcon/>
                    </div>
                  ))} */}
                </div>
              </div>

              <div>
                <p>Version Control</p>
                <div> 
                  {/* { versionControl.map(icon => (
                    <div key={icon}>
                      <SvgIcon/>
                    </div>
                  ))} */}
                </div>
              </div>

              <div>
                <p>Design</p>
                <div> 
                  {/* { design.map(icon => (
                    <div key={icon}>
                      <SvgIcon/>
                    </div>
                  ))} */}
                </div>
              </div>

            </div>
          </div>
          <div>About text</div>
        </div>
      </div>
    </section>
  )
}

export default About