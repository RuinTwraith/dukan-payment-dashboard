import React from "react";

const NavButton = ({ icon, name, isSelected }) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded cursor-pointer ${
        isSelected && "bg-[#ffffff1a]"
      }`}
    >
      <img src={icon} alt={icon} />
      <div className="body-2-medium text-black-100 opacity-80">{name}</div>
    </div>
  );
};

export default NavButton;
