import React from 'react';
import Image from 'next/image'

interface SkillItemProps {
  title: string;
  children: React.ReactNode;
}

export const SkillItem: React.FC<SkillItemProps> = ({ title, children }) => {
  return (
    <div className="p-4 border rounded-md flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};
