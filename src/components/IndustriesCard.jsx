import { useInView } from 'react-intersection-observer';
import bg2 from '../assets/bg2.jpg';

const IndustriesCard = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 0.5,
  });

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Fabrication, machinery, and heavy equipment',
    },
    {
      name: 'Transportation',
      description:
        'Truck and trailer chassis, components, and railroad equipment',
    },
    {
      name: 'Infrastructure',
      description:
        "Utility poles, interior art piece, building's art piece and highway structures",
    },
    {
      name: 'Farming & Agriculture',
      description: 'Grain towers, combine chassis, and catwalks',
    },
    { name: 'Mining', description: 'Structural frames and support beam' },
    {
      name: 'Construction',
      description:
        'Demolition attachments, excavator attachments, skid-steer attachments, aerial work platforms.',
    },
  ];

  return (
    <div className="bg-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-sm uppercase tracking-wide text-gray-600 mb-2">
          Industries
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Industries Served by Our Work
        </h1>

        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-2/3">
            <p className="text-gray-700 mb-6">
              Our work is transforming operations in various industries:
            </p>

            <ul className="space-y-4">
              {industries.map((industry, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                  delay: 100 * index, // Delay for staggered animation
                });

                return (
                  <li
                    key={index}
                    ref={ref}
                    className={`flex transition-transform duration-500 delay-200 ease-in-out ${
                      inView
                        ? 'transform translate-y-0 opacity-100'
                        : 'transform translate-y-10 opacity-0'
                    }`}
                  >
                    <span className="text-gray-600 mr-2">•</span>
                    <div>
                      <span className="font-semibold">{industry.name}:</span>{' '}
                      {industry.description}
                    </div>
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 text-gray-700">
              Discover how our solutions are tailored to meet other
              industry-specific challenges.
            </p>
          </div>

          <div className="md:w-1/3">
            <div
              className={`bg-black overflow-hidden transform transition-all duration-[800ms] ease-out ${
                imageInView
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-20 opacity-0'
              }`}
              ref={imageRef}
            >
              <img
                src={bg2}
                alt="Welding"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesCard;
