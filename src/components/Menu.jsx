import React from "react";

const Menu = ({ isMenuOpen, handleMenu }) => {
  return (
    <div
      onClick={handleMenu}
      className="fixed top-4 left-4 z-50 cursor-pointer w-[40px] h-[30px] sm:w-[50px] sm:h-[36px] md:w-[60px] md:h-[42px] lg:w-[69px] lg:h-[47px]"
    >
      {/* Línea superior */}
      <div
        className={`absolute top-0 left-0 w-full h-[6px] sm:h-[7px] md:h-[8px] lg:h-[9px] bg-[#7B5E57] transition-transform duration-300 ${
          isMenuOpen ? "rotate-45 top-[12px]" : ""
        }`}
      />

      {/* Línea del medio (solo si está cerrado) */}
      {!isMenuOpen && (
        <div className="absolute top-[12px] left-0 w-full h-[6px] sm:h-[7px] md:h-[8px] lg:h-[9px] bg-[#7B5E57] transition-opacity duration-300" />
      )}

      {/* Línea inferior */}
      <div
        className={`absolute left-0 w-full h-[6px] sm:h-[7px] md:h-[8px] lg:h-[9px] bg-[#7B5E57] transition-transform duration-300 ${
          isMenuOpen ? "rotate-[-45deg] top-[12px]" : "top-[24px]"
        }`}
      />
    </div>
  );
};

export default Menu;
