import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GlobalPresence from './components/GlobalPresence'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <GlobalPresence />
      <Services />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
