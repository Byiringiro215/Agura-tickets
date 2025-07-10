import React from 'react';
import AuthLayout from './AuthLayout';
import { Link } from 'react-router-dom';

const Login = () => (
  <AuthLayout>
    <h2 className="text-xl font-bold text-white mb-2">Login</h2>
    <p className="text-[#CDCDE0] text-sm mb-6">Login to your account to create and access different events</p>
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Phone Number or Gmail" className="bg-[#23232B] text-white rounded-md px-4 py-3 text-sm focus:outline-none" />
      <input type="password" placeholder="Password" className="bg-[#23232B] text-white rounded-md px-4 py-3 text-sm focus:outline-none" />
      <Link to="/forgot-password" className="text-xs text-[#CDCDE0] hover:text-primary mb-2 self-end">Forgot Password ?</Link>
      <button type="submit" className="bg-primary text-white rounded-full py-3 font-semibold text-lg mt-2 hover:bg-primary/80 transition-all duration-200">Login</button>
    </form>
    <div className="mt-4 text-center text-[#CDCDE0] text-sm">
      Don't have an account?{' '}
      <Link to="/signup" className="text-primary font-semibold hover:underline">Signup</Link>
    </div>
  </AuthLayout>
);

export default Login; 