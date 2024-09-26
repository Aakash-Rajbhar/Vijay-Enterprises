import { cn } from '../../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const HoverEffect = ({ items, className }) => {
  HoverEffect.propTypes = {
    items: PropTypes.object.isRequired,
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
        <a
          href={item?.link}
          key={item?.link}
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
            {/* Pass the correct src and alt props to CardImage */}
            <CardImage src={item.image} alt={item.name} />
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
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

// CardImage now expects src and alt props for proper image rendering
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
