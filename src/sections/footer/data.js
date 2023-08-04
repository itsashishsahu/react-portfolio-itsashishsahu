import {AiOutlineYoutube} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';


const socials=[
    {id:1, link: 'https://www.youtube.com/@itsashishsahu/', icon: <AiOutlineYoutube/>},
    {id:2, link: 'https://www.linkedin.com/in/itsashishsahu/', icon: <AiOutlineLinkedin/>},
    {id:3, link: 'https://github.com/itsashishsahu', icon: <AiOutlineGithub/>},
]

const links=[
    {id: 1, link: "#", title: 'Home'},
    {id: 2, link: "#about", title: 'About'},
    {id: 3, link: "#portfolio", title: 'Portfolio'},
    {id: 4, link: "#contact", title: 'Contact'}
]

export {links, socials};