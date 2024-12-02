import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginBg from '../assests/images/login.jpg'
import logo from '../../src/assests/logo.png';  
import PageTitle from './PageTitle'; 


const SignUp = () => {
    const navigate = useNavigate();

  return (
<>
<PageTitle title="PG-4-U | Sign Up " />

<div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${loginBg})`      }}
    >
      {/* Full screen overlay */}
      <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm"></div>
      {/* Logo - Positioned absolutely at the top */}
      <div className="absolute top-8 right-8 z-10">
        <img 
          src={logo} 
          width={45} 
          alt="Logo" 
          className="hover:scale-105 transition-transform cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
      {/* Form wrapper */}
      <div className="relative w-full max-w-md mx-4">
        {/* Left side blue overlay */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-blue-200/40 backdrop-blur-sm rounded-l-lg"></div>

        {/* Form container */}
        <div className="relative bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Sign Up!</h2>

          <form className="space-y-4">

              {/* Role Field */}
              <div>
                <label className="block text-sm font-medium text-blue-900">Role:</label>
                <select
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="agent">Administrator</option>
                  <option value="buyer">Admin</option>
                  <option value="seller">Student</option>
                </select>
              </div>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-blue-900">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your Name..."
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email and Mobile */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-900">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email..."
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900">
                  Mobile No:
                </label>
                <input
                  type="tel"
                  placeholder="Enter your Number..."
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Password and Confirm Password */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-900">
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password..."
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-900">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password..."
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>



            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg mt-4"
            >
              Sign Up!
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login!
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
</>
  );
};

export default SignUp;
