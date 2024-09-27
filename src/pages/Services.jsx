import { FaCut, FaCogs, FaWrench, FaHandScissors } from 'react-icons/fa'; // Font Awesome icons
import {
  MdBuild,
  MdDesignServices,
  MdPrecisionManufacturing,
} from 'react-icons/md'; // Material Design icons
import PropTypes from 'prop-types';
import TestimonialSection from '../components/Testimonials';
import ServicesComponent from '../components/ServicesComponent';

const services = [
  {
    name: 'Laser Sheet Cutting',
    description:
      'Our state-of-the-art laser cutting technology offers unparalleled precision for various types of sheet metal. We specialize in cutting complex shapes with tight tolerances, ensuring clean edges and minimal material waste. Our process is ideal for both small-scale prototypes and large production runs, accommodating materials such as stainless steel, aluminum, and copper. With our advanced CNC systems, we can handle thicknesses up to 25mm, making us versatile for a wide range of industries including automotive, aerospace, and electronics manufacturing.',
    icon: FaCut,
    image:
      'https://plus.unsplash.com/premium_photo-1682147450231-c3f2fa7e4d08?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sheet Bending',
    description:
      "Our CNC bending services offer precision shaping of sheet metal for a multitude of applications. Utilizing advanced press brakes, we can achieve complex bends and forms with exceptional accuracy. Our expertise covers a wide range of materials and thicknesses, allowing us to create everything from simple brackets to intricate multi-bend components. We specialize in both air bending and bottoming techniques, ensuring the right approach for each project's specific requirements. Our team can handle small batch productions or high-volume orders, always maintaining tight tolerances and consistent quality across all parts.",
    icon: FaCogs,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkhrZ8JD_QV_XM5dMPaXYmNZouOu9jovQ_nw&s',
  },
  {
    name: 'Sheet Shearing',
    description:
      'Our high-quality sheet shearing services provide efficient and precise cutting of large metal sheets into smaller, manageable sections. We employ hydraulic shears capable of handling materials up to 12mm thick and 3 meters wide. This process is ideal for creating straight cuts quickly and economically, perfect for preparing materials for further fabrication or as finished products. Our experienced operators ensure minimal distortion and burr-free edges, maintaining material integrity. We can accommodate a variety of metals including mild steel, stainless steel, and aluminum alloys, making our shearing service versatile for construction, manufacturing, and architectural applications.',
    icon: FaHandScissors,
    image:
      'https://crescocustommetals.com/wp-content/uploads/elementor/thumbs/shutterstock_1827270527-1-q2ub161mygxr0zhtt6drywev2yvi67zyo5m3g2e8ps.jpg',
  },
  {
    name: 'Fabrication',
    description:
      'Our comprehensive metal fabrication solutions cover the entire process from concept to completion. We begin with detailed CAD designs, moving through cutting, forming, and assembly to deliver high-quality finished products. Our facility is equipped with a diverse range of tools and machines, allowing us to handle projects of any scale or complexity. We specialize in custom fabrication for industries such as construction, energy, and transportation. Our services include welding, punching, stamping, and finishing, all performed by skilled technicians who ensure each piece meets exact specifications. We pride ourselves on our ability to tackle challenging projects, offering innovative solutions and efficient production methods.',
    icon: MdBuild,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9wHw_-2EZuclMSYC628GX_kgRBqXb_d8jA&s',
  },
  {
    name: 'Manufacturing Machine Parts',
    description:
      'We specialize in manufacturing a wide array of machine parts, panels, covers, and custom metal products tailored to your exact specifications. Our state-of-the-art CNC machining centers allow us to produce components with tight tolerances and complex geometries. We work with a variety of materials including steel, aluminum, titanium, and various alloys to meet diverse industrial needs. Our expertise extends to producing both small, intricate parts and large-scale components for heavy machinery. We offer services such as milling, turning, drilling, and grinding, ensuring that each part is manufactured to the highest standards of quality and precision. Our team can assist with prototyping, small batch production, or high-volume manufacturing runs, always focusing on consistency and reliability.',
    icon: MdPrecisionManufacturing,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVVkaE-2vE7a-vI8F4LupfQFMwMCzlKtdDg&s',
  },
  {
    name: 'Welding Services',
    description:
      'Our professional welding services cover a comprehensive range of techniques and materials. We offer TIG (Tungsten Inert Gas) welding for precise, high-quality welds on materials like stainless steel and aluminum, ideal for aerospace and medical device industries. Our MIG (Metal Inert Gas) welding capabilities are perfect for larger structures and thicker materials, commonly used in automotive and construction sectors. We also provide spot welding services for quick, strong joints in sheet metal applications. Our certified welders are skilled in working with various metals including steel, aluminum, copper, and exotic alloys. We can handle both small-scale precision welding and large structural projects, always adhering to relevant industry standards and specifications.',
    icon: FaWrench,
    image:
      'https://5.imimg.com/data5/SELLER/Default/2023/1/XV/NB/AG/2132833/light-duty-fabrication-work.jpg',
  },
  {
    name: 'Product Design Services',
    description:
      'Our product design and engineering services are geared towards bringing your metal projects to life, from initial concept to final production. Our team of experienced designers and engineers utilizes cutting-edge CAD software to create detailed 3D models and technical drawings. We specialize in Design for Manufacturability (DFM), ensuring that your products are not only aesthetically pleasing but also optimized for efficient and cost-effective production. Our services include conceptual design, prototyping, structural analysis, and production optimization. We work closely with clients across various industries, including consumer products, industrial equipment, and architectural design, to develop innovative solutions that meet both functional requirements and market demands. Our iterative design process incorporates client feedback at every stage, ensuring the final product aligns perfectly with your vision and specifications.',
    icon: MdDesignServices,
    image:
      'https://5.imimg.com/data5/SELLER/Default/2023/5/307013345/QN/MY/MG/67824167/plastic-product-design-500x500.png',
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
      {/* <div className="container mx-auto py-16 px-8">
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
      </div> */}

      <div className='className="container mx-auto py-16 px-8"'>
        <ServicesComponent services={services} />
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
  Icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default ServicesPage;
