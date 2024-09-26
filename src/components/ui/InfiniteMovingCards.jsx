'use client';

import { cn } from '../../lib/utils';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    };

    const getDirection = () => {
      if (containerRef.current) {
        if (direction === 'left') {
          containerRef.current.style.setProperty(
            '--animation-direction',
            'forwards'
          );
        } else {
          containerRef.current.style.setProperty(
            '--animation-direction',
            'reverse'
          );
        }
      }
    };

    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === 'fast') {
          containerRef.current.style.setProperty('--animation-duration', '20s');
        } else if (speed === 'normal') {
          containerRef.current.style.setProperty('--animation-duration', '40s');
        } else {
          containerRef.current.style.setProperty('--animation-duration', '80s');
        }
      }
    };

    addAnimation();
  }, [items, direction, speed]);

  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-9xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,gray_10%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl overflow-hidden border border-gray-300 md:w-[450px] group"
            style={{
              background: 'linear-gradient(180deg, #f8f9fa, #e9ecef)', // Light background gradient
            }}
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 md:h-[250px] object-cover"
            />

            {/* Hidden Product Description - Shown on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white px-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

InfiniteMovingCards.propTypes = {
  items: PropTypes.array.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
  speed: PropTypes.oneOf(['slow', 'normal', 'fast']),
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
};
