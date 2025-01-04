import React from "react";
import assest0 from "../assets/asset 0.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import electronIcon from "../assets/asset 1.svg";

import { useState } from "react";

const NavigationBar = () => {
  const [menu, setMenu] = useState(false);
  const [menuIcon, setMenuIcon] = useState(true);
  const handleMenu = () => {
    setMenu(!menu);
    setMenuIcon(!menuIcon);
  };

  return (
    <div className="sticky z-10 flex items-center justify-between p-3 font-medium bg-white shadow-lg font-primary">
      <a href="#" className="flex items-center flex-1 gap-2">
        <img src={assest0} alt="ToDesktop Logo" />
        <span className="text-lg font-medium font-primary"> ToDesktop </span>
      </a>
      <button
        onClick={handleMenu}
        id="menuButton"
        className="flex items-center gap-2 px-2 py-2 transition-all border border-gray-400 rounded-lg md:hidden hover:bg-gray-100 hover:border-gray-500"
      >
        {menuIcon && (
          <FontAwesomeIcon
            icon={faBars}
            className="w-6 h-6 text-gray-500"
            id="menuIcon"
          />
        )}
        {!menuIcon && (
          <FontAwesomeIcon
            icon={faXmark}
            className="w-6 h-6 text-gray-500"
            id="closeIcon"
          />
        )}

        {/* {menuIcon ? (
        ) : (
          <FontAwesomeIcon icon={faXmark} id="closeIcon" className="hidden" />
        )} */}
      </button>

      <ul className="items-center justify-between flex-1 hidden gap-6 px-8 m-0 list-none md:flex">
        <li>
          <a className="transition-all font-body hover:text-sky-500" href="">
            Pricing
          </a>
        </li>
        <li>
          <a className="transition-all font-body hover:text-sky-500" href="">
            Docs
          </a>
        </li>
        <li>
          <a className="transition-all font-body hover:text-sky-500" href="">
            Changelog
          </a>
        </li>
        <li>
          <a className="transition-all font-body hover:text-sky-500" href="">
            Blogs
          </a>
        </li>
        <li>
          <a className="transition-all font-body hover:text-sky-500" href="">
            Login
          </a>
        </li>
      </ul>

      {menu && (
        <ul
          id="mobileMenu"
          className="absolute left-0 flex flex-col items-start justify-center flex-1 w-full gap-3 px-8 py-4 m-0 list-none bg-white rounded-lg shadow-md top-16"
        >
          <li className="w-full p-2 px-3 transition-all rounded-lg group hover:bg-gray-100">
            <a
              className="transition-all font-body group-hover:text-sky-500"
              href=""
            >
              <FontAwesomeIcon icon={faDollarSign} className="w-8" />
              Pricing
            </a>
          </li>
          <li className="w-full p-2 px-3 transition-all rounded-lg group hover:bg-gray-100">
            <a
              className="transition-all font-body group-hover:text-sky-500"
              href=""
            >
              <FontAwesomeIcon icon={faFile} className="w-8" />
              Documentation
            </a>
          </li>
          <li className="w-full p-2 px-3 transition-all rounded-lg group hover:bg-gray-100">
            <a
              className="transition-all font-body group-hover:text-sky-500"
              href=""
            >
              <FontAwesomeIcon icon={faClockRotateLeft} className="w-8" />
              Changelog
            </a>
          </li>
          <li className="w-full p-2 px-3 transition-all rounded-lg group hover:bg-gray-100">
            <a
              className="transition-all font-body group-hover:text-sky-500"
              href=""
            >
              <FontAwesomeIcon icon={faComment} className="w-8" />
              Blogs
            </a>
          </li>
          <li className="w-full p-2 px-3 transition-all rounded-lg group hover:bg-gray-100">
            <a
              className="transition-all font-body group-hover:text-sky-500"
              href=""
            >
              <FontAwesomeIcon icon={faUser} className="w-8" />
              Login
            </a>
          </li>
          <div className="w-full h-1 border-b-2 border-gray-300"></div>
          <div className="flex justify-start flex-1 w-full transition-all rounded-lg group hover:bg-gray-100 hover:border-gray-500 sm:flex md:hidden">
            <button className="flex items-center gap-2 px-3 py-2 transition-all rounded-lg group-hover:text-sky-500 group-hover:bg-gray-100 group-hover:border-gray-500">
              <img className="pr-1" src={electronIcon} alt="" />
              <span className="font-primary">Electron Developers</span>
              <FontAwesomeIcon icon={faArrowRight} className="" />
            </button>
          </div>
        </ul>
      )}
      <div className="justify-end flex-1 hidden lg:flex">
        <button className="flex items-center gap-2 px-6 py-2 transition-all border border-gray-400 rounded-lg hover:bg-gray-100 hover:border-gray-500">
          <img src={electronIcon} alt="" />
          <span className="font-primary">Electron Developers</span>
          <FontAwesomeIcon icon={faArrowRight} className="" />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
