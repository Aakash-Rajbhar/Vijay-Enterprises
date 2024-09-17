import { useEffect, useRef, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'; // Import useLocation
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Get the current location
  const [active, setActive] = useState('');

  // Update the active state based on the current route
  useEffect(() => {
    const currentPath = location.pathname;

    // Map the route to the corresponding section
    if (currentPath === '/') {
      setActive('home');
    } else if (currentPath === '/about') {
      setActive('about');
    } else if (currentPath === '/services') {
      setActive('services');
    } else if (currentPath === '/products') {
      setActive('products');
    } else if (currentPath === '/contact') {
      setActive('contact');
    }
  }, [location]);

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav]);

  return (
    <>
      <header className="hidden md:block w-screen fixed top-0 left-0 z-50 bg-white shadow-md">
        <nav className="w-full max-w-6xl px-4 mx-auto flex justify-between items-center py-4 z-20">
          <div className="logo">
            <a href="/">
              <img height={80} width={150} src={logo} alt="Vijay Enterprises" />
            </a>
          </div>
          <div>
            <ul className="hidden md:flex items-center gap-8">
              <li className="font-semibold">
                <a
                  href="/"
                  className={`${
                    active === 'home' ? 'border-b-2 border-gray-400' : ''
                  }`}
                >
                  Home
                </a>
              </li>
              <li className="font-semibold">
                <a
                  href="/about"
                  className={`${
                    active === 'about' ? 'border-b-2 border-gray-400' : ''
                  }`}
                >
                  About
                </a>
              </li>
              <li className="font-semibold">
                <a
                  href="/services"
                  className={`${
                    active === 'services' ? 'border-b-2 border-gray-400' : ''
                  }`}
                >
                  Services
                </a>
              </li>
              <li className="font-semibold">
                <a
                  href="/products"
                  className={`${
                    active === 'products' ? 'border-b-2 border-gray-400' : ''
                  }`}
                >
                  Products
                </a>
              </li>
              <a
                href="/contact"
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full border-2 border-red-600 hover:bg-white hover:text-red-600 transition-all ease-in 300ms"
              >
                <button>Contact Us</button>
              </a>
            </ul>
          </div>
        </nav>
      </header>

      {/*------------------ nav for small screen ---------------------------*/}

      <header className="flex items-center justify-between bg-white shadow-md fixed top-0 left-0 min-w-full md:hidden z-50">
        <div className="logo block md:hidden p-4">
          <a href="/">
            <img width={120} height={50} src={logo} alt="logo" />
          </a>
        </div>
        <div
          className="absolute top-4 right-4  rounded-full cursor-pointer z-50 "
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? (
            <AiOutlineClose className="text-4xl text-white " />
          ) : (
            <HiMenuAlt3 className="text-4xl " />
          )}
        </div>

        <ul
          ref={menuRef}
          className={`min-w-[60%] flex flex-col h-screen justify-start items-end md:hidden gap-6 bg-[#11999e] opacity-[0.98] text-white pt-[6rem] px-12  absolute top-0 right-0 transform transition-all duration-[200ms] ease-in ${
            showNav
              ? 'translate-x-0 rounded-tl-0 rounded-bl-0 '
              : 'translate-x-[100%] rounded-tl-[250px] rounded-bl-[250px]'
          } z-10`}
        >
          <li className="w-full font-semibold">
            <a
              href="/"
              className={`${
                active === 'home' ? 'border-b-2 border-gray-400' : ''
              }`}
            >
              Home
            </a>
          </li>
          <li className="w-full font-semibold mb-4">
            <a
              href="/about"
              className={`text-white ${
                active === 'about' ? 'border-b-2 border-gray-400 ' : ''
              }`}
            >
              About
            </a>
          </li>
          <li className="w-full font-semibold mb-4">
            <a
              href="/services"
              className={`${
                active === 'services' ? 'border-b-2 border-gray-400' : ''
              }`}
            >
              Services
            </a>
          </li>
          <li className="w-full font-semibold mb-4">
            <a
              href="/products"
              className={`${
                active === 'products' ? 'border-b-2 border-gray-400' : ''
              }`}
            >
              Products
            </a>
          </li>
          <li className="w-full font-semibold mb-4">
            <a
              href="/contact"
              className={`${
                active === 'contact' ? 'border-b-2 border-gray-400' : ''
              }`}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
