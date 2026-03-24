import { ArrowRight, ChevronRight, BarChart3, PieChart, TrendingUp, DollarSign, CheckCircle, Calculator } from 'lucide-react'

export default function Hero() {
  return (
    <div
      id="home"
      className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-secondary-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slideUp">
            <div className="inline-block">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨"Imagine What Your Business Can Become, We Handle The Books"
              </span>
            </div>
            
            <div className="space-y-2">
             
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Complete Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Solution</span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Expert accounting, taxation, and incorporation services for businesses in Australia and the USA. Cost-effective solutions with world-class service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
                Schedule Consultation
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition">
                Learn More
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2">
                <ChevronRight size={20} className="text-secondary-600" />
                <span className="text-gray-700">FREE Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={20} className="text-secondary-600" />
                <span className="text-gray-700">Quick Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={20} className="text-secondary-600" />
                <span className="text-gray-700">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={20} className="text-secondary-600" />
                <span className="text-gray-700">Best Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            {/* Background Gradient Blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl blur-3xl opacity-30"></div>
            
            {/* Main Illustration Container */}
            <div className="relative w-full max-w-sm">
              {/* Center Card */}
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition duration-300 animate-slideUp">
                <div className="space-y-6">
                  {/* Top Row - Charts */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-110 transition">
                      <BarChart3 size={32} className="text-primary-600" />
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-110 transition">
                      <PieChart size={32} className="text-secondary-600" />
                    </div>
                  </div>

                  {/* Middle - Main Text */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-gray-900 font-bold text-lg mb-2">
                      Financial Reports
                    </h3>
                    <p className="text-sm text-gray-600">
                      Real-time analytics and insights
                    </p>
                  </div>

                  {/* Bottom Row - More Icons */}
                  <div className="flex justify-between items-end gap-4">
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-110 transition">
                      <DollarSign size={32} className="text-green-600" />
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-110 transition">
                      <TrendingUp size={32} className="text-orange-600" />
                    </div>
                    <div className="bg-white rounded-2xl p-4 shadow-lg transform hover:scale-110 transition">
                      <CheckCircle size={32} className="text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icon - Top Left */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg transform hover:scale-110 transition animate-bounce" style={{animationDelay: '0s'}}>
                <Calculator size={32} className="text-primary-600" />
              </div>

              {/* Floating Badge - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg transform hover:scale-110 transition">
                <div className="flex items-center gap-2">
                  <CheckCircle size={24} className="text-secondary-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
