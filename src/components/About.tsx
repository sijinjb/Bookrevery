import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="-mt-10 lg: text-center lg:text-left">
  {/* Tag */}
  <p className="text-sm tracking-widest text-primary-600 font-semibold mb-3">
    ABOUT US
  </p>

  {/* Heading */}
  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
    Why Bookrevery?
  </h2>

  {/* Subheading */}
  <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-4">
    India compliance is complex. We make it simple.
  </p>

  {/* Description */}
  <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
    Foreign companies face a dense web of Indian regulations — GST, TDS,
    Companies Act, FEMA, RBI. One missed deadline means penalties.
    Bookrevery is your full-stack compliance partner on the ground.
  </p>

  {/* Features */}
  <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-xl mx-auto lg:mx-0">
    {[
      "Expert Accounting Professionals",
      "Multi-country Tax Expertise",
      "Cost-Effective Solutions",
      "Quick Turnaround Time",
      "Dedicated Account Managers",
      "Latest Financial Technology",
    ].map((feature, index) => (
      <div key={index} className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
        <span className="text-gray-700 text-sm">{feature}</span>
      </div>
    ))}
  </div>

  {/* Button */}
  <div className="flex justify-center lg:justify-start">
    <button className="bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-700 transition">
      Know More About Us
    </button>
  </div>
</div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 border-2 border-primary-200">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">
                    Japan-Specialist Team

                  </h3>
                  <p className="text-gray-600">
                    We have deep experience working with Japanese companies entering India
                    — understanding the cultural, communication and reporting standards that
                    Japanese parent companies expect.                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-secondary-600 mb-2">
                    Multi-Country Experience
                  </h3>
                  <p className="text-gray-600">
                    From US subsidiaries to European holding structures, we understand how
                    foreign parent companies need Indian financials presented for
                    consolidation purposes.                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">
                    Zero Missed Deadlines
                  </h3>
                  <p className="text-gray-600">
                    India's compliance calendar is relentless — GST on the 20th, TDS on the 7th,
                    advance tax quarterly, ROC annually. We track every deadline for every
                    client, proactively                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">
                    Data Confidentiality
                  </h3>
                  <p className="text-gray-600">
                    NDA signed before we access any data. Secure file transfer protocols. Your
                    parent company's financial data never leaves a controlled, auditable
                    environment                </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">
                    English + Cross-Culture Reports
                  </h3>
                  <p className="text-gray-600">
                    We deliver MIS reports in English formatted for easy consolidation into your
                    parent company's accounting system — whether it's SAP, Oracle or a
                    simple Excel template.                 </p>
                </div>


              </div>

            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
  )
}
