import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="
          relative
          rounded-3xl
          border border-white/20
          bg-white/80 backdrop-blur-xl
          shadow-xl
          p-6 md:p-10
        "
      >
        {/* Soft Gradient Background */}
        <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-sky-200/40 via-blue-200/40 to-indigo-200/40 blur-xl opacity-70" />

        <div className="relative grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT – PROFILE IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 via-sky-400 to-indigo-500 blur-lg opacity-90" />

              <img
                src={profileImg}
                alt="Profile"
                className="
                  relative
                  w-52 h-52
                  sm:w-64 sm:h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  border-4 border-white
                  shadow-2xl
                "
              />
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="text-center md:text-left">

            {/* TITLE – STRONG BLUE (NO FADE) */}
            <h2
              className="
                text-4xl md:text-5xl
                font-extrabold
                mb-4
                text-blue-600
              "
            >
              About Me
            </h2>

            {/* DESCRIPTION */}
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
              I’m a <span className="font-semibold text-blue-600">Frontend Developer</span> specializing in
              <span className="font-semibold text-sky-600"> React</span> and
              <span className="font-semibold text-indigo-600"> Angular</span>, currently working at
              <span className="font-semibold text-gray-900"> Bezohminds Pvt. Ltd.</span>
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              I build modern, scalable, and high-performance web applications with a strong
              focus on clean UI, accessibility, and maintainable architecture.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              I enjoy crafting delightful user experiences, collaborating with teams,
              and continuously improving my frontend skills.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-white shadow-md p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">2+</p>
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
