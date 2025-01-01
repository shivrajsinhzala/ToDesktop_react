import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="px-6 py-6 m-10 mx-auto">
        <div className="flex flex-col items-center gap-8 px-8 py-12 border rounded-lg lg:border-none lg:bg-gray-50 bg-gray-50 lg:flex-row-reverse">
          <a href="#" className="font-light font-primary">
            Documentation
          </a>
          <div className="flex gap-8 text-lg">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <a href="#" id="brand" className="flex items-center flex-1 gap-2">
            <img
              className="object-cover max-w-12 max-h-12"
              src="./assets/asset 0.png"
              alt="Logo"
            />
            <span className="text-lg font-medium font-primary">ToDesktop</span>
          </a>
        </div>
        <div
          id="sub-footer"
          className="flex flex-col items-center justify-center gap-6 my-12"
        >
          <div className="flex items-center gap-2">
            <img
              className="w-4 h-4"
              src="./assets/asset 54.svg"
              alt="Y-combinator"
            />
            <p className="text-sm text-gray-600">A Y Combinator company.</p>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 ToDesktop, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
