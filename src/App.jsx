import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Cursor from './components/Cursor'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TechStackPage from './pages/TechStackPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import PageTransition from './components/PageTransition'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <Cursor />
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tech" element={<TechStackPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  )
}

export default App
