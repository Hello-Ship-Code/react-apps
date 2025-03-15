import React from 'react';

type HeadingTagProps = {
  children: React.ReactNode;
  className?: string; // Optional className for styling
};

export const HeadingTag: React.FC<HeadingTagProps> = ({ children, className }) => {
  return (
    <h1 className={className}>
      {children}
    </h1>
  );
};