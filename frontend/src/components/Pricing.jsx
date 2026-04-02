import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹3,999',
      description: 'Perfect for small businesses getting started',
      features: [
        '5 Page Website',
        'Mobile Responsive',
        'Basic SEO Setup',
        'Contact Form',
        '1 Month Support',
      ],
      popular: false,
    },
    {
      name: 'Standard',
      price: '₹7,999',
      description: 'Most popular for growing businesses',
      features: [
        '10 Page Website',
        'Advanced Design',
        'SEO Optimized',
        'WhatsApp Integration',
        'Google Analytics',
        '3 Months Support',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹14,999',
      description: 'Complete solution for serious brands',
      features: [
        'Unlimited Pages',
        'Custom Features',
        'E-commerce Ready',
        'Advanced SEO',
        'Social Integration',
        'Priority Support',
        '6 Months Maintenance',
      ],
      popular: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-400 hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-400 shadow-2xl shadow-cyan-500/20'
                  : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-400'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-500 dark:text-gray-500 text-sm">one-time payment</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-400 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105'
                    : 'bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
