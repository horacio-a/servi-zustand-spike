import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="min-w-full bg-black flex justify-between items-center h-24 mx-auto px-4 text-white">
        <a href="/">
          <img src="/servi-logo.webp" alt="" />
        </a>
        <h1 className="w-full text-3xl text-right text-white	">Zustand</h1>
      </div>{" "}
      {/* <div className="min-w-full bg-black flex justify-between items-center h-6 mx-auto px-4 text-white"></div> */}
    </>
  );
};

export default Navbar;
