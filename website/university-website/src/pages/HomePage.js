import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: true,
};

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <section className="slider">
        <Slider {...settings}>
          <div className="item">
            <img src={event1} alt="Event 1" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
          <div className="item">
            <img src={event2} alt="Event 2" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
          <div className="item">
            <img src={event3} alt="Event 3" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
        </Slider>
      </section>
      <h2 className="text-2xl font-bold mt-8">Welcome to Our University</h2>
      <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula magna at pharetra elementum. Integer finibus libero vel eros vehicula, id varius odio posuere.</p>
    </div>
  );
}

export default HomePage;
