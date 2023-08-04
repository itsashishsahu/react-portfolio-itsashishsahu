import './header.css'
import HeaderImage from '../../assets/header.jpg';
import data from './data';
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'
import { useEffect } from 'react';

const Header = () => {

  useEffect(()=>{
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header-container">
        <div className='header-profile' data-aos='flip-up'>
          <img src={HeaderImage} alt='Header potrait' className='img'></img>
        </div>
        <h3 data-aos='fade-up' >Jitesh Kumar Shivgan</h3>
        <p data-aos='fade-up' style={{fontFamily: 'cursive'}}>A very enthusiastic, proficient <b> Frontend/ReactJS developer </b> who hike mountains during vacations</p>
        <div className="header-cta" data-aos='fade-up'>
          <a href='#contact' className='btn primary'>Let's Talk</a>
          <a href='#portfolio' className='btn light'>My Work</a>
        </div>
        <div className="header-socials">
          {
          data.map((item)=><a href={item.link} key={item.id} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
