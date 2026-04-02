import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Premium Restaurant',
      category: 'Food & Dining',
      image: 'https://images.unsplash.com/photo-1680946496238-5272d3c407fc?w=800&q=80',
      description: 'Elegant dining experience with online reservations',
    },
    {
      title: 'Elite Fitness',
      category: 'Health & Wellness',
      image: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?w=800&q=80',
      description: 'Modern gym with membership management system',
    },
    {
      title: 'Fashion Boutique',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/36583147/pexels-photo-36583147.jpeg?w=800&q=80',
      description: 'Minimal clothing brand with seamless shopping',
    },
  ];

  return (
    <section id="work" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-cyan-400 text-sm font-semibold mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 text-white font-semibold">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info (Always Visible) */}
              <div className="p-6 group-hover:opacity-0 transition-opacity duration-400">
                <p className="text-cyan-500 text-sm font-semibold mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
