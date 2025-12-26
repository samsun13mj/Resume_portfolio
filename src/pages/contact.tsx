import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 bg-linear-to-br from-slate-50 via-white to-sky-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-3xl md:text-4xl font-bold text-center mb-12
            bg-linear-to-r from-slate-800 via-sky-600 to-blue-700
            bg-clip-text text-transparent
          "
        >
          Get In Touch
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            max-w-xl mx-auto
            bg-white
            rounded-2xl
            shadow-2xl
            p-10
            text-center
            border border-gray-200
          "
        >
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8"
          >
            Open to frontend roles, freelance work, and collaborative projects. Let’s build something great together.
          </motion.p>

          {/* Email */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&to=samsuns80.mj@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="
              flex items-center justify-center gap-3 mb-8
              font-medium
              text-sky-600
              hover:text-blue-700
              transition
            "
          >
            <FaEnvelope size={20} />
            samsuns80.mj@gmail.com
          </motion.a>

          {/* Social Icons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="flex justify-center gap-8"
          >
            {/* GitHub */}
            <motion.a
              href="https://github.com/samsun13mj"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.15 }}
              className="
                p-4 rounded-full
                bg-linear-to-r from-slate-700 to-slate-900
                text-white
                shadow-lg
              "
            >
              <FaGithub size={22} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/samsun-s-24b923252/"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.15 }}
              className="
                p-4 rounded-full
                bg-linear-to-r from-sky-500 to-blue-600
                text-white
                shadow-lg
              "
            >
              <FaLinkedin size={22} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
