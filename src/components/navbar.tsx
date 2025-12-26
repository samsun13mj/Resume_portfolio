import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 w-full z-50
        backdrop-blur
        bg-primary/70
        border-b border-black/10
      "
    >
      {/* OUTER WRAPPER */}
      <div className="w-full flex items-center">

        {/* BRAND – LEFT CORNER */}
        <div className="pl-6 md:pl-10">
          <h1
            className="
              text-2xl font-extrabold tracking-wide
              bg-linear-to-r from-purple-600 to-sky-500
              bg-clip-text text-transparent
            "
          >
            SAMSUN&nbsp;S
          </h1>
        </div>

        {/* LINKS – CENTERED CONTAINER */}
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `
                      transition-all
                      hover:text-sky-600
                      ${isActive ? 'text-purple-600 font-semibold' : ''}
                    `
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.nav>
  );
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default Navbar;
