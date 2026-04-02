import { ArrowRight, Play, Zap, Smartphone, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Particle Effect Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_100%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Websites that drive real growth.</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          We design websites that turn<br />
          visitors into{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            paying customers.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Built for small businesses that want real growth, not just a website.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-400 hover:scale-105 flex items-center gap-2"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('work')}
            className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-400 flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            View Our Work
          </button>
        </div>

        {/* Trust Section */}
        <div className="mt-12">
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">
            Trusted by growing businesses
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white">3-5 Days</div>
                <div className="text-xs text-gray-400">Fast Delivery</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Smartphone className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white">Mobile First</div>
                <div className="text-xs text-gray-400">Always Responsive</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white">Built to Convert</div>
                <div className="text-xs text-gray-400">Results That Matter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
