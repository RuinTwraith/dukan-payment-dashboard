import React from "react";

const Card = ({ heading, children, className = "" }) => {
  return (
    <div
      className={`p-5 h-[118px] rounded-lg bg-black-100 shadow-card ${className}`}
    >
      {heading && (
        <div className="sub-title-regular text-black-30">{heading}</div>
      )}
      <div className="text-black-12 text-[32px] leading-[38px] font-medium mt-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
