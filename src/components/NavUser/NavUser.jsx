import React from "react";
import user from "../../assets/user.png";
import chevronDown from "../../assets/chevron-down.svg";

const NavUser = () => {
  return (
    <div className="flex gap-3 items-center px-2">
      <img src={user} alt="user" className="w-10 h-10 rounded" />
      <div className="flex flex-col text-black-100 grow">
        <div className="body-1-medium">Nishyan</div>
        <div className="text-[13px] underline underline-offset-[2.5px] opacity-80">
          Visit store
        </div>
      </div>
      <img
        src={chevronDown}
        alt="chevron-down"
        className="w-5 h-5 cursor-pointer"
      />
    </div>
  );
};

export default NavUser;
