import React, { useRef, useEffect, useState } from "react";

// Import arrow icon
import arrow from "../assets/asset 2.svg";

// Import images
import Asset3 from "../assets/asset 3.png";
import Asset4 from "../assets/asset 4.png";
import Asset5 from "../assets/asset 5.png";
import Asset6 from "../assets/asset 6.png";
import Asset7 from "../assets/asset 7.png";
import Asset8 from "../assets/asset 8.png";
import Asset9 from "../assets/asset 9.png";
import Asset10 from "../assets/asset 10.png";
import Asset11 from "../assets/asset 11.png";
import Asset12 from "../assets/asset 12.png";
import Asset13 from "../assets/asset 13.png";
import Asset14 from "../assets/asset 14.png";
import Asset15 from "../assets/asset 15.png";
import Asset16 from "../assets/asset 16.png";
import Asset17 from "../assets/asset 17.png";
import Asset18 from "../assets/asset 18.png";
import Asset19 from "../assets/asset 19.png";
import Asset20 from "../assets/asset 20.png";
import Asset21 from "../assets/asset 21.png";
import Asset22 from "../assets/asset 22.png";
import Asset23 from "../assets/asset 23.png";
import Asset24 from "../assets/asset 24.png";
import Asset25 from "../assets/asset 25.png";
import Asset26 from "../assets/asset 26.png";
import Asset27 from "../assets/asset 27.png";
import Asset28 from "../assets/asset 28.png";
import Asset29 from "../assets/asset 29.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLaptop } from "@fortawesome/free-solid-svg-icons";
import {
  faFileCode,
  faHandBackFist,
} from "@fortawesome/free-regular-svg-icons";

const HeroSection = () => {
  let movement = 0;
  const CompaniesListFirst = useRef();
  const CompaniesListMiddle = useRef();
  const CompaniesListLast = useRef();

  const [firstVisible, setFirstVisible] = useState(false);
  const [middleVisible, setMiddleVisible] = useState(false);
  const [lastVisible, setLastVisible] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === CompaniesListFirst.current) {
          setFirstVisible(entry.isIntersecting);
        } else if (entry.target === CompaniesListMiddle.current) {
          setMiddleVisible(entry.isIntersecting);
        } else if (entry.target === CompaniesListLast.current) {
          setLastVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(CompaniesListFirst.current);
    observer.observe(CompaniesListMiddle.current);
    observer.observe(CompaniesListLast.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate translation based on scroll position
  const calculateTranslateX = (elementRef, rtl) => {
    const scrollValue = scrollY * 3;

    movement =
      elementRef === CompaniesListFirst || elementRef === CompaniesListLast
        ? scrollValue * 0.1
        : scrollValue * 0.12;
    if (rtl) return `${movement}px`;
    else return `${-movement}px`;
  };

  const companies = [
    { name: "Cursor", logo: Asset3 },
    { name: "Badseah", logo: Asset4 },
    { name: "Wavely", logo: Asset5 },
    { name: "Ramdno", logo: Asset6 },
    { name: "Sjupe", logo: Asset7 },
    { name: "Waylo", logo: Asset8 },
    { name: "Classi", logo: Asset9 },
    { name: "RusiUp", logo: Asset10 },
    { name: "Lorem", logo: Asset11 },
    { name: "Ipsum", logo: Asset12 },
    { name: "Dolor", logo: Asset13 },
    { name: "Amet", logo: Asset14 },
    { name: "Lonada", logo: Asset15 },
    { name: "Alt", logo: Asset16 },
    { name: "Sit", logo: Asset17 },
    { name: "Lorem", logo: Asset18 },
    { name: "Imsum", logo: Asset19 },
    { name: "Dolor", logo: Asset20 },
    { name: "Sit", logo: Asset21 },
    { name: "Amet", logo: Asset22 },
    { name: "Consectetur", logo: Asset23 },
    { name: "Adipiscing", logo: Asset24 },
    { name: "Elit", logo: Asset25 },
    { name: "Sed", logo: Asset26 },
    { name: "Do", logo: Asset27 },
    { name: "Eiusmod", logo: Asset28 },
    { name: "Tempor", logo: Asset29 },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
      {/* Hero Section */}
      <div className="flex flex-col max-w-3xl px-6 pt-6 mx-auto pb-14 md:pb-24 sm:items-center sm:text-center">
        {/* Version Text */}
        <div className="flex items-center self-center gap-3 px-3 py-1 my-6 mt-12 transition-all border border-yellow-300 rounded-lg shadow-md group bg-yellow-50 w-fit hover:shadow-lg hover:border-yellow-400 hover:-translate-y-1">
          <div className="w-2 h-2 bg-yellow-500 border border-yellow-600 rounded-full"></div>
          <p className="font-medium text-yellow-600">
            v0.21.1:
            <span className="text-yellow-700">Find-in-page bug fixes</span>
          </p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-yellow-600 transition-all group-hover:translate-x-1"
          />
        </div>

        {/* Features */}
        <div className="flex self-center gap-8 m-4 text-gray-500 sm:items-center">
          <span className="flex flex-col lg:flex-row">
            <FontAwesomeIcon icon={faFileCode} className="py-1 pr-2 " />
            Code Optional
          </span>
          <span className="flex flex-col lg:flex-row">
            <FontAwesomeIcon icon={faHandBackFist} className="py-1 pr-2 " />
            Drag & Drop Builder
          </span>
          <span className="flex flex-col lg:flex-row">
            <FontAwesomeIcon icon={faLaptop} className="py-1 pr-2 " />
            Windows, Mac, Linux
          </span>
        </div>

        {/* Main Text */}
        <div className="pl-4 mt-4 text-5xl md:text-5xl lg:text-6xl font-semibold text-gray-800 md:leading-[4rem]">
          Web app to desktop app in minutes
        </div>
        <p className="px-4 mt-8 text-xl text-gray-500 md:px-20">
          Take your web app codebase and transform it into a cross-platform
          desktop app with native functionality.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-12 sm:flex-row">
          <button className="px-8 py-3 font-semibold text-white border rounded-lg shadow-sm bg-primary hover:bg-opacity-90">
            Download Now
          </button>
          <button className="px-8 py-3 font-semibold bg-white border border-gray-400 rounded-lg hover:bg-gray-200">
            Read Docs
          </button>
        </div>

        {/* Our Clients Section */}
        <div className="self-center mt-20 font-semibold text-slate-900">
          <div className="flex items-center justify-center">
            <img src={arrow} alt="left icon" className="mt-4" />
            <span className="px-2">APPS POWERED BY TODESKTOP</span>
            <img src={arrow} alt="right icon" className="mt-4 -scale-x-100" />
          </div>

          {/* Company Lists */}
          <div
            ref={CompaniesListFirst}
            className={`flex items-center justify-center gap-4 mt-8 transition-transform ease-linear text-center flex-row-reverse`}
            style={{
              transform: `${
                firstVisible
                  ? `translateX(${calculateTranslateX(
                      CompaniesListFirst,
                      true
                    )}`
                  : `${movement}px`
              }`,
            }}
          >
            {companies.map((company, index) => (
              <div
                key={`list1-${index}`}
                className="flex flex-col items-center w-32 h-32 p-8 text-center bg-white border border-gray-300 rounded-2xl"
              >
                <img className="-mt-4" src={company.logo} alt={company.name} />
                <p className="mt-2">{company.name}</p>
              </div>
            ))}
          </div>

          <div
            ref={CompaniesListMiddle}
            className="flex items-center justify-center gap-4 mt-8 text-center transition-transform ease-linear"
            style={{
              transform: `${
                middleVisible
                  ? `translateX(${calculateTranslateX(
                      CompaniesListMiddle,
                      false
                    )}`
                  : `${movement}px`
              }`,
            }}
          >
            {companies.slice(10).map((company, index) => (
              <div
                key={`list1-${index}`}
                className="flex flex-col items-center w-32 h-32 p-8 text-center bg-white border border-gray-300 rounded-2xl"
              >
                <img className="-mt-4" src={company.logo} alt={company.name} />
                <p className="mt-2">{company.name}</p>
              </div>
            ))}
          </div>

          <div
            ref={CompaniesListLast}
            className="flex flex-row-reverse items-center justify-center gap-4 mt-8 text-center transition-transform ease-linear md:hidden"
            style={{
              transform: `${
                lastVisible
                  ? `translateX(${calculateTranslateX(CompaniesListLast, true)}`
                  : `${movement}px`
              }`,
            }}
          >
            {companies.slice(13).map((company, index) => (
              <div
                key={`list1-${index}`}
                className="flex flex-col items-center w-32 h-32 p-8 text-center bg-white border border-gray-300 rounded-2xl"
              >
                <img className="-mt-4" src={company.logo} alt={company.name} />
                <p className="mt-2">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
