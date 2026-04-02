import { Palette, Code, TrendingUp, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'Website Design',
      description: 'Beautiful, modern designs that capture your brand essence and engage your audience.',
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Development',
      description: 'Fast, responsive, and SEO-optimized websites built with the latest technologies.',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'SEO Optimization',
      description: 'Get found on Google. We optimize your site to rank higher and attract more customers.',
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Maintenance',
      description: 'Keep your website running smoothly with regular updates and technical support.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <img
          src="https://images.pexels.com/photos/30547616/pexels-photo-30547616.jpeg?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to establish a powerful online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="mb-6 text-cyan-500 group-hover:scale-110 transition-transform duration-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
