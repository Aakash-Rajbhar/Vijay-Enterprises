import { useState, useRef } from 'react';
import laser from '../assets/laser.webm';
import { useInView } from 'react-intersection-observer';

const RoboticWeldingInnovation = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 100,
  });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-[#f4f4f4] px-4 pt-[6rem] md:pt-[8rem] lg:pt-[10rem] pb-16 md:pb-[6rem] lg:pb-[10rem] text-center ">
      <h2 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
        WHO WE ARE
      </h2>
      <h1 className="text-3xl font-bold mb-4">
        Leading the Way in Manufacturing Innovation
      </h1>
      <p className=" text-gray-600 text-wrap text-justify max-w-6xl mx-auto mb-8 ">
        At the heart of our company is a commitment to innovation. Through
        continuous research and development, we&rsquo;re not just following
        trends in manufacturing; we&rsquo;re setting them. Discover how our
        advanced technologies and automation solutions are transforming
        production processes for greater efficiency and precision.
      </p>

      <div
        ref={ref}
        className={`relative aspect-video overflow-hidden max-w-6xl mx-auto  bg-black transform transition-all ease-in duration-500 ${
          inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          className="w-full h-full object-cover"
          poster="/api/placeholder/640/360"
        >
          <source src={laser} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="bg-white bg-opacity-70 rounded-full p-4 hover:bg-opacity-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isPlaying
                    ? 'M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    : 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoboticWeldingInnovation;
