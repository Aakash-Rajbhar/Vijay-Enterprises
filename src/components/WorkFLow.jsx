import { useInView } from 'react-intersection-observer';

const WorkFlow = () => {
  const steps = [
    {
      id: 1,
      title: 'STEP 1',
      subtitle: 'Project Planning & Scheduling',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat deserunt quod eius reprehenderit, unde distinctio atque tempora accusantium ullam.',
    },
    {
      id: 2,
      title: 'STEP 2',
      subtitle: 'Material Preparation',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat deserunt quod eius reprehenderit, unde distinctio atque tempora accusantium ullam.',
    },
    {
      id: 3,
      title: 'STEP 3',
      subtitle: 'Design & Manufacturing',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat deserunt quod eius reprehenderit, unde distinctio atque tempora accusantium ullam.',
    },
    {
      id: 4,
      title: 'STEP 4',
      subtitle: 'Assembly & Inspection',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat deserunt quod eius reprehenderit, unde distinctio atque tempora accusantium ullam.',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-center">
        Our Work Flow
      </h3>
      <div className="relative w-full lg:w-2/3">
        {/* Render the workflow steps */}
        {steps.map((step, index) => {
          const { ref, inView } = useInView({
            threshold: 0.1,
            triggerOnce: true,
            delay: 200 * index,
          });
          return (
            <div
              key={step.id}
              className={`flex flex-col items-center my-16 relative ${
                index % 2 === 0 ? 'sm:items-start' : 'sm:items-end'
              } lg:flex-row ${
                index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
              }`}
            >
              <div
                ref={ref}
                className={`w-10/12 sm:w-1/2 p-4 bg-white shadow-lg  rounded-sm z-10 transform transition-all duration-500 ease-in-out text-center lg:text-left ${
                  index % 2 === 0 ? 'sm:ml-6' : 'sm:mr-6'
                } ${
                  inView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
              >
                <h4 className="font-bold text-lg text-center lg:text-left">
                  {step.title}
                </h4>
                <span className="font-semibold text-center  lg:text-left">
                  {step.subtitle}
                </span>
                <p className="text-xs text-justify py-4 text-gray-600">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}

        {/* SVG line for large screens */}
        <svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 hidden lg:block"
          width="100%"
          height="100%"
          viewBox="0 0 200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 0 V 50 C 100 100, 0 100, 0 150 S 100 200, 100 250 V 300 C 100 350, 200 350, 200 400 S 100 450, 100 500 V 550 C 100 600, 0 600, 0 650 S 100 700, 100 750 V 800"
            stroke="gray"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>

        {/* SVG straight line for small screens */}
        <svg
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 block lg:hidden"
          width="3"
          height="100%"
          viewBox="0 0 3 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="0"
            x2="1.5"
            y2="800"
            stroke="gray"
            strokeWidth="3"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default WorkFlow;
