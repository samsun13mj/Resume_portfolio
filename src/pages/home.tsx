import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start justify-center px-6 pt-28
                 bg-linear-to-br from-background via-primary to-background"
    >
      <div className="max-w-5xl text-center">

        {/* Main Heading */}
        <motion.h1
          initial={{ backgroundPosition: '0% 50%' }}
          whileInView={{ backgroundPosition: '100% 50%' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: false }}
          className="
            text-5xl md:text-7xl font-extrabold mb-5
            bg-linear-to-r from-accent via-sky-400 to-indigo-400
            bg-size-[200%_200%]
            bg-clip-text text-transparent
          "
        >
          Frontend Developer
        </motion.h1>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: false }}
          className="text-lg md:text-xl font-semibold tracking-wide text-gray-300 mb-10"
        >
          <span className="text-indigo-400">React</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-sky-400">Angular</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-indigo-400">TypeScript</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false }}
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          I design and build modern, scalable and user-focused web applications
          with strong UI/UX principles and clean architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Internal routing – React Router */}
          <Link
            to="/projects"
            className="
              px-8 py-3 rounded-xl
              bg-transparent
              border border-accent
              text-accent font-semibold
              hover:bg-accent hover:text-black
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            View Projects
          </Link>

          {/* Resume download */}
          <a
            href="/Samsun_S_Resume.pdf"
            download
            className="
              px-8 py-3 rounded-xl
              bg-transparent
              border border-accent
              text-accent font-semibold
              hover:bg-accent hover:text-black
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
