import logo from '../assets/logo.svg';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-36 mb-8 ">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <img width={180} height={90} src={logo} alt="logo" />
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold mb-2">Vijay Enterprises</h3>
            <p className="text-sm text-gray-600">
              Tughalkabad Village
              <br />
              New Delhi, 110020
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <ul className="text-sm text-gray-600">
              <li>info@vijay-enterprises.com</li>
              <li>614-816-1991</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-sm text-gray-600">
              <li>Careers</li>
              <li>Resources</li>
              <li>Subscribe for Updates</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300 mb-4" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="mb-4 md:mb-0">
            <span>&copy; {year} Vijay Enterprises</span>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Cookie Declaration
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">
              Site Credits
            </a>
          </div>
          <div className="flex space-x-4">
            <FiFacebook size={20} />
            <FiInstagram size={20} />
            <FiTwitter size={20} />
            <FiLinkedin size={20} />
            <FiYoutube size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
