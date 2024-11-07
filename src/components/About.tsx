import React from 'react';
import { BookOpen, Heart, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      title: 'Education First',
      description: 'Providing quality education to empower the next generation',
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: 'Cultural Heritage',
      description: 'Preserving and promoting Bengali cultural values',
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Community Service',
      description: 'Building stronger communities through social engagement',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            VSSPBD is dedicated to promoting education and cultural awareness in Bangladesh,
            following the principles and teachings of Swami Vivekananda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow
                       transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide quality education and promote cultural awareness while fostering
                the holistic development of individuals through the teachings of Swami Vivekananda.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To create an educated, culturally rich, and socially conscious society
                that embodies the values of harmony, knowledge, and service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}