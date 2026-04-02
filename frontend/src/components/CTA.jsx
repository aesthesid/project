import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/10 dark:to-blue-950/10 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Let's build your business online
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Ready to take your business to the next level? Get a premium website that converts visitors into customers.
        </p>
        <button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-400 hover:scale-105"
        >
          Contact Us Now
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
