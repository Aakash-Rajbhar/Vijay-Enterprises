import { FaCut, FaCogs, FaWrench, FaHandScissors } from 'react-icons/fa'; // Font Awesome icons
import {
  MdBuild,
  MdDesignServices,
  MdPrecisionManufacturing,
} from 'react-icons/md'; // Material Design icons
import propTypes from 'prop-types';
import TestimonialSection from '../components/Testimonials';

const services = [
  {
    name: 'Laser Sheet Cutting',
    description:
      'Precise laser cutting services for various types of sheet metal, ensuring high accuracy and clean edges.',
    icon: FaCut, // Pass the component
    image:
      'https://plus.unsplash.com/premium_photo-1682147450231-c3f2fa7e4d08?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image URL
  },
  {
    name: 'Sheet Bending',
    description:
      'Offering CNC bending services to shape sheet metal into custom forms for various applications.',
    icon: FaCogs, // Pass the component
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhrZ8JD_QV_XM5dMPaXYmNZouOu9jovQ_nw&s', // Example image URL
  },
  {
    name: 'Sheet Shearing',
    description:
      'High-quality sheet shearing for cutting large metal sheets into smaller sections with precision.',
    icon: FaHandScissors, // Pass the component
    image:
      'https://crescocustommetals.com/wp-content/uploads/elementor/thumbs/shutterstock_1827270527-1-q2ub161mygxr0zhtt6drywev2yvi67zyo5m3g2e8ps.jpg', // Example image URL
  },
  {
    name: 'Fabrication',
    description:
      'Complete metal fabrication solutions from concept to completion, including cutting, forming, and assembly.',
    icon: MdBuild, // Pass the component
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9wHw_-2EZuclMSYC628GX_kgRBqXb_d8jA&s', // Example image URL
  },
  {
    name: 'Manufacturing Machine Parts',
    description:
      'Manufacturing of machine parts, panels, covers, and custom metal products tailored to your specifications.',
    icon: MdPrecisionManufacturing, // Pass the component
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVVkaE-2vE7a-vI8F4LupfQFMwMCzlKtdDg&s', // Example image URL
  },
  {
    name: 'Welding Services',
    description:
      'Professional welding services for sheet metal, including TIG, MIG, and spot welding.',
    icon: FaWrench, // Pass the component
    image:
      'https://5.imimg.com/data5/SELLER/Default/2023/1/XV/NB/AG/2132833/light-duty-fabrication-work.jpg', // Example image URL
  },
  {
    name: 'Product Design Services',
    description:
      'Offering expert product design and engineering services to bring your metal projects to life.',
    icon: MdDesignServices, // Pass the component
    image:
      'https://5.imimg.com/data5/SELLER/Default/2023/5/307013345/QN/MY/MG/67824167/plastic-product-design-500x500.png', // Example image URL
  },
];

const ServiceCard = ({ Icon, title, description, image }) => (
  <div className="bg-slate-50 rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover mb-4" />
    <div className="p-4">
      <div className="flex gap-2 items-start">
        <Icon className="text-[#11999e] text-3xl mb-4" /> {/* Icon */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className=" font-semibold  text-gray-600 ">
        Read More →
      </a>
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <div className=" mt-[82px] md:mt-[92px] min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664297472243-fe49b7730ccf?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Service</h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.icon}
              title={service.name}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#111] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              We Provide Truly Prominent Manufacturing Solutions.
            </h2>
            <p className="mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              accusamus fugit amet hic. Minima voluptates iusto nulla sed
              doloribus! Voluptas temporibus enim reprehenderit id adipisci
              porro ipsa, officia blanditiis impedit.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300">
              Let&rsquo;s Get Started
            </button>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1515630771457-09367d0ae038?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="IT Professional"
              className=" shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      <TestimonialSection />
    </div>
  );
};

ServiceCard.propTypes = {
  Icon: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
};

export default ServicesPage;
