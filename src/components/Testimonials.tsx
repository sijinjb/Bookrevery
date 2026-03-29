import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Hiroshi T.',
    position: 'CFO, Japanese Manufacturing Co. — Pune, India',
    // location: 'Australia',
    image: '👨‍💼',
    rating: 5,
    text: "Bookrevery handled our entire India subsidiary setup — from MCA registration to GST and TDS. Within 6 weeks we were fully operationaland compliant. The teams knowledge of Japanese reportingexpectations was impressive"
  },
  {
    name: 'Mark S.',
    position: 'Operations Director, US Tech Company — Bengaluru, India',
    // location: 'India',
    image: '👨‍💼',
    rating: 5,
    text: "We had been struggling with our India GST and TDS compliance fortwo years with a local firm. Bookrevery took over and cleaned up 18 months of backlog in 60 days. Now everything runs on time, every month."
  },
  {
    name: 'Priya N',
    position: 'India Country Head, UK Financial Services — Mumbai, India',
    // location: 'USA',
    image: '👩‍💼',
    rating: 5,
    text:"The monthly MIS reports Bookrevery provides are exactly what our UK parent needs for consolidation. Clean, consistent and always delivered by the 5th of the month. Exactly what we needed."
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold">Client Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Real feedback from businesses we've helped succeed globally
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              {/* Rating */}
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent-500 text-accent-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-primary-600 font-semibold">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
