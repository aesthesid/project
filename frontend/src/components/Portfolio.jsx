import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Restaurant Website',
      result: 'Increased bookings by 40%',
      image: 'https://images.pexels.com/photos/27305315/pexels-photo-27305315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'Food & Dining',
    },
    {
      title: 'Gym Website',
      result: 'Modern redesign that boosted sign-ups',
      image: 'https://images.unsplash.com/photo-1771586791190-97ed536c54af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzc1MTA2MjAwfDA&ixlib=rb-4.1.0&q=85',
      category: 'Health & Fitness',
    },
    {
      title: 'Clothing Brand Website',
      result: 'Improved conversions by 35%',
      image: 'https://images.pexels.com/photos/32549949/pexels-photo-32549949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      category: 'E-commerce',
    },
  ];

  return (
    <section id="work" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="inline-block px-4 py-2 bg-purple-600/10 border border-purple-500/20 rounded-full mb-4">
              <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Websites we've built.<br />
              Results our clients love.
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-400 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    <p className="text-blue-400 text-sm font-semibold mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      {project.result}
                    </p>
                    <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
