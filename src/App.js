import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import About from "./sections/about/About"
import Services from "./sections/services/Services"
import Testimonials from "./sections/testimonials/Testimonials"
import FAQs from "./sections/faqs/FAQs"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import FloatingNav from "./sections/floating-nav/FloatingNav"
import Portfolio from "./sections/portfolio/Portfolio"
import Modal from "./components/Modal"
import Theme from "./theme/Theme"
import { useThemeContext } from "./context/theme-context"



function App() {
  
  const {themeState} = useThemeContext();

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar/>
        <Header/>
        <About/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        <FloatingNav/>
        <Theme/>
    </main>
  )
}

export default App
