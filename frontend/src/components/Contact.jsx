import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    if (formData.name && formData.email && formData.message) {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Please fill in all fields');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/91XXXXXXXXXX', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <div className="inline-block px-4 py-2 bg-purple-600/10 border border-purple-500/20 rounded-full mb-6">
              <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">Contact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Send us a message.<br />
              We'll reply soon.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-400 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - WhatsApp */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-block p-6 bg-gradient-to-br from-green-600/20 to-green-400/10 rounded-3xl mb-6">
                  <MessageCircle className="w-16 h-16 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Or chat with us on<br />WhatsApp
                </h3>
                <p className="text-gray-400 mb-8">
                  Get instant replies to your questions.
                </p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-400 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
