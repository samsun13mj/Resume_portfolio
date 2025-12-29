import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
      <div className="w-full flex items-center justify-between px-6 md:px-10 py-4">

        {/* BRAND */}
        <h1
          className="
            text-2xl font-extrabold tracking-wide
            bg-linear-to-r from-purple-600 to-sky-500
            bg-clip-text text-transparent
          "
        >
          SAMSUN&nbsp;S
        </h1>

        {/* DESKTOP LINKS */}
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

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-white/90 backdrop-blur border-t border-black/10"
          >
            <div className="flex flex-col gap-4 px-6 py-6 text-sm font-medium">
              {navLinks.map(({ name, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                      transition-all
                      hover:text-sky-600
                      ${isActive ? 'text-purple-600 font-semibold' : 'text-gray-700'}
                    `
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
