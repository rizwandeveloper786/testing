// src/components/ui/Input/Input.tsx
'use client';

import React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      {...props}
      className="border border-gray-300 px-4 py-2 rounded w-full"
    />
  );
};

export default Input;