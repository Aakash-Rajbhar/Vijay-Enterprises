import { cn } from '../../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PropTypes from 'prop-types';

export const HoverEffect = ({ items, className }) => {
  HoverEffect.propTypes = {
    items: PropTypes.array.isRequired, // Changed from object to array for items
    className: PropTypes.string,
  };

  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={`/products/${item.id}`} // Dynamic link to the dedicated product page
          key={item.id} // Use unique key based on item ID
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-gray-400/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage src={item.image} alt={item.name} />
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>
              <p className="text-gray-600 text-sm mt-2">
                {item.description.slice(0, 100)}...
              </p>
              <a
                href={item.link}
                className="text-blue-600 hover:underline mt-4 block"
              >
                Read More
              </a>
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  };
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full px-4 py-2 overflow-hidden shadow-sm bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-500 relative z-20',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardImage = ({ src, alt, className }) => {
  CardImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
  };
  return (
    <img
      src={src}
      alt={alt}
      className={cn('w-full h-48 object-cover rounded-lg mt-2', className)} // Fixed height
    />
  );
};

export const CardTitle = ({ className, children }) => {
  CardTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  };
  return (
    <h4 className={cn('text-black font-bold tracking-wide mt-4', className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  CardDescription.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  };
  return (
    <p
      className={cn(
        'mt-8 text-black tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};
