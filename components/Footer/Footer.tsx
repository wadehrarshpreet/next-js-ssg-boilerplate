import React from "react";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="bg-primary w-full">
        <div className="max-w-5xl h-20 flex items-center text-white m-auto px-8">
          Copyright © {year}. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
