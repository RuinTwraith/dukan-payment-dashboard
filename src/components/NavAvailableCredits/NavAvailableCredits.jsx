import React from "react";
import wallet from "../../assets/wallet.svg";

const NavAvailableCredits = () => {
  return (
    <div className="flex gap-3 items-center py-1.5 px-3 bg-[#353C53] rounded">
      <div className="p-1.5 bg-[#ffffff1a] rounded">
        <img src={wallet} alt="chevron-down" className="w-6 h-6" />
      </div>
      <div className="flex flex-col text-black-100 grow">
        <div className="sub-body-regular opacity-80">Available credits</div>
        <div className="sub-title-medium mt-0.5">222.10</div>
      </div>
    </div>
  );
};

export default NavAvailableCredits;
