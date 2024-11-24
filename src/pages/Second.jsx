import React from 'react';
import Sweethome from "../../src/assests/images/about.png";
import launched1 from '../../src/assests/images/launched1.png'
import launched2 from '../../src/assests/images/launched2.png'
import launched3 from '../../src/assests/images/launched3.png'


const Second = () => {
  const newlyLaunchedProperties = [
    {
      id: 1,
      image: launched1 ,
      title: "Modern House"
    },
    {
      id: 2,
      image: launched2,
      title: "Suburban Home"
    },
    {
      id: 3,
      image: launched3,
      title: "Luxury Interior"
    }
  ];

  return (
<>
<div className="container mx-auto px-4 py-8">
      {/* Main Heading */}
      <div className="text-center mb-8 mt-10">
        <p className="text-sm text-gray-500 mb-2">ALL PROPERTY NEEDS - ONE PORTAL</p>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
          Find Better Places to Live,
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
          Work and Wonder...
        </h2>
      </div>

      {/* Property Search Section */}
      <div className="mb-12 mt-40 flex justify-between">
<div className="info mt-12">
<p className="text-gray-600 ">who brings comfort...</p>
<h3 className="text-2xl font-semibold mb-4  mt-9">
          Find, Buy & Own Your Dream PG,
        </h3>
        
        <p className="text-sm text-gray-500 mb-5">
          Explore fresh Apartments, land, builder floors, villas and more
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
          Explore More
        </button>
</div>
<div className="photo">
<img src={Sweethome} alt="" />
</div>
      </div>


    </div>

          {/* Newly Launched Properties */}
          <div className='-translate-y-44 p-8 bg-white  ml-44 mr-44 rounded-xl border-2 border-blue-900'>
          <div className="flex  items-center gap-2 mb-4 ">
            <div className="w-5 h-5 bg-blue-100 rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
            </div>
            <h3 className="font-semibold text-lg">Newly Launched PG !</h3>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newlyLaunchedProperties.map((property) => (
              <div key={property.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
</>


  );
};

export default Second;