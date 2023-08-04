import './floating-nav.css';
import data from './data';
import Scrollspy from 'react-scrollspy'
import Nav from './Nav';



const FloatingNav = () => {
  return (
    <ul id='floating-nav'>
        <Scrollspy offset={-400} className='scrollspy' items={['header', 'about', 'portfolio', 'contact']} currentClassName='active'>
          {
            data.map((item)=> <Nav key={item.id} item={item}/>)
          }
        </Scrollspy>
    </ul>
  )
}

export default FloatingNav
