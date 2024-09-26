import { FaCut, FaCogs, FaHandScissors, FaWrench } from 'react-icons/fa';
import {
  MdBuild,
  MdPrecisionManufacturing,
  MdDesignServices,
} from 'react-icons/md';

const iconComponents = {
  FaCut,
  FaCogs,
  FaHandScissors,
  FaWrench,
  MdBuild,
  MdPrecisionManufacturing,
  MdDesignServices,
};

import PropTypes from 'prop-types';

const ServicesComponent = ({ services }) => {
  ServicesComponent.propTypes = {
    services: PropTypes.array.isRequired,
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {services.map((service, index) => {
        const IconComponent = iconComponents[service.icon.name];
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-32"
          >
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'
              }`}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-72 object-cover shadow-md"
              />
            </div>
            <div
              className={`w-full md:w-1/2 mt-8 md:mt-0 ${
                index % 2 === 0 ? '' : 'md:order-1'
              }`}
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

export default ServicesComponent;
