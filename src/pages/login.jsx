import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../src/assests/logo.png';  
import loginBg from '../assests/images/login.jpg'
import PageTitle from './PageTitle'; 



const LoginForm = () => {
  const navigate = useNavigate();
  return (
<>
<PageTitle title="PG-4-U | Login " />
<div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${loginBg})` // Replace with your actual background image
      }}
    >
      {/* Full screen overlay */}
      <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-sm" />

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
        <div className="absolute left-0 top-0 w-1/2 h-full bg-blue-200/40 backdrop-blur-sm rounded-l-lg" />
        
        {/* Form container */}
        <div className="relative bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">Login!</h2>
          
          <div className="space-y-4">

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

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-blue-900">Email:</label>
              <input 
                type="email"
                placeholder="Enter your Email..."
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>
            
            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-blue-900">Password:</label>
              <div className="relative">
                <input 
                  type="password"
                  placeholder="Enter your Password..."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                />
                <a 
                  href="/forgot-password" 
                  className="absolute right-0 -top-6 text-xs text-blue-500 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            

            
            {/* Login Button */}
            <button 
              className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg"
            >
              Login
            </button>
            
            {/* Signup Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <a  href="/signup" className="text-blue-500 hover:underline">
                Sign Up!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default LoginForm;
