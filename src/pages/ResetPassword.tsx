import React from 'react';
import AuthLayout from './AuthLayout';

const ResetPassword = () => (
  <AuthLayout>
    <h2 className="text-xl font-bold text-white mb-2">Forgot Password</h2>
    <p className="text-[#CDCDE0] text-sm mb-6">Enter the new password for your account</p>
    <form className="flex flex-col gap-4">
      <input type="password" placeholder="New Password" className="bg-[#23232B] text-white rounded-md px-4 py-3 text-sm focus:outline-none" />
      <input type="password" placeholder="Confirm Password" className="bg-[#23232B] text-white rounded-md px-4 py-3 text-sm focus:outline-none" />
      <button type="submit" className="bg-primary text-white rounded-full py-3 font-semibold text-lg mt-2 hover:bg-primary/80 transition-all duration-200">Save Password</button>
    </form>
  </AuthLayout>
);

export default ResetPassword; 