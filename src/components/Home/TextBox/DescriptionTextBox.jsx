import React, { useState, useEffect } from 'react';

export default function DescriptionTextBox({ text, onTextChange }) {
  const [value, setValue] = useState(text);

 
  useEffect(() => {
    onTextChange(value);
  }, [value]); 

  return (
    <div className="flex flex-col gap-4">
      <textarea
        className="max-w-[430px] md:max-w-[500px] outline-none h-[100px] text-white rounded-[12px] px-[12px] py-[8px] border-[1px] border-[#4E4E4E]"
        value={value}
        onChange={(e) => setValue(e.target.value)} // Update local state as the user types
      />
    </div>
  );
}