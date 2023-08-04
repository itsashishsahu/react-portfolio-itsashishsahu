import './portfolio.css'
import data from './data';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import { useState } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
 
  const categories = data.map((item)=>item.category);
  const uniqueCategories=["all", ...new Set(categories)];
  
  const filterProjectHandler=(category)=>{
      if(category==="all"){
        setProjects(data);
        return;
      }

      const filterProjects=data.filter((item)=>item.category===category);

        setProjects(filterProjects);
  }

  return (
    <section id="portfolio" >
      <h2>Recent Projects</h2>
      <p>Check out some of the superb projects I recently worked on. Use the buttons to toggle the different categories</p>
      <div className="container portfolio-container">
        <ProjectsCategories categories={uniqueCategories} filterProjectHandler={filterProjectHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio;
