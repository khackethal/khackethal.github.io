import React from 'react'
import Carousel from 'react-elastic-carousel'


function Projects() { 

  const projects = [ 
    { id: 1, title: 'Tripbook', image: 'https://s6.gifyu.com/images/tripbook_single.gif', header: 'Solo project, 8 days',
      description1: 'I’ve created an app that let’s users upload and geotag their favourite trips they have taken, and create “travel wish lists” of where they want to go next. My main priorities were user experience and flow within the website, creating a complete social network with all pages linked and connected exactly as they should be, and a user being able to seamlessly navigate between all content.',
      description2: 'The Backend was written in Python using a SQL Database, the Frontend is a React app that uses both data from the SQL Backend and an external API (mapbox). The app was styled using pure CSS rather than any frameworks.', 
      site: 'https://tripbook.netlify.app/' , github: 'https://github.com/khackethal/project-4-client' },
    { id: 2, title: 'MemoryMap' , image: 'https://s6.gifyu.com/images/mmrecording.gif', header: 'Group project 3 ppl - 1 week',
      description1: 'We chose to create an app that lets users upload their favourite memories, tagging them on a map, creating an alternative travel guide. Our Frontend was built using React, and the Backend using Express, Mongoose and MongoDB.',
      description2: 'I was responsible for setting up the repository on GitHub, and the overall file structure for both Frontend and Backend. I then wrote the logic for displaying an index page, a second version of the index integrating mapbox, the single memory display page, the edit and remove functions for memories as well as the add and remove functions for comments. In the backend I worked on the comment controller, and kept all models updated.',
      site: 'https://memorymap.netlify.app' , github: 'https://github.com/khackethal/project-3-client' }, 
    { id: 3, title: 'Crystal Crypto' , image: 'https://s6.gifyu.com/images/Screen-Recording-2021-07-13-at-17.12.14.gif', header: 'Group project 2ppl - 1 week',
      description1: 'Our project brief was to pick a public API and build a useful Frontend React app displaying the data. We chose to work with a crypto currency API that tracks and shows the performance of the current top 100 crypto currencies on the market.',
      description2: 'I worked on integrating the API data to show on the index and single pages, and as a little bonus because we still had time in the end I added a ‘Crystal Ball Function” (hence the website name) which calculates the currency a user should invest in based on certain numbers they are asked to input. The same user input will still generate a different currency result each time.',
      site: 'https://crystal-crypto-project.netlify.app/' , github: 'https://github.com/khackethal/sei-project-2' },
    { id: 4, title: 'PacMan' , image: 'https://s6.gifyu.com/images/Screen-Recording-2021-07-13-at-17.16.07.gif', header: 'Solo project - 1 week',
      description1: 'I love PacMan, so when we got the brief to pick one classic game and recreate it using purely JavaScript the decision was easy. I wanted to make it look as close to the original Arcade Game as possible.',
      site: 'https://khackethal.github.io/project-1/' , github: 'https://github.com/khackethal/project-1' },
    { id: 5, title: 'SpaceLab' , image: 'https://s6.gifyu.com/images/Screen-Recording-2021-07-13-at-17.23.39.gif', header: 'Ongoing Side Project, Goup of several UX Designers, Data Scientists and Software Engineers',
      description1: 'Ongoing side project, working with a great team of Data Scientists and UX Designers. Our aim is to create a website that uses a new algorithm developed by the Data Scientists to analyse data from the TESS and KEPLER telescopes to discover and map new exoplanets. ',
      site: 'http://spacelab.space/' , github: 'https://github.com/spacelabdev/spacelab-react' }
  ]


  return (
    
    <section className="projects-section" id="projects">
      <h1 id="section-header" >Projects</h1>
      <div className="carousel-div">
        <Carousel>
          {projects.map(project => 
            <div key={project.id}>
              <div>
                <div className="card-div">
                  <div id="image-div">
                    <img id="inner-image" width="850px" src={project.image} alt={project.title}/>
                    
                  </div>
                  <div id="description-div">
                    <div id="inner-description-div">
                      <h1 id="card-title">{project.title} </h1>
                      <h3 id="card-subtitle">{project.header}</h3>
                      <p>{project.description1}</p>
                      <p>{project.description2} </p>
                    </div>
                    <div className="button-div">
                      <button id="contact-button-2"><a className="card-link" target="blank" href={project.site}>Go to site</a></button>
                      <br/>
                      <button id="contact-button-2"><a className="card-link"  target="blank" href={project.github}>Go to GitHub</a></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </section>
  )
}

export default Projects


