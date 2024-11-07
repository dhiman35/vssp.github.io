import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://live.staticflickr.com/65535/54017303667_42f73726dc_h.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Vivekananda Shiksha O Sangskriti Parishad Bangladesh
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
          Empowering minds through education and cultural enrichment
        </p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full 
                   font-semibold transition-colors duration-300 flex items-center gap-2"
        >
          Learn More
          <ArrowDown size={20} />
        </button>
      </div>
    </div>
  );
}