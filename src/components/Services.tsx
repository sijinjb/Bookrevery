import {
  BarChart3,
  FileText,
  Building2,
  DollarSign,
  Calculator,
 
} from 'lucide-react'

const services = [
  {
    icon: Calculator,
    title: 'Monthly Bookkeeping',
    description: 'Complete bookkeeping and accounting services with Xero expertise for Australian companies.',
  },
  {
    icon: FileText,
    title: 'GST & Tax Compliance',
    description: 'GST filing, income tax filing, and comprehensive tax planning for optimal results.',
  },
  {
    icon: Building2,
    title: 'Company Registration',
    description: 'Easy company incorporation and business structure setup in Australia and USA.',
  },
  {
    icon: DollarSign,
    title: 'Financial Advisory',
    description: 'Strategic financial planning and advisory services to grow your business.',
  },
  {
    icon: FileText,
    title: 'ROC & FEMA Filings',
    description: 'Annual returns, FEMA remittances, RBI reporting.',
  },
  {
    icon: BarChart3,
    title: 'Payroll & HR Compliance',
    description: 'PF, ESI, PT, TDS on salary.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            From accounting to taxation, we offer a complete range of financial services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-300 hover:shadow-xl transition transform hover:scale-105 hover:bg-primary-50"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition">
                  <Icon size={28} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition">
                  Learn more →
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
