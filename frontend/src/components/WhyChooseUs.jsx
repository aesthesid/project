import { Zap, Smartphone, TrendingUp, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Fast Delivery',
      description: 'Your website live in 3-5 days, not weeks or months',
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'Mobile Optimized',
      description: 'Perfect on every device, from phones to desktops',
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Conversion-Focused Design',
      description: 'Built to turn visitors into paying customers',
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: 'Affordable & Scalable',
      description: 'Premium quality that fits your budget and grows with you',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-black border-y border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why choose orevX?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We deliver results, not just websites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-900 dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0 backdrop-blur-sm rounded-2xl border border-gray-800 dark:border-white/10 hover:border-blue-500/50 transition-all duration-400 hover:scale-105"
            >
              <div className="mb-6 p-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl inline-block group-hover:scale-110 transition-transform duration-400">
                <div className="text-blue-400 dark:text-blue-400">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
