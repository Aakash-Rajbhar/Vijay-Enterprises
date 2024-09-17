import { useState } from 'react';

const testimonials = [
  {
    quote:
      'Nulla tempus elit, fringilla nec erat vitae, varius volutpat nulla. Donec eget fermentum magna vel sodales faucibus vel vel nunc vel nuncGravidarac lorem ante. Sed quis dignissim.',
    name: 'Margie Dose',
    title: 'Web Designer',
    image: 'https://via.placeholder.com/80x80',
  },
  {
    quote:
      'Nulla tempus elit, fringilla nec erat vitae, varius volutpat nulla. Donec eget fermentum magna vel sodales faucibus vel vel nunc vel nuncGravidarac lorem ante. Sed quis dignissim.',
    name: 'Jane Walker',
    title: 'Marketing Manager',
    image: 'https://via.placeholder.com/80x80',
  },
  {
    quote:
      'Nulla tempus elit, fringilla nec erat vitae, varius volutpat nulla. Donec eget fermentum magna vel sodales faucibus vel vel nunc vel nuncGravidarac lorem ante. Sed quis dignissim.',
    name: 'Darlene Dobertson',
    title: 'UX Developer',
    image: 'https://via.placeholder.com/80x80',
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Says
        </h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full h-full py-3 flex-shrink-0 transition-transform duration-300 ease-in-out transform ${
                  index === activeIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-300 max-w-[75vw] md:max-w-2xl mx-auto">
                  <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-1 md:left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-1 md:right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            &gt;
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === activeIndex ? 'bg-[#11999e]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
