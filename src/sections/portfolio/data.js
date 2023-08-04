import Image1 from '../../assets/project1.jpg'
import Image2 from '../../assets/project2.jpg'
import Image3 from '../../assets/project3.jpg'
import Image4 from '../../assets/project4.jpg'
import Image5 from '../../assets/project5.jpg'
import {RiReactjsLine} from 'react-icons/ri';
import {SiJavascript} from 'react-icons/si'
import {DiHtml5} from 'react-icons/di'
import {FaCss3} from 'react-icons/fa'
import {BsGit} from 'react-icons/bs'
import {SiFirebase} from 'react-icons/si'
import {TbBrandRedux} from 'react-icons/tb'
import {TbBrandNpm} from 'react-icons/tb'
import {IoLogoSass} from 'react-icons/io'

const data=[
    {
        id: 1,
        category: 'ReactJS',
        image: Image1,
        title: "LinkedIn Clone",
        desc: "Built a linkedin-clone with google authenticated login, home page with create a post feature using REACTJS, REDUX, JSX, Styled-Component, Firebase DB",
        demo: "https://linkedin-clone-react-app1.web.app/",
        github: "https://github.com/jiteshshivgan/Linkedin-Clone",
        tech: [
            {id:1, icon: <RiReactjsLine/>, title: 'ReactJS', style: {color: 'rgb(0,221,253)'}},
            {id:2, icon: <SiJavascript/>, title: 'JavaScript', style: {color: 'rgb(255,223,0)'}},
            {id:3, icon: <DiHtml5/>, title: 'HTML5', style: {color: 'rgb(229,76,33)'}},
            {id:4, icon: <FaCss3/>, title: 'CSS3', style: {color: 'rgb(38,77,228)'}},
            {id:6, icon: <SiFirebase/>, title: 'Firebase', style: {color: 'rgb(255,203,45)'}},
            {id:7, icon: <TbBrandRedux/>, title: 'Redux', style: {color: 'rgb(119,73,189)'}},
            {id:5, icon: <BsGit/>, title: 'Git', style: {color: 'rgb(240,80,51)'}},
            {id:8, icon: <TbBrandNpm/>, title: 'NPM', style: {color: 'rgb(204,53,52)'}},
        ]
    },
    {
        id: 2,
        category: 'ReactJS',
        image: Image2,
        title: "React Portfolio",
        desc: "Built a completely responsive portfolio using ReactJS 18, React Hooks, with theme customization feature, carousels with SwiperJS, Animate on scroll library.",
        demo: "https://jitesh-shivgan.netlify.app/",
        github: "https://github.com/jiteshshivgan/React-Portfolio",
        tech: [
            {id:1, icon: <RiReactjsLine/>, title: 'ReactJS', style: {color: 'rgb(0,221,253)'}},
            {id:2, icon: <SiJavascript/>, title: 'JavaScript', style: {color: 'rgb(255,223,0)'}},
            {id:3, icon: <DiHtml5/>, title: 'HTML5', style: {color: 'rgb(229,76,33)'}},
            {id:4, icon: <FaCss3/>, title: 'CSS3', style: {color: 'rgb(38,77,228)'}},
        ]
    },
    {
        id: 3,
        category: 'Vanilla Javascript',
        image: Image3,
        title: "Receipe Finder Website",
        desc: "The website fetches meals from the free API website themealdb.com. With features such as Auto-suggestion bar, Local web browsers store the favorite dish added using the ADD TO FAVOURITE option, API fetched Recipe Instructions Page using Vanilla Javascript",
        demo: "https://jiteshshivgan.github.io/Receipe-App/",
        github: "https://github.com/jiteshshivgan/Receipe-App",
        tech: [
         
            {id:2, icon: <SiJavascript/>, title: 'JavaScript', style: {color: 'rgb(255,223,0)'}},
            {id:3, icon: <DiHtml5/>, title: 'HTML5', style: {color: 'rgb(229,76,33)'}},
            {id:4, icon: <FaCss3/>, title: 'CSS3', style: {color: 'rgb(38,77,228)'}},
        ]
    },
    {
        id: 4,
        category: 'ReactJS',
        image: Image4,
        title: "MyTravelDrive - ReactJS Tour and Travel Agency Website",
        desc: "MyTravelDrive is an innovative online platform that revolutionizes the way travelers plan and organize their trips. All the components are dynamic functional components with beautifully crafted responsive pages.",
        demo: "https://mytraveldrive.netlify.app/",
        github: "https://github.com/jiteshshivgan/TechBlog-App",
        tech: [
            {id:1, icon: <RiReactjsLine/>, title: 'ReactJS', style: {color: 'rgb(0,221,253)'}},
            {id:2, icon: <SiJavascript/>, title: 'JavaScript', style: {color: 'rgb(255,223,0)'}},
            {id:3, icon: <DiHtml5/>, title: 'HTML5', style: {color: 'rgb(229,76,33)'}},
            {id:4, icon: <FaCss3/>, title: 'CSS3', style: {color: 'rgb(38,77,228)'}},
            {id:5, icon: <BsGit/>, title: 'Git', style: {color: 'rgb(240,80,51)'}},
            {id:8, icon: <TbBrandNpm/>, title: 'NPM', style: {color: 'rgb(204,53,52)'}},
        ]
    },
]


export default data;