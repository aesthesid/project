const About = () => {
  return (
    <section id="about" className="py-24 bg-black dark:bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center">
          {/* Section Badge */}
          <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-sm text-blue-400 font-semibold uppercase tracking-wider">About orevX</span>
          </div>

          {/* Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-8 leading-tight">
            At orevX Technologies, we help businesses grow online with modern,{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              high-performing websites
            </span>{' '}
            designed to convert visitors into customers.
          </h2>

          <p className="text-xl text-gray-400 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites — we create digital experiences that drive real business results. 
            Fast, beautiful, and built to grow with you.
          </p>
        </div>

        {/* Optional Stats or Image */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-400 dark:text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center p-8 bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-400 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center p-8 bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              3-5 Days
            </div>
            <div className="text-gray-400 dark:text-gray-400">Average Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
