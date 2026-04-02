import { Zap, Smartphone, TrendingUp, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Get your website live in 7-14 days, not months',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Optimized',
      description: 'Perfectly responsive on all devices and screen sizes',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'High Converting Design',
      description: 'Built to turn visitors into paying customers',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Affordable Pricing',
      description: 'Premium quality at prices that fit your budget',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We deliver exceptional value for ambitious businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-400 hover:scale-105 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mb-6">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
