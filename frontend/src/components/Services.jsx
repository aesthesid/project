import { Palette, Code, TrendingUp, Wrench, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Website Design',
      description: 'Stunning, modern designs that capture attention.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Fast, secure, scalable websites built to perform.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Get found online and rank higher on Google.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Website Maintenance',
      description: 'We keep your site fast, secure, and up-to-date.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-blue-600/10 to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full mb-4">
            <span className="text-sm text-blue-400 font-semibold uppercase tracking-wider">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything your website<br />needs to succeed.
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="mb-6 p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl inline-block group-hover:scale-110 transition-transform duration-400">
                <div className="text-blue-400">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
