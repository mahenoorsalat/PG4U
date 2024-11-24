import React from 'react';
import mobile from "../../src/assests/images/mobile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Third = () => {
  return (
    <>
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Download Find My PG App!</h2>
              <p className="text-gray-600 mb-6">And view more any details</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-blue-600">✓</div>
                  <p>Get to know price rating ePapermap</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 text-blue-600">✓</div>
                  <p>Call to know about nearby PG served</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                  <FontAwesomeIcon icon={faApple} className="w-6 h-6" />
                  App Store
                </button>
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                  <FontAwesomeIcon icon={faGooglePlay} className="w-6 h-6" />
                  Play Store
                </button>
              </div>
            </div>

            {/* Right Content - Mobile App Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative bg-blue-300 rounded-full">
                <img
                  src={mobile}
                  height={70}
                  alt="Mobile App"
                  className="w-64 h-auto object-contain"
                />
                {/* Add decorative elements */}
                <div className="absolute -left-4 top-1/4 w-8 h-8 bg-blue-200 rounded-full"></div>
                <div className="absolute -right-4 bottom-1/4 w-6 h-6 bg-blue-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-sm mb-20 text-gray-500">
        Copyright 2024. All rights reserved.
      </div>
    </>
  );
};

export default Third;
