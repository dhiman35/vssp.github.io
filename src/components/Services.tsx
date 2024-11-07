import React from 'react';
import { GraduationCap, Book, Music, Users, Heart, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-orange-600" />,
      title: 'Educational Programs',
      description: 'Quality education for students at all levels',
    },
    {
      icon: <Book className="h-8 w-8 text-orange-600" />,
      title: 'Study Groups',
      description: 'Collaborative learning environments',
    },
    {
      icon: <Music className="h-8 w-8 text-orange-600" />,
      title: 'Cultural Activities',
      description: 'Traditional arts and cultural programs',
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Youth Development',
      description: 'Leadership and personality development',
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: 'Community Service',
      description: 'Social welfare and community programs',
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: 'Cultural Exchange',
      description: 'International cultural exchange programs',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of educational and cultural programs designed to
            enrich lives and strengthen communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg
                       transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}