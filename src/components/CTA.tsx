import { Phone, Mail, Calendar, X } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsFormOpen(false)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to set up or fix your India
            compliance?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Book a free 45−minute consultation. We will assess your current situation,
            identify any compliance gaps and give you a clear action plan — at no
            charge.          </p>

          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 active:scale-95"
          >
            Schedule Free Consultation
          </button>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              value: '+91-7204127613',
              link: 'tel:+91-7204127613',
            },
            {
              icon: Mail,
              title: 'Email Us',
              value: 'info@Bookrevery.in',
              link: 'mailto:info@Bookrevery.in',
            },
            {
              icon: Calendar,
              title: 'Schedule Meeting',
              value: 'Book Your Slot',
              link: '#',
            },
          ].map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={index}
                href={method.link}
                className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl text-center hover:bg-opacity-20 transition transform hover:scale-105"
              >
                <Icon size={40} className="text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">
                  {method.title}
                </h3>
                <p className="text-white opacity-90">{method.value}</p>
              </a>
            )
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      {isFormOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsFormOpen(false)}
        />
      )}

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full transform animate-slideUp"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-8 border-b border-gray-100">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Let's Connect
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  We'll get back to you within 24 hours
                </p>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91-XXXXX-XXXXX"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business..."
                  rows={3}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105 active:scale-95 mt-6"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
