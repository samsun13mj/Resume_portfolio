import { motion } from 'framer-motion';

const projects = [
  {
    title: 'EV Battery Monitoring System',
    category: 'IoT • EV Technology',
    desc: 'An intelligent system designed to monitor EV battery health, predict charging time, and optimize energy usage for improved battery life.',
    features: [
      'Real-time battery health tracking',
      'Charging time prediction',
      'Temperature & voltage monitoring'
    ],
    tech: ['IoT', 'Embedded C', 'Sensors', 'Cloud'],
    link: '#'
  },
  {
    title: 'Weather Adaptive Street Lighting',
    category: 'Smart City • IoT',
    desc: 'A smart lighting solution that dynamically adjusts street light intensity based on weather and ambient conditions to save energy.',
    features: [
      'Automatic brightness adjustment',
      'Weather & ambient light detection',
      'Energy-efficient operation'
    ],
    tech: ['IoT', 'Arduino', 'LDR', 'Sensors'],
    link: '#'
  },
  {
    title: 'Line Follower Robot',
    category: 'Robotics • Automation',
    desc: 'An autonomous robot capable of following predefined paths accurately using infrared sensors and real-time motor control.',
    features: [
      'Precise path detection',
      'Obstacle-free navigation',
      'Efficient motor control'
    ],
    tech: ['Robotics', 'IR Sensors', 'Embedded C'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
          Featured Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
              className="
                group
                rounded-2xl
                bg-white
                p-8
                border border-gray-200
                hover:border-accent
                hover:-translate-y-3
                transition-all
                duration-300
                shadow-lg
              "
            >
              {/* Category */}
              <span className="text-xs uppercase tracking-wide text-accent font-semibold">
                {p.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-3 mb-4 text-gray-900">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {p.desc}
              </p>

              {/* Features */}
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                {p.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-gray-100
                      text-gray-700
                      border border-gray-200
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={p.link}
                className="inline-block text-sm font-semibold text-accent hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
