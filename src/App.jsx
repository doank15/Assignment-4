import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App