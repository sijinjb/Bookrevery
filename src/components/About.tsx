import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary-600 font-semibold">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              India's Leading Financial Services Firm
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              MapMyFinance, based in Mumbai, is a trusted name in providing comprehensive accounting, taxation, and incorporation services to clients in Australia and the USA.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our experienced team of financial experts is committed to delivering high-quality, customized solutions at cost-effective prices. We understand the complexities of international business and provide tailored services to meet your unique needs.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                'Expert Accounting Professionals',
                'Multi-country Tax Expertise',
                'Cost-Effective Solutions',
                'Quick Turnaround Time',
                'Dedicated Account Managers',
                'Latest Financial Technology',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-secondary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              Know More About Us
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 border-2 border-primary-200">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    To provide world-class financial services that empower businesses to grow globally with confidence and transparency.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-secondary-600 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    To be the most trusted financial partner for international businesses, known for reliability, expertise, and customer-centric solutions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">
                    Our Values
                  </h3>
                  <p className="text-gray-600">
                    Integrity, Excellence, Customer Focus, and Innovation drive everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
