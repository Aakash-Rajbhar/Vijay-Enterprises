import { useInView } from 'react-intersection-observer';
import bending from '../assets/bending-machine.jpg';
import laser from '../assets/laser-machine.jpg';
import shearing from '../assets/shearing-machine.png';

const MachinesCard = () => {
  const machines = [
    {
      id: '1',
      title:
        'TL Series-Classic (Full Splash Cover with Exchange Table Cutting Machine)',
      description:
        'User-friendly, fast cutting speed, and low cost. Auto edge finding for big sheets. High energy efficiency with low maintenance. Dual-drive system increases speed and productivity.',
      img: laser,
      link: 'https://sheet-metal.tailiftgroup.com/en/products/laser-cutting-machine/laser-sheet-metal-cutting-machine/tl-series/tl4020',
    },
    {
      id: '2',
      title: 'CNC Press Break Hawk 150-31',
      description:
        'High-speed, accurate, and repeatable press brake. Saves over 70% energy per stroke. Silent operation with reduced noise and minimal vibrations for operator comfort.',
      img: bending,
      link: 'https://www.hindustanhydraulics.com/cnc_press_brake_hawk_series',
    },
    {
      id: '3',
      title: 'NC Shearing Machine',
      description:
        'The Genius series this machine provides sensitivity, high strength, productivity, and safety while lowering your production cost and improving your bottom line. This machine is manufactured in a way that has reduced vibration it means this machine has fully vibration free.',
      img: shearing,
      link: 'https://supremetechnology.in/hydraulic-shearing-machine/',
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-0 py-24 max-w-6xl">
      <h2 className="text-gray-600 text-lg font-semibold uppercase tracking-wide mb-2">
        Our Machines
      </h2>
      <h1 className="text-3xl font-bold mb-6">
        Automated Laser Cutting and Hydraulic Bending Machine to Hit Your
        Production Goal.
      </h1>
      <p className="text-gray-500 mb-12">
        Precise laser cutting systems. No Additional equipment required.
        Designed for precision, efficiency, and scalability.
      </p>

      <div className="grid md:grid-cols-3 items-center gap-10">
        {machines.map((machine, index) => {
          const { ref, inView } = useInView({
            threshold: 0.1,
            triggerOnce: true,
            delay: 200 * index, // Delay for staggered animation
          });

          return (
            <div
              key={machine.id}
              ref={ref}
              className={`bg-white overflow-hidden transform transition-transform duration-500 ease-in-out ${
                inView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <img
                src={machine.img}
                alt={machine.title}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{machine.title}</h3>
                <p className="text-gray-500 mt-2">{machine.description}</p>
                <a
                  href={machine.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 font-bold mt-4 inline-block"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MachinesCard;
