import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function News() {
  const news = [
    {
      title: 'Annual Cultural Program 2024',
      date: 'March 15, 2024',
      time: '3:00 PM',
      description: 'Join us for a celebration of Bengali culture featuring traditional music, dance, and poetry.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Educational Workshop Series',
      date: 'April 1-5, 2024',
      time: '10:00 AM',
      description: 'A week-long workshop series focusing on modern teaching methodologies and student development.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Community Service Drive',
      date: 'April 20, 2024',
      time: '9:00 AM',
      description: 'Volunteer initiative for local community development and educational support.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest activities and upcoming events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden
                       hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span className="text-sm">{item.time}</span>
                  </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}