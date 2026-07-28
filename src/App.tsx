import './App.css'
import Header from './components/header'
import Home from './components/home'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import Curriculum from './components/curriculum'
import Contacto from './components/contacto'
import LavaBackground from './components/effects/lavaBackground'


function App() {
  

  return (
    <>
    <LavaBackground />
    <Header />
    <main>
      <Home />
      <AboutMe />
      <Projects /> 
      <Curriculum />
      <Contacto />

    </main>
    
    
    </>
  
  )
}

export default App
