import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center p-12 md:p-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's build your business online.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom website tailored to your business goals
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-gray-300">
              <div className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <div className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-full">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span>No-Risk Approach</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-400 hover:scale-105"
          >
            Contact Us Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Pricing Note */}
          <p className="text-gray-400 mt-6 text-sm">
            Starting from <span className="text-white font-semibold">₹3,999</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
