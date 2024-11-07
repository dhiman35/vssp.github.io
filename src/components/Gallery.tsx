import React from 'react';

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000',
      caption: 'Cultural Program',
    },
    {
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000',
      caption: 'Educational Workshop',
    },
    {
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000',
      caption: 'Community Service',
    },
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000',
      caption: 'Youth Development',
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
      caption: 'Study Groups',
    },
    {
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000',
      caption: 'Cultural Exchange',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Glimpses of our activities and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group
                       hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transform group-hover:scale-110
                         transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0
                           group-hover:opacity-100 transition-opacity duration-300
                           flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}