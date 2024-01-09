import React from "react";
import SearchBar from "../SearchBar";
import help from "../../assets/help.svg";
import group from "../../assets/group.svg";
import menu from "../../assets/menu.svg";

const Header = () => {
  return (
    <div className="w-full h-16 bg-black-100 border-b border-black-85 flex gap-4 items-center justify-between px-8 py-3">
      <div className="flex items-center gap-4">
        <div className="body-1-regular">Payments</div>
        <div className="flex gap-1.5 items-center text-[#4D4D4D]">
          <img src={help} alt="help" />
          <div className="whitespace-nowrap caption-regular">How it works</div>
        </div>
      </div>
      <SearchBar />
      <div className="flex gap-3">
        <img src={group} alt="group" />
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
