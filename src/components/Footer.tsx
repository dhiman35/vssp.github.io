import React from 'react';
import { Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About VSSPBD</h3>
            <p className="text-gray-400">
              Vivekananda Shiksha O Sangskriti Parishad Bangladesh is dedicated to
              promoting education and cultural awareness in Bangladesh.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'News', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/@vsspbd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
                Facebook
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={20} />
                info@vsspbd.org
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={20} />
                +880 1234-567890
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VSSPBD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}