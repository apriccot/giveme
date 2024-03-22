import React from 'react';

const Input = ({ text, placeholder, name, type, onChange, onBlur, value }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-800">{text}</label>
      <input
        className="bg-yellow w-[345px] h-[50px] pl-5"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        value={value}
        required
        type={type === 'email' ? 'email' : 'text'}
      />
    </div>
  );
};

export default Input;