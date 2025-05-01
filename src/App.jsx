import React from 'react'
import Hero from './section/Hero'
import WorkSection from './section/WorkSection'
import Navbar from './components/Navbar'
import FeaturedCards from './section/FeaturedCards'
import TechStack from './section/TechStack'
import Education from './section/Education'
import Contact from './section/Contact'
import Footer from './section/Footer'
import About from './section/About'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero />
   <About/>
   <TechStack />
   <WorkSection/>
   <Education />
   <FeaturedCards/>
   <Contact />
   <Footer/>
   </>
  )
}

export default App
