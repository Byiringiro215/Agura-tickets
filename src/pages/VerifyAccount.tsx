import React, { useState } from 'react';
import AuthLayout from './AuthLayout';

const VerifyAccount = () => {
  const [codes, setCodes] = useState(['', '', '', '', '']);

  const handleChange = (idx: number, value: string) => {
    if (value.length > 1) return;
    setCodes(codes => codes.map((c, i) => (i === idx ? value : c)));
  };

  return (
    <AuthLayout>
      <h2 className="text-xl font-bold text-white mb-2">Account Verification</h2>
      <p className="text-[#CDCDE0] text-sm mb-6">We have sent verification code on your email or phone use it to activate your account</p>
      <form className="flex flex-col gap-6 items-center">
        <div className="flex gap-3 mb-2">
          {codes.map((code, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              value={code}
              onChange={e => handleChange(idx, e.target.value.replace(/[^0-9]/g, ''))}
              className="w-12 h-12 text-center text-xl font-bold bg-[#23232B] text-white rounded-md focus:outline-none"
            />
          ))}
        </div>
        <button type="submit" className="bg-primary text-white rounded-full py-3 px-8 font-semibold text-lg hover:bg-primary/80 transition-all duration-200">Verify Account</button>
      </form>
    </AuthLayout>
  );
};

export default VerifyAccount; 