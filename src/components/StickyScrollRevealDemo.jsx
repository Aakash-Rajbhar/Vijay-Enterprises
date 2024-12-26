import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
  {
    title: 'History of the company',
    description:
      'Vijay Enterprises began with a vision to revolutionize the sheet metal industry. From humble beginnings as a small-scale operation, we built our reputation on a foundation of quality, precision, and unwavering commitment to our clients. Over the years, we’ve honed our skills, expanded our capabilities, and established strong relationships with customers across various industries.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Past
      </div>
    ),
  },
  {
    title: 'Current Situation',
    description:
      'Today, Vijay Enterprises stands as a leader in the sheet metal services sector. With state-of-the-art technology, a skilled workforce, and a relentless focus on innovation, we provide comprehensive solutions to meet the evolving needs of our clients. Our custom product manufacturing capabilities allow us to turn unique ideas into reality, ensuring every project is executed to perfection. We pride ourselves on delivering reliability, efficiency, and excellence in every aspect of our work.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Present
      </div>
    ),
  },
  {
    title: 'Future Scope',
    description:
      'As we look to the future, Vijay Enterprises is committed to pushing the boundaries of possibility in sheet metal solutions and custom product manufacturing. We aim to embrace emerging technologies, sustainable practices, and innovative methodologies to stay ahead in a competitive market. Our vision is to continue growing alongside our clients, fostering partnerships that drive success and contribute to a better, more efficient world.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Future
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="py-10">
      <StickyScroll content={content} />
    </div>
  );
}
