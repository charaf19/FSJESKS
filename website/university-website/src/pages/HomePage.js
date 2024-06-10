import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

const options = {
  items: 1,
  nav: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
};

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <section className="slider">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item" style={{ backgroundImage: `url(${event1})`, height: '400px', backgroundSize: 'cover' }}>
            <div className="container h-full flex justify-center items-center">
              {/* Add content for each slide if needed */}
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${event2})`, height: '400px', backgroundSize: 'cover' }}>
            <div className="container h-full flex justify-center items-center">
              {/* Add content for each slide if needed */}
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${event3})`, height: '400px', backgroundSize: 'cover' }}>
            <div className="container h-full flex justify-center items-center">
              {/* Add content for each slide if needed */}
            </div>
          </div>
        </OwlCarousel>
      </section>
      <h2 className="text-2xl font-bold mt-8">Welcome to Our University</h2>
      <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna at pharetra elementum. Integer finibus libero vel eros vehicula, id varius odio posuere.</p>
    </div>
  );
}

export default HomePage;
