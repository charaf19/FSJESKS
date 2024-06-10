import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div className="flex justify-center">
          <img src={event1} alt="Event 1" className="object-cover" style={{ maxHeight: '400px', width: 'auto' }} />
        </div>
        <div className="flex justify-center">
          <img src={event2} alt="Event 2" className="object-cover" style={{ maxHeight: '400px', width: 'auto' }} />
        </div>
        <div className="flex justify-center">
          <img src={event3} alt="Event 3" className="object-cover" style={{ maxHeight: '400px', width: 'auto' }} />
        </div>
      </Carousel>
      <h2 className="text-2xl font-bold mt-8">Welcome to Our University</h2>
      <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna at pharetra elementum. Integer finibus libero vel eros vehicula, id varius odio posuere.</p>
    </div>
  );
}

export default HomePage;
