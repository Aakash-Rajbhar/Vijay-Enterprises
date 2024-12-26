import { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '../../lib/utils';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import smallLogo from '../../assets/smallLogo.svg';

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Default active link
  const location = useLocation(); // Get current location

  useEffect(() => {
    // Update active link based on current location
    setActiveLink(location.pathname);
  }, [location]);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious();
      setVisible(scrollYProgress.get() >= 0.06 && direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={cn(
          'flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-neutral-500/[0.2] rounded-full bg-white/80 backdrop-blur-md shadow-xl z-[5000] pr-4 md:pr-6 pl-8 py-3 items-center justify-center space-x-4',
          className
        )}
      >
        <Link to="/">
          <img src={smallLogo} alt="logo" className="w-10 h-10 mr-4 md:mr-9" />
        </Link>
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            className={cn(
              'relative items-center flex space-x-1 text-sm font-medium transition',
              activeLink === navItem.link
                ? ' underline underline-offset-4'
                : 'text-neutral-600  hover:text-teal-500'
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </Link>
        ))}
        <button className="px-5 py-2 rounded-full border-[1px] border-teal-500 text-teal-500 text-sm font-medium hover:bg-teal-500 hover:text-white transition-colors 300ms ease-in">
          <Link to="/contact">Contact Us</Link>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

FloatingNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
      icon: PropTypes.element,
    })
  ),
  className: PropTypes.string,
};
