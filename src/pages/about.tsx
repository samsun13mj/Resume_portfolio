import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-1 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="
          relative
          rounded-3xl
          border border-white/20
          bg-white/80 backdrop-blur-xl
          shadow-xl
          p-7 md:p-10
        "
      >
        {/* Soft Gradient Background */}
        <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-accent/20 via-sky-400/20 to-indigo-400/20 blur-xl opacity-70" />

        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT – PROFILE IMAGE */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-accent via-sky-400 to-indigo-400 blur-lg opacity-90 group-hover:opacity-100 transition" />

              <img
                src={profileImg}
                alt="Profile"
                className="
                  relative
                  w-72 h-72
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  border-4 border-white
                  shadow-2xl
                "
              />
            </div>
          </motion.div>

          {/* RIGHT – CONTENT */}
          <div>
            {/* TITLE */}
            <motion.div
              initial={{ backgroundPosition: '0% 50%' }}
              whileInView={{ backgroundPosition: '100% 50%' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: false }}
              className="
                text-5xl md:text-6xl
                font-extrabold
                mb-4
                bg-linear-to-r from-accent via-sky-400 to-indigo-400
                bg-size-[200%_200%]
                bg-clip-text text-transparent
              "
            >
              <h2
                className="
                  text-4xl md:text-5xl
                  font-extrabold
                  bg-linear-to-r from-accent via-sky-500 to-indigo-500
                  bg-clip-text text-transparent
                "
              >
                About Me
              </h2>
            </motion.div>

            {/* DESCRIPTION */}
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              I’m a <span className="font-semibold text-accent">Frontend Developer</span> specializing in
              <span className="font-semibold text-sky-600"> React</span> and
              <span className="font-semibold text-indigo-600"> Angular</span>, currently working at
              <span className="font-semibold text-gray-900"> Bezohminds Pvt. Ltd.</span>
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I build modern, scalable, and high-performance web applications with a strong
              focus on clean UI, accessibility, and maintainable architecture.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I enjoy crafting delightful user experiences, collaborating with teams,
              and continuously improving my frontend skills.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl bg-white shadow-md p-4 text-center">
                <p className="text-2xl font-bold text-accent">2+</p>
                <p className="text-sm text-gray-600 mt-1">Years Learning</p>
              </div>

              <div className="rounded-xl bg-white shadow-md p-4 text-center">
                <p className="text-2xl font-bold text-sky-600">React</p>
                <p className="text-sm text-gray-600 mt-1">Primary Stack</p>
              </div>

              <div className="rounded-xl bg-white shadow-md p-4 text-center">
                <p className="text-2xl font-bold text-indigo-600">Angular</p>
                <p className="text-sm text-gray-600 mt-1">Work Experience</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
