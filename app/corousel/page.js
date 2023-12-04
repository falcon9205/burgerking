import React, { useState, useEffect } from 'react';

const AutoCarousel = ({ items, interval = 1000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the activeIndex to move to the next item
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    // Clear the interval when the component unmounts or when items change
    return () => clearInterval(intervalId);
  }, [items, interval]);

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item  ${index === activeIndex ? 'active' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

// Example usage
const CarouselExample = () => {  const carouselItems = [   
    <img src="c1.png" className='md:h-screen w-full h-1/2 rounded-lg' alt="Image 1" />,
    <img src="/c2.png" className='md:h-screen w-full h-1/2 rounded-lg' alt="Image 2" />,
    <img src="/c3.png" className='md:h-screen w-full h-1/2 rounded-lg' alt="Image 3" />
  ];

  return <AutoCarousel items={carouselItems} />;
};

export default CarouselExample;
