import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiAngular,
  SiAdobepremierepro,
} from 'react-icons/si';

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
};

const skills: Skill[] = [
  {
    name: 'React',
    icon: FaReact,
    color: 'text-sky-400',
    description:
      'Building component-based UIs, hooks, state management, and scalable frontend architectures.',
  },
  {
    name: 'Angular',
    icon: FaAngular,
    color: 'text-red-500',
    description:
      'Developing enterprise-grade applications using components, services, and RxJS.',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-500',
    description:
      'Strong typing, interfaces, and scalable codebases for large applications.',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'text-yellow-400',
    description:
      'Core language fundamentals, ES6+, async programming, and browser APIs.',
  },
  {
    name: 'HTML',
    icon: FaHtml5,
    color: 'text-orange-500',
    description:
      'Semantic HTML and accessible markup for modern web applications.',
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    color: 'text-blue-400',
    description:
      'Responsive layouts, animations, and modern styling techniques.',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-cyan-400',
    description:
      'Utility-first styling with responsive and scalable design systems.',
  },
  {
    name: 'Bootstrap',
    icon: SiBootstrap,
    color: 'text-purple-600',
    description:
      'Rapid UI development using responsive grid systems and prebuilt components.',
  },
  {
    name: 'Angular Material',
    icon: SiAngular,
    color: 'text-red-400',
    description:
      'Material Design components for Angular with accessibility and consistency.',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: 'text-green-500',
    description:
      'Basic backend development, APIs, and server-side logic.',
  },
  {
    name: 'SQL',
    icon: FaDatabase,
    color: 'text-indigo-400',
    description:
      'Database design, queries, joins, and data management.',
  },
  {
    name: 'Premiere Pro',
    icon: SiAdobepremierepro,
    color: 'text-purple-500',
    description:
      'Video editing, timelines, transitions, and professional video workflows.',
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="py-10 bg-primary">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Technical Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedSkill(skill)}
                className="
                  cursor-pointer
                  group p-6 rounded-2xl
                  bg-background/70 backdrop-blur
                  border border-white/10
                  text-center shadow-xl
                  hover:border-accent
                  transition-all duration-300
                "
              >
                <div className="mb-4 flex justify-center">
                  <Icon
                    className={`text-4xl ${skill.color} group-hover:drop-shadow-[0_0_10px_currentColor]`}
                  />
                </div>
                <p className="font-semibold tracking-wide">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <selectedSkill.icon
                    className={`text-3xl ${selectedSkill.color}`}
                  />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedSkill.name}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedSkill.description}
                </p>

                <button
                  onClick={() => setSelectedSkill(null)}
                  className="ml-auto block px-5 py-2 rounded-lg bg-accent text-black font-semibold hover:opacity-90 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;
