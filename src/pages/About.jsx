import { useInView } from 'react-intersection-observer';
import WorkFLow from '../components/WorkFLow';
import aboutBg from '../assets/about-bg.jpg';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 100,
  });

  return (
    <div className="font-sans mt-[82px] lg:mt-[92px] ">
      {/* Header Image */}
      <div className="relative h-64 bg-gray-800 overflow-hidden">
        <img
          src={aboutBg}
          alt="Welding Sparks"
          className="object-cover w-full h-full opacity-50"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60"></div>
        <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
          Who We Are
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 lg:px-0 py-12">
        <h2 className="text-4xl font-bold mb-6">
          The future of manufacturing won&rsquo;t build itself, yet.
        </h2>
        <p
          ref={ref}
          className={`text-gray-600 mb-12 text-justify text-lg md:text-xl transform transition-all ease-in-out duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          At Path, we&rsquo;re delivering on the promise of what intelligent
          industrial robotics can become. Today we&rsquo;re focused on welding
          robotics, but that&rsquo;s only the beginning. We&rsquo;re making
          intelligent robots that make manufacturing infinitely flexible and
          infinitely scalable.
        </p>

        {/* Timeline Sections */}
        <div className="space-y-8">
          {['Past', 'Present', 'Future'].map((period, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 200 * index,
            });
            return (
              <div
                ref={ref}
                key={index}
                className={`flex flex-col md:flex-row transform transition-all ease-in-out duration-1000 ${
                  inView
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-40 opacity-0'
                }`}
              >
                <div className="w-full md:w-1/4 font-bold text-xl md:text-2xl mb-2 md:mb-0">
                  {period}
                </div>
                <div className="w-full md:w-3/4 text-gray-600">
                  {period === 'Past' && (
                    <p className="text-justify text-lg md:text-xl">
                      Path Robotics was founded by Andy and Alex Lonsberry while
                      working on their PhDs at Case Western after they
                      discovered a massive opportunity to rethink welding.
                    </p>
                  )}
                  {period === 'Present' && (
                    <p className="text-justify text-lg md:text-xl">
                      Our first robotic welding systems are transforming the
                      manufacturing industry by allowing hardware to do so much
                      more, with much less human input.
                    </p>
                  )}
                  {period === 'Future' && (
                    <p className="text-justify text-lg md:text-xl">
                      Our innovations will evolve intelligent robotics systems
                      to learn, adapt, and solve the hardest manufacturing
                      challenges, so local manufacturers everywhere have the
                      ability to thrive.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="max-w-6xl px-8 lg:px-0 mx-auto flex flex-col md:flex-row justify-between items-center gap-4 py-16">
        <div className="w-[2/3]">
          <span className="text-slate-400">COMMITMENT TO PEOPLE</span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-slate-800">
            We exist to help manufacturers navigate the skilled labor shortage.
          </h3>
          <p className="text-lg md:text-xl text-wrap text-gray-600">
            Our mission is to enable robots to build, so humans can create. The
            future of manufacturing will be built by Path.
          </p>
        </div>
        <div className="w-[1/3]">
          <img src="https://via.placeholder.com/700x600" alt="banner" />
        </div>
      </section>

      <section className="my-16 max-w-6xl mx-auto">
        <WorkFLow />
      </section>

      {/* Company Foundation and Founder Section */}
      <section className="my-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Our Foundation & Founder
        </h2>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/3 flex flex-col  self-start items-center justify-center ">
            <img
              src="https://via.placeholder.com/200x200"
              alt="Founder"
              className="w-full max-w-xs rounded-full shadow-lg"
            />
            <h4 className="text-3xl md:text-4xl my-3 font-semibold text-slate-700 tracking-wider lg:tracking-normal">
              Vijay Rajbhar
            </h4>
            <span className="text-sm tracking-wider">( Founder )</span>
          </div>
          <div className="w-full md:w-2/3 p-8 lg:p-0">
            <p className="text-gray-600 text-justify text-lg md:text-xl">
              Founded by Vijay Rajbhar, a visionary with over 30 years of
              experience in the metal industry, our factory is built on the core
              principles of innovation, quality, and customer satisfaction. With
              a passion for precision engineering, Mr. Vijay continues to lead
              the company towards new horizons.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
