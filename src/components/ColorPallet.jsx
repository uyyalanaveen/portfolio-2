import React, { useState, useEffect } from 'react';

const ColorPallet = () => {
  // Retrieve the initial background and text colors from localStorage or use defaults
  const [background, setBackground] = useState(localStorage.getItem('background') || '#fff');
  const [textColor, setTextColor] = useState(localStorage.getItem('textColor') || '#000');

  // Update background and text color in both state and localStorage
  const changeBackground = (bg, text = '#000') => {
    setBackground(bg);
    setTextColor(text);
    document.body.style.background = bg;
    document.body.style.color = text;

    // Store the new values in localStorage
    localStorage.setItem('background', bg);
    localStorage.setItem('textColor', text);
  };

  // Use useEffect to apply the background and text color when the component mounts
  useEffect(() => {
    document.body.style.background = background;
    document.body.style.color = textColor;
  }, [background, textColor]);

  return (
    <div 
      className='flex flex-wrap justify-evenly mt-16 gap-5 mr-[16rem] border border-black rounded-md w-56 h-auto p-4'
      style={{ background: background, color: textColor }} 
    >
      <div 
        className='w-1/3 h-10 rounded-md bg-[#f5f]' 
        onClick={() => changeBackground('#f5f', '#000')}>
        1
      </div>
      <div 
        className='w-1/3 h-10 rounded-md bg-[#000]' 
        onClick={() => changeBackground('#000', '#fff')}>
        2
      </div>
      <div 
        className='w-1/3 h-10 rounded-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff]' 
        onClick={() => changeBackground('linear-gradient(to right, #00c6ff, #0072ff)', '#fff')}>
        3
      </div>
    </div>
  );
};

export default ColorPallet;

