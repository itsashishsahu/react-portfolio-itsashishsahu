import React from 'react'
import Card from '../../components/Card';
import './portfolio.css'

const Project = ({project}) => {
  const {tech}=project;
  console.log("Tech", tech);
  return (
    <Card className="portfolio-project light">
        <div className="portfolio-project-image">
            <img src={project.image} alt="Portfolio Projects" className='img' />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="tech-skills" data-aos='zoom-in'>
              {
                tech.map((skill)=><button className="tech-skill-button" key={skill.id}>
                  <span className="skill-icon" style={skill.style}>{skill.icon}</span>
                  <h5>{skill.title}</h5>
                  </button>)
              }
          </div>
        <div className="portfolio-project-cta">
            <a href={project.demo} className='btn white' target='_blank' rel='noopener noreferrer'>Demo</a>
            <a href={project.github} className='btn sm primary' target='_blank' rel='noopener noreferrer'>Github</a>
        </div>
    </Card>
  )
}

export default Project
