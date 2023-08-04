import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';

const socials=[
    {id:1, link: 'https://www.instagram.com/j.shivgan/', icon: <AiOutlineInstagram/>},
    {id:2, link: 'https://www.linkedin.com/in/jiteshshivgan/', icon: <AiOutlineLinkedin/>},
    {id:3, link: 'https://github.com/jiteshshivgan', icon: <AiOutlineGithub/>},
    {id:4, link: 'https://twitter.com/JSHIVGAN', icon: <AiOutlineTwitter/>}
]

const links=[
    {id: 1, link: "#", title: 'Home'},
    {id: 2, link: "#about", title: 'About'},
    {id: 3, link: "#portfolio", title: 'Portfolio'},
    {id: 4, link: "#contact", title: 'Contact'}
]

export {links, socials};