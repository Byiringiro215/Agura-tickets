import React from 'react';
import AuthLayout from './AuthLayout';
import { Link } from 'react-router-dom';

const Signup = () => (
  <AuthLayout>
    <h2 className="text-xl font-bold text-white mb-2">Create account</h2>
    <p className="text-[#CDCDE0] text-sm mb-6">Create a new account and be able to create new events</p>
    <form className="flex flex-col gap-4">
      <input type="email" placeholder="Gmail" className="bg-[#23232B] text-white rounded-md px-4 py-3 text-sm focus:outline-none" />
      <input type="text" placeholder="Phone Number" className="bg-[#23232B] text-white rounded-md px-4 py-3 text-sm focus:outline-none" />
      <input type="password" placeholder="Password" className="bg-[#23232B] text-white rounded-md px-4 py-3 text-sm focus:outline-none" />
      <button type="submit" className="bg-primary text-white rounded-full py-3 font-semibold text-lg mt-2 hover:bg-primary/80 transition-all duration-200">Register</button>
    </form>
    <div className="flex gap-4 mt-4">
      <button className="flex-1 bg-white text-black rounded-full py-2 font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-200">
        <span className="text-xl"></span> {/* Apple logo */}
      </button>
      <button className="flex-1 bg-white text-black rounded-full py-2 font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-200">
        <span className="text-xl">G</span> {/* Google logo */}
      </button>
    </div>
    <div className="mt-4 text-center text-[#CDCDE0] text-sm">
      Already have an account?{' '}
      <Link to="/login" className="text-primary font-semibold hover:underline">Login</Link>
    </div>
  </AuthLayout>
);

export default Signup; 