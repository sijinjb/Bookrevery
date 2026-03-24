import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Bookrevery
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition font-medium">
              About Us
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition font-medium">
              Testimonials
            </a>
            <a
              href="tel:917304842523"
              className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition font-semibold"
            >
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center h-10 w-10 text-gray-700 hover:text-primary-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <a href="#home" className="block py-2 text-gray-700 hover:text-primary-600">
              Home
            </a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-primary-600">
              Services
            </a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-primary-600">
              About Us
            </a>
            <a href="#testimonials" className="block py-2 text-gray-700 hover:text-primary-600">
              Testimonials
            </a>
            <a
              href="tel:917304842523"
              className="block mt-4 bg-primary-600 text-white px-6 py-2 rounded-full text-center hover:bg-primary-700 transition"
            >
              Call Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
