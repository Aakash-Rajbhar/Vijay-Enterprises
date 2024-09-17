import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import PropTypes from 'prop-types';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    ease: 'ease-in',
    delay: 0.5,
  });
  return (
    <div
      ref={ref}
      className={`border-b border-t border-gray-200 py-4 transform transition-all duration-600 ease-in ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 ml-2" />
        ) : (
          <ChevronDown className="flex-shrink-0 ml-2" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 ">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question:
        "What sets your company's sheet cutting and bending services apart from traditional methods?",
      answer:
        "Our company's sheet cutting and bending services are distinguished by our advanced laser technology and precision equipment. Unlike traditional methods that may involve manual adjustments and less accuracy, our services utilize cutting-edge technology to achieve precise cuts and bends with minimal tolerance, ensuring high-quality results for a wide range of applications.",
    },
    {
      question:
        'Are your fabrication and manufacturing services suitable for small to medium-sized enterprises (SMEs)?',
      answer:
        'Absolutely. Our fabrication and manufacturing services are designed to be versatile and scalable, making them ideal for SMEs. We offer customized solutions that cater to the specific needs of smaller businesses, helping them achieve high standards of quality and efficiency in their projects.',
    },
    {
      question:
        'What support services do you offer for your fabrication and manufacturing processes?',
      answer:
        'We provide comprehensive support including consultation, design assistance, quality assurance, and ongoing maintenance. Our team is committed to delivering exceptional service to ensure your projects are completed to your exact specifications and standards.',
    },
    {
      question:
        "How can I get started with your company's sheet cutting, bending, or fabrication services?",
      answer:
        "Getting started is straightforward. Contact our sales team to discuss your project requirements. We'll provide a detailed consultation, offer recommendations based on your needs, and develop a tailored plan to meet your objectives efficiently.",
    },
    {
      question:
        'Can your services be integrated into existing production lines or systems?',
      answer:
        'Yes, our services are designed to integrate smoothly with existing production lines and systems. We offer flexible solutions that can be customized to fit your current setup, ensuring seamless operation and minimal disruption to your workflow.',
    },
    {
      question:
        'What types of materials can you work with for cutting, bending, and fabrication?',
      answer:
        'We work with a wide variety of materials including steel, aluminum, stainless steel, and various alloys. Our services can be tailored to accommodate specific material requirements and project specifications, ensuring optimal results for different types of projects.',
    },
    {
      question:
        'How do you ensure the quality and consistency of your manufactured components?',
      answer:
        'We utilize advanced technology and strict quality control processes to ensure the highest standards of quality and consistency. Our team continuously monitors and adjusts production parameters to maintain precision and reduce defects, guaranteeing reliable and durable components for your needs.',
    },
  ];

  // Split the FAQ data into two columns
  const midpoint = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = faqData.slice(0, midpoint);
  const rightColumnFAQs = faqData.slice(midpoint);

  return (
    <section id="faq" className="max-w-6xl mx-auto py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-6">FAQ&apos;S</h2>
      <h3 className="text-2xl font-semibold mb-8">About Our Company & Work</h3>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="space-y-2">
          {leftColumnFAQs.map((faq, index) => {
            return (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            );
          })}
        </div>
        <div className="space-y-2 mt-8 lg:mt-0">
          {rightColumnFAQs.map((faq, index) => {
            return (
              <FAQItem
                key={index + midpoint}
                question={faq.question}
                answer={faq.answer}
                isOpen={index + midpoint === openIndex}
                onToggle={() =>
                  setOpenIndex(
                    index + midpoint === openIndex ? -1 : index + midpoint
                  )
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default FAQAccordion;
