import React from 'react';
import { Search, Shield, MapPin, Target, Home, Users, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import homeImg from '../assests/home.png';  
import logo from '../../src/assests/logo.png';  
import Second from './Second';
import Third from './Third';

const HomePage = () => {
  const navigate = useNavigate();  

  const handleLoginClick = () => {  
    navigate('/login');
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Responsive Navbar */}
        <nav className="absolute top-0 left-0 right-0 w-full z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <img src={logo} className="w-10 sm:w-12 md:w-[45px]" alt="Logo" />
              </div>
              
              <div className="flex items-center">
                <button className="p-2 hover:bg-white rounded-full transition-colors">
                  <User onClick={handleLoginClick} className="w-5 h-5 text-white hover:text-blue-950" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Responsive Hero Section */}
        <div className="relative h-[400px] sm:h-[450px] md:h-[500px]">
          <img 
            src={homeImg}
            alt="Modern Kitchen" 
            className="w-full h-full object-cover"
          />
          
          {/* Overlays */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-xs"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-800/50"></div>
          </div>
          
          {/* Responsive Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8 text-center">
              Find a PG You'll <span className="text-blue-300 italic font-thin">love</span>
            </h1>
            
            {/* Responsive Search Bar */}
            <div className="w-full max-w-3xl">
              <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex flex-col sm:flex-row items-center p-2 space-y-2 sm:space-y-0 sm:space-x-4">
                {/* Search Icon and Select Dropdown */}
                <div className="flex items-center w-full sm:w-auto px-4 space-x-2">
                  <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <select className="w-full py-2 pl-2 pr-4 text-gray-700 bg-transparent focus:outline-none text-sm sm:text-base">
                    <option>Select city/locality</option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Paris</option>
                  </select>
                </div>

                {/* Radius Selector */}
                <div className="flex items-center w-full sm:w-auto space-x-2">
                  <Target className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <select className="w-full py-2 px-2 text-gray-700 bg-transparent focus:outline-none text-sm sm:text-base">
                    <option>Select radius</option>
                    <option>1 km</option>
                    <option>5 km</option>
                    <option>10 km</option>
                  </select>
                </div>

                {/* Location Button */}
                <div className="flex items-center w-full sm:w-auto space-x-2">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <button className="text-blue-600 hover:underline text-sm sm:text-base">Use Current Location</button>
                </div>

                {/* Search Button */}
                <button className="w-auto bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Stats Section */}
        <div className="container mx-auto py-8 sm:py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="bg-blue-50 p-3 rounded-full mb-3">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">1,00,000+</h3>
              <p className="text-gray-600 text-sm sm:text-base">PG Posted</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="bg-blue-50 p-3 rounded-full mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">2,00,000+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Happy customers</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="bg-blue-50 p-3 rounded-full mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">45,000+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Trusted Owners</p>
            </div>
          </div>
        </div>

        {/* Responsive Features Section */}
        <div className="bg-gray-50 py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12">
              Why choose Find My PG
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Unlimited Privacy</h3>
                <p className="text-gray-600 text-sm sm:text-base">Secure and private accommodations</p>
              </div>
              <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Lowest Security Deposit</h3>
                <p className="text-gray-600 text-sm sm:text-base">Affordable move-in costs</p>
              </div>
              <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Best PG Network</h3>
                <p className="text-gray-600 text-sm sm:text-base">Wide selection of quality PGs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Second/>
      <Third/>
    </>
  );
};

export default HomePage;