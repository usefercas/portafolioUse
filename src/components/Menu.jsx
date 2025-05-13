import React from "react";

const Menu = ({ isMenuOpen, handleMenu }) => {
  return (
    <div
      onClick={handleMenu}
      className="w-[69px] left-[20px] h-[47px] cursor-pointer relative"
    >
      <div
        className={`w-[69px] h-[9px] left-0 top-[19px] absolute bg-[#7B5E57] ${
          isMenuOpen && "transition-transform rotate-45"
        }`}
      />

      {!isMenuOpen && (
        <div className="w-[69px] h-[9px] left-0 top-[38px] absolute bg-[#7B5E57]" />
      )}

      <div
        className={`
          w-[69px] h-[9px] left-0 top-[60px] absolute bg-[#7B5E57] ${
            isMenuOpen && "transition-transform rotate-[-45deg] top-[22px]"
          }
       `}
      />
    </div>
  );
};

export default Menu;
