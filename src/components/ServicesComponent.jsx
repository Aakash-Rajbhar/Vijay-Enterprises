import { FaCut, FaCogs, FaHandScissors, FaWrench } from 'react-icons/fa';
import {
  MdBuild,
  MdPrecisionManufacturing,
  MdDesignServices,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const iconComponents = {
  FaCut,
  FaCogs,
  FaHandScissors,
  FaWrench,
  MdBuild,
  MdPrecisionManufacturing,
  MdDesignServices,
};

const ServicesComponent = ({ services }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      {services.map((service, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ref, inView] = useInView({
          threshold: 0.1,
          delay: 500,
          triggerOnce: true,
        });
        const IconComponent = iconComponents[service.icon.name] || FaCut; // Fallback to FaCut if icon not found
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-32"
          >
            <div
              ref={ref}
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'
              } ${
                inView
                  ? 'translate-x-0 opacity-100'
                  : index % 2 === 0
                  ? '-translate-x-10 opacity-0'
                  : 'translate-x-10 opacity-0'
              } transition-all duration-1000 ease-in-out`}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-72 object-cover shadow-md"
              />
            </div>
            <div
              ref={ref}
              className={`w-full md:w-1/2 mt-8 md:mt-0 ${
                index % 2 === 0 ? '' : 'md:order-1'
              } ${
                inView
                  ? 'translate-x-0 opacity-100'
                  : index % 2 === 0
                  ? 'translate-x-10 opacity-0'
                  : '-translate-x-10 opacity-0'
              } transition-all duration-1000 ease-in-out`}
            >
              <div className="flex items-center mb-4">
                <IconComponent className="text-4xl text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold">{service.name}</h2>
              </div>
              <p className="text-gray-600 text-justify">
                {service.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
ServicesComponent.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServicesComponent;
