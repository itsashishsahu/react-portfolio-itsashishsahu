import "./about.css";
import AboutImage from "../../assets/about.jpg";
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi';
import Card from "../../components/Card";
import {data, skills} from './data';

const About = () => {
  return (
    <section id="about" data-aos='fade-in'>
      <div className="container about-container">
        <div className="about-left">
          <div className="about-portrait" data-aos='fade-right'>
            <img src={AboutImage} className="img" alt="About Image" />
          </div>
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <div className="about-cards">
            {data.map((item)=>(
            <Card key={item.id} className="about-card">
              <span className="about-card-icon">{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>))}
          </div>
          <p>
            Hi there! I'm <b> Ashish Sahu </b>, a passionate frontend developer with strong skills in <b>ReactJS</b>. I graduated from the <b style={{color: "var(--color-primary)"}}>Rustamji Institute of Technology (RJIT) Tekanpur </b>. I have a deep understanding of <b>modern web technologies, including HTML, CSS, and JavaScript, Reactjs</b>.
          </p>
          <p>I'm particularly proficient in utilizing the <b> power of ReactJS </b> to develop responsive and interactive web applications. Through my projects, I've gained hands-on experience in building <b> dynamic user interfaces, optimizing performance, and ensuring cross-browser compatibility.</b></p>
          <p> In my free time, you can find me exploring the outdoors, cooking different cuisines, and seeking inspiration from nature's beauty.</p>
          <div className="skills-button" data-aos='zoom-in'>
              {
                skills.map((skill)=><button className="skill-button" key={skill.id}>
                  <span className="skill-icon" style={skill.style}>{skill.icon}</span>
                  <h5>{skill.title}</h5>
                  </button>)
              }
          </div>
          <a href={CV} download className="btn primary">Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  );
};

export default About;
