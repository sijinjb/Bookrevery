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
              WHY BOOKREVERY ?

            </h2>

            <p className="text-gray-600 text-xl leading-relaxed mb-6">
              India compliance is complex. We
              make it simple.            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Foreign companies face a dense web of Indian regulations — GST, TDS,
              Companies Act, FEMA, RBI. One missed deadline means penalties.
              Bookrevery is your full-stack compliance team on the ground            </p>

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
<section className="bg-gray-50 py-20 mt-20 px-4">
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <p className="text-orange-500 tracking-widest text-sm font-semibold">
      HOW WE WORK
    </p>

    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
      From India entry decision to <br className="hidden md:block" />
      fully compliant operations
    </h2>
  </div>

  {/* Steps */}
  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

    {/* Card */}
    {[
      {
        no: "01",
        title: "Discovery Call",
        desc: "We understand your business model, India entry structure and parent company requirements in a free 45-minute call.",
      },
      {
        no: "02",
        title: "India Entry Plan",
        desc: "We recommend the right legal structure, compliance calendar and timeline tailored to your needs.",
      },
      {
        no: "03",
        title: "Registration & Setup",
        desc: "Complete MCA, PAN, TAN, GST and regulatory registrations handled seamlessly.",
      },
      {
        no: "04",
        title: "Ongoing Compliance",
        desc: "Monthly bookkeeping, GST, TDS, payroll and ROC filings — fully managed.",
      },
      {
        no: "05",
        title: "Parent Reporting",
        desc: "Clear MIS reports structured for easy consolidation with your parent company.",
      },
    ].map((step, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
      >
        {/* Circle */}
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-500 font-bold text-lg mb-6">
          {step.no}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          {step.desc}
        </p>
      </div>
    ))}

  </div>
</section>
    </section>


  )
}
