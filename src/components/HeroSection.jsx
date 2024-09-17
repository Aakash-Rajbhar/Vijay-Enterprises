// src/components/HeroSection.jsx
import { useState, useEffect } from 'react';
import bending from '../assets/bending.webm';
import laser from '../assets/laser.webm';
import welding from '../assets/welding.webm';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { useInView } from 'react-intersection-observer';

const videos = [
  laser,
  bending, // Add your video file paths here
  welding,
];

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    delay: 4000,
    triggerOnce: true,
  });

  // Function to handle video sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change video every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden z-0">
      {/* Aspect Ratio Container */}
      <div className="relative w-full h-[65vh] lg:h-[60vh] z-0">
        {' '}
        {/* Adjust height as needed */}
        <video
          key={currentVideoIndex}
          src={videos[currentVideoIndex]}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

      {/* Heading Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] text-center text-white px-4 py-8">
        <TextGenerateEffect
          words={'Transforming Metal into Precision Parts and Panels'}
        />
        <p
          ref={ref}
          className={`mt-4 text-sm md:text-lg lg:text-xl text-center transform transition-all ease-in delay-[2.5s] duration-[500ms] ${
            inView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-[100%] opacity-0'
          }`}
        >
          Leading the Way in Laser Cutting, Bending, and Custom Fabrication for
          Precision Parts and Panels
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
