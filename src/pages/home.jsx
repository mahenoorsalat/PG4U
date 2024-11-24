import React from 'react';
import { Search, Shield , MapPin, Target , Users, Home,  User } from 'lucide-react';
import homeImg from '../../src/assests/home.png'
import logo from '../../src/assests/logo.png'

const home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar with Blur Overlay */}
      <nav className="absolute top-0 left-0 right-0  w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
             <img src={logo} width={45} alt="" />
            </div>
            
            <div className=" items-center space-x-4">

              <button className="p-2  hover:bg-white rounded-full transition-colors">
                <User className="w-5 h-5 text-white  hover:text-blue-950" />
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Hero Section with Blue Blur Overlay */}
      <div className="relative h-[500px]">
        {/* Background Image */}
        <img 
          src={homeImg}
          alt="Modern Kitchen" 
          className="w-full h-full object-cover"
        />
        
        {/* Main Blue Blur Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-xs"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-800/50"></div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Find a PG You'll <span className="text-blue-300 italic font-thin">love</span>
          </h1>
          
          {/* Search Bar */}
          <div className="w-full max-w-3xl px-4">
  <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center p-2 space-x-4">
    {/* Search Icon and Select Dropdown */}
    <div className="flex items-center px-4 space-x-2">
    <Search className="w-5 h-5 text-gray-400 " />
    <select className="w-full py-2 pl-4 px-2 text-gray-700 bg-transparent focus:outline-none">                <option>Select city/locality</option>
        <option>New York</option>
        <option>London</option>
        <option>Paris</option>
      </select>
    </div>

    {/* Radius Selector Icon */}
    <div className="flex items-center space-x-2">
      <Target className="w-5 h-5 text-gray-400" /> {/* Using Target icon for radius */}
      <select className="w-full py-2 px-2 text-gray-700 bg-transparent focus:outline-none">
        <option>Select radius</option>
        <option>1 km</option>
        <option>5 km</option>
        <option>10 km</option>
      </select>
    </div>

    {/* Current Location Icon */}
    <div className="flex items-center space-x-2">
      <MapPin className="w-5 h-5 text-gray-400" /> {/* Using MapPin for current location */}
      <button className="text-blue-600 hover:underline">Use Current Location</button>
    </div>

    {/* Search Button */}
    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
      Search
    </button>
  </div>
</div>
        </div>
      </div>

      {/* Rest of the code remains the same */}
      {/* Stats Section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 p-3 rounded-full mb-3">
              <Home className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold">1,00,000+</h3>
            <p className="text-gray-600">PG Posted</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 p-3 rounded-full mb-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold">2,00,000+</h3>
            <p className="text-gray-600">Happy customers</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 p-3 rounded-full mb-3">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold">45,000+</h3>
            <p className="text-gray-600">Trusted Owners</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why choose Find My PG
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Unlimited Privacy</h3>
              <p className="text-gray-600">Secure and private accommodations</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lowest Security Deposit</h3>
              <p className="text-gray-600">Affordable move-in costs</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Best PG Network</h3>
              <p className="text-gray-600">Wide selection of quality PGs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;