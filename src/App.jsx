import Navbar from './components/Navbar'
import Mobnav from './components/Mobnav'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer' 
import Effects from './Effects'   

import './styles.css'


function App() {
  return (
    <>
    <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
        <Mobnav />
      </main>
      <Footer />
      <Effects />
    </>
  )
}

export default App
