import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project 1",
    description: "Description of your first project",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "https://via.placeholder.com/500x300",
  },
  {
    title: "Project 2",
    description: "Description of your second project",
    tech: ["Node.js", "Express", "MongoDB"],
    image: "https://via.placeholder.com/500x300",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gray-900 section-padding">
      {/* CPU Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="circuit-pattern"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/20 text-primary-300 px-3 py-1 rounded-full text-sm border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}