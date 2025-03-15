import React from 'react';

type HeadingTagProps = {
  text: string;
  className?: string; // Optional className for styling
};

export const HeadingTag: React.FC<HeadingTagProps> = (props) => {
  return (
    <h1 className={props.className}>
      {props.text}
    </h1>
  );
};