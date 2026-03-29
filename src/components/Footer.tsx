import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Bookrevery
            </h1>
            <p className="text-gray-400 leading-relaxed">
              India compliance and accounting for
              foreign companies. ICAI-qualified.
              Japan specialist. Serving US, UK,
              Germany, Singapore, Australia and
              UAE clients            </p>
            <div className="flex gap-4 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Blog', 'Contact Us'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Company Registration',
                'GST & Returns',
                'TDS Compliance',
                'ROC Filings',
                'Payroll & PF/ESI',
                'Transfer Pricing & FEMA',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary-400 transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  Banglore, India
                  <br />
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400" />
                <a href="tel:917304842523" className="text-gray-400 hover:text-primary-400">
                  +91-9066-231-292
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400" />
                <a href="mailto:info@Bookrevery.in" className="text-gray-400 hover:text-primary-400">
                  info@Bookrevery.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-gray-400 text-sm">
            © 2025 Bookrevery. All rights reserved.
          </p>
          <div className="flex gap-6 md:justify-end text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Compliance */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-xs">
          <p>
            All information provided on this website is for general informational purposes only.
            Please consult with a professional before making any financial decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
