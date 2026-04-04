import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppFloat() {
    const [isOpen, setIsOpen] = useState(false)
    const phoneNumber = '917204127613' // +91 7204127613
    const defaultMessage = 'Hello! I\'m interested in learning more about your services.'

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
        window.open(whatsappUrl, '_blank')
        setIsOpen(false)
    }

    return (
        <>
            {/* Floating Chat Bubble */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-40 animate-slideUp">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-xs border border-gray-100">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="text-2xl">💬</div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">Need Help?</p>
                                <p className="text-xs text-gray-600 mt-1">Chat with us on WhatsApp</p>
                            </div>
                        </div>

                        {/* Animated Thinking Text */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 mb-4">
                            <p className="text-xs text-gray-700 leading-relaxed">
                                We typically respond within <span className="font-semibold text-green-600">minutes</span>
                            </p>
                            <div className="flex gap-1 mt-2">
                                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                            </div>
                        </div>

                        <button
                            onClick={handleWhatsAppClick}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition duration-300 flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} />
                            Start Chat
                        </button>
                    </div>

                    {/* Pointer Arrow */}
                    <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-2xl rounded-full p-4 hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
                aria-label="WhatsApp Chat"
            >
                <MessageCircle size={28} />
                
                {/* Animated Ripple Effect */}
                <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
            </button>

            {/* Close Button (visible when chat is open) */}
            {isOpen && (
                <button
                    onClick={() => setIsOpen(false)}
                    className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white shadow-2xl rounded-full p-4 hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
                    aria-label="Close Chat"
                >
                    <X size={28} />
                </button>
            )}
        </>
    )
}
