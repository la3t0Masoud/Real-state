import React from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Testimonails from './components/Testimonails.jsx'
import Contact from './components/Contact.jsx'


function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
    </div>
  )
}

export default App
