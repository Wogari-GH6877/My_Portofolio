import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Experience from './section/Experience'
import Testimonials from './section/Testimonials'
import Contacts from './section/Contacts'
import { Footer } from './layout/Footer'
function App() {
  return (
    <div className='min-h-screen text-xl overflow-x-hidden '>
      <Navbar/>

      <main>

        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contacts/>
        
      </main>
      <Footer/>
    </div>
  )
}

export default App