import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Patel',
    position: 'Director, DataDevice Pty Ltd',
    location: 'Australia',
    image: '👨‍💼',
    rating: 5,
    text: 'Big thanks to Riya for her outstanding work on our Australian company. Her expertise in Xero advisory and accounting services has truly transformed our financial processes. We are impressed by her dedication and efficiency.',
  },
  {
    name: 'Satish Shenoy',
    position: 'Director, Essen Engineers',
    location: 'India',
    image: '👨‍💼',
    rating: 5,
    text: 'Riya handled our GST filing, income tax filing, and accounting with exceptional expertise and professionalism. Her proficiency in GST and income tax procedures significantly impacted our business. Highly recommended!',
  },
  {
    name: 'Priya Sharma',
    position: 'Founder, Tech Innovations',
    location: 'USA',
    image: '👩‍💼',
    rating: 5,
    text: 'Outstanding service and attention to detail. MapMyFinance has been instrumental in helping us navigate complex tax requirements across multiple jurisdictions. Professional, responsive, and highly competent team.',
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '15+', label: 'Years Experience' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">
                {stat.number}
              </div>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
