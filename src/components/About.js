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
      <div className="left-side-about">
        <div>About Section</div>
        <div>About text</div>
      </div>

      <div className="right-side-about">
        <div><h2>Tech Skills</h2>
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
    </section>
  )
}

export default About