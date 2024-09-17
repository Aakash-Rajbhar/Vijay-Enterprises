import { useInView } from 'react-intersection-observer';
import FAQAccordion from '../components/FAQAccordian';
import HeroSection from '../components/HeroSection';
import IndustriesCard from '../components/IndustriesCard';
import MachinesCard from '../components/MachinesCard';
import VideoSection from '../components/VideoSection';

const Home = () => {
  const WhyUsData = [
    'State-of-the-Art Machinery: We use the latest technology to deliver precise, high-quality products.',
    'Expert Craftsmanship: Our skilled workforce ensures every project meets exact standards.',
    'Cost-Effective Solutions: Get superior results without breaking your budget.',
    'Full-Service Support: From design to delivery, we’re with you every step of the way.',
  ];

  return (
    <section className="w-screen mt-[82px] md:mt-[92px]">
      <HeroSection />

      <div className="bg-[#f1f1f1] py-8 px-4 sm:py-12 md:py-24">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-left leading-relaxed mx-auto max-w-6xl">
          Empowering Precision and Efficiency with Advanced Laser Cutting and
          Fabrication Solutions.
        </h3>
      </div>

      <div>
        <MachinesCard />
      </div>
      <div>
        <div className="bg-gradient-to-r from-[#111] to-[#222] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="lg:text-left">
              <h2 className="text-lg font-semibold text-gray-400 mb-4">
                WHY US
              </h2>
              <h1 className="text-4xl font-bold tracking-tight text-white">
                Why Choose Our Factory for Your Manufacturing Needs
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-300">
                At our factory, we combine advanced technology with a commitment
                to excellence. Here&apos;s why industry leaders rely on us:
              </p>
            </div>
            <ul className="mt-8 space-y-4 text-lg text-gray-200">
              {WhyUsData.map((data, index) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const { ref, inView } = useInView({
                  threshold: 0.1,
                  triggerOnce: true,
                  delay: 200 * index,
                });
                return (
                  <li
                    ref={ref}
                    className={`text-lg transform transition-transform duration-600 ease-in ${
                      inView
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-20 opacity-0'
                    }`}
                    key={index}
                  >
                    • {data}
                  </li>
                );
              })}
            </ul>
            <div className="mt-8">
              <a
                href="https://your-factory-link.com"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <IndustriesCard />
        <VideoSection />
        <FAQAccordion />
      </div>
    </section>
  );
};

export default Home;
