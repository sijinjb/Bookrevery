import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Hiroshi T.',
    position: 'CFO, Japanese Manufacturing Co. — Pune, India',
    location: 'Australia',
    image: '👨‍💼',
    rating: 5,
    text: "Bookrevery handled our entire India subsidiary setup — from MCA registration to GST and TDS. Within 6 weeks we were fully operationaland compliant. The teams knowledge of Japanese reportingexpectations was impressive"
  },
  {
    name: 'Mark S.',
    position: 'Operations Director, US Tech Company — Bengaluru, India',
    location: 'India',
    image: '👨‍💼',
    rating: 5,
    text: "We had been struggling with our India GST and TDS compliance fortwo years with a local firm. Bookrevery took over and cleaned up 18 months of backlog in 60 days. Now everything runs on time, every month."
  },
  {
    name: 'Priya N',
    position: 'India Country Head, UK Financial Services — Mumbai, India',
    location: 'USA',
    image: '👩‍💼',
    rating: 5,
    text:"The monthly MIS reports Bookrevery provides are exactly what our UK parent needs for consolidation. Clean, consistent and always delivered by the 5th of the month. Exactly what we needed."
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-semibold text-sm tracking-widest uppercase mb-4">Client Testimonials</span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Trusted by Global Leaders
          </h2>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
            Real stories from businesses we've helped succeed across continents
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>

              {/* Decorative Background Elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-100 rounded-full opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary-100 rounded-full opacity-20 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative p-8 lg:p-10">
                {/* Quote Icon */}
                <div className="mb-6 inline-block">
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-3 rounded-full">
                    <Quote size={24} className="text-primary-600" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent-400 text-accent-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 leading-relaxed mb-8 text-lg" style={{ fontFamily: 'Lora, serif' }}>
                  "{testimonial.text}"
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-snug">
                      {testimonial.position}
                    </p>
                    <p className="text-xs font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-sm tracking-widest uppercase">
            <span className="inline-block w-8 h-px bg-gradient-to-r from-transparent to-primary-600 mr-3 align-middle"></span>
            Trusted by industry leaders
            <span className="inline-block w-8 h-px bg-gradient-to-l from-transparent to-primary-600 ml-3 align-middle"></span>
          </p>
        </div>
      </div>
    </section>
  )
}
