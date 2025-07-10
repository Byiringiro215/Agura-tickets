import React from 'react';
import AuthLayout from './AuthLayout';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify-account');
  };
  return (
    <AuthLayout>
      <h2 className="text-xl font-bold text-white mb-2">Forgot Password</h2>
      <p className="text-[#CDCDE0] text-sm mb-6">Enter your phone number or email to receive the reset code for account recovery</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Phone Number or Gmail" className="bg-[#23232B] text-white rounded-md px-4 py-3 text-sm focus:outline-none" />
        <button type="submit" className="bg-primary text-white rounded-full py-3 font-semibold text-lg mt-2 hover:bg-primary/80 transition-all duration-200">Send Verification Code</button>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword; 