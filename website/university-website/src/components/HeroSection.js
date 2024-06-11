import React from 'react';

function HeroSection() {
  return (
    <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(../assets/bg.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">PORTES OUVERTES</h1>
        <p className="text-lg md:text-xl text-white mb-8">
          L'Ecole Supérieure de Technologie d'El Kelâa des Sraghna organise la journée portes ouvertes.
        </p>
        <button className="bg-transparent border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition">
          En Savoir Plus &rarr;
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
