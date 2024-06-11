import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';
import heroImage from '../assets/bg.jpg'; // Make sure to place the hero image in the correct folder

function HomePage() {
  return (
    <div className="container mx-auto ">
      <section className="relative h-screen mb-10" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center items-start h-full p-8">
          <h1 className="text-5xl font-bold text-white mb-4">PORTES OUVERTES</h1>
          <p className="text-xl text-white mb-8">Faculté des Sciences Juridiques, Économiues et Sociales d'El Kelâa des Sraghna organise la journée portes ouvertes.</p>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" >
            En Savoir Plus &rarr;
            </span>
          </button>
        </div>
      </section>
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
