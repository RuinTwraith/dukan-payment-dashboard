import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`rounded py-1.5 px-3 h-9 sub-title-regular border border-black-85 bg-black-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
