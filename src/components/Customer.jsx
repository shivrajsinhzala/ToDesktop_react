import React from "react";
import logo from "../assets/asset 44.svg";
import img3 from "../assets/asset 45.jpeg";
import img2 from "../assets/asset 46.png";
import assest48 from "../assets/asset 48.jpeg";
import asset47 from "../assets/asset 47.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCode, faDownload } from "@fortawesome/free-solid-svg-icons";

const Customer = () => {
  return (
    <div id="customer-stories" className="px-6 py-6 m-20 mx-auto">
      <h1 className="text-4xl font-semibold leading-relaxed font-primary lg:text-5xl">
        Customer Stories
      </h1>
      <div
        id="customer-stories-container"
        className="flex flex-col items-end justify-end px-6 py-6 mt-6 border border-gray-200 rounded-lg lg:flex-row"
      >
        <div className="flex flex-col justify-between gap-12 px-3 py-3">
          <img src={logo} alt="logo" className="w-40" />
          <p className="text-xl font-medium">
            ClickUp used ToDesktop to get their desktop app in front of
            customers in days instead of months.
          </p>
          <div
            id="customer-features-container"
            className="flex flex-col flex-wrap gap-3 md:flex-row"
          >
            <span
              id="customers-features"
              className="px-3 py-1 font-medium text-yellow-800 border border-yellow-300 rounded-lg text-nowrap font-primary bg-yellow-50 w-fit"
            >
              <FontAwesomeIcon icon={faCheck} className="pr-2" />
              Chromeless UI
            </span>
            <span
              id="customers-features"
              className="px-3 py-1 font-medium text-yellow-800 border border-yellow-300 rounded-lg text-nowrap font-primary bg-yellow-50 w-fit"
            >
              <FontAwesomeIcon icon={faCheck} className="pr-2" />
              Native spellcheck
            </span>
            <span
              id="customers-features"
              className="px-3 py-1 font-medium text-yellow-800 border border-yellow-300 rounded-lg text-nowrap font-primary bg-yellow-50 w-fit"
            >
              <FontAwesomeIcon icon={faCheck} className="pr-2" />
              Task time in menubar
            </span>
            <span
              id="customers-features"
              className="px-3 py-1 font-medium text-yellow-800 border border-yellow-300 rounded-lg text-nowrap font-primary bg-yellow-50 w-fit"
            >
              <FontAwesomeIcon icon={faCheck} className="pr-2" />
              Notification count in the dock
            </span>
            <span
              id="customers-features"
              className="px-3 py-1 font-medium text-yellow-800 border border-yellow-300 rounded-lg text-nowrap font-primary bg-yellow-50 w-fit"
            >
              <FontAwesomeIcon icon={faCheck} className="pr-2" />
              Global hotkey to create task
            </span>
          </div>
          <p
            id="customer-review"
            className="text-lg font-light text-gray-400 font-body"
          >
            “ToDesktop provided us with a
            <span className="text-gray-900"> polished desktop app </span>in no
            time. Their expert team guided us through a smooth migration from
            our outdated legacy desktop app, enabling us to deliver
            <span className="text-gray-900"> new and improved features</span>
            to our customers within days.”
          </p>
          <div id="customer-profile" className="flex">
            <div id="customer-image" className="inline-block pr-4">
              <img src={img3} alt="" className="inline-block rounded-full" />
            </div>
            <div>
              <div id="customer-name" className="font-medium">
                Zeb Evans
              </div>
              <div id="customer-designation" className="text-gray-300">
                Founder and CEO, <span className="underline">ClickUp</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={img2} alt="" className="w-full pl-12" />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 mt-6 lg:flex-row">
        <div className="rounded-2xl gradient-hover-outer group">
          <div className="flex flex-col gap-6 p-6 rounded-2xl gradient-hover-inner">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
                <FontAwesomeIcon icon={faCode} className="text-indigo-800" />
              </div>
              <h3 className="text-2xl font-semibold">Native APIs</h3>
            </div>
            <p className="text-lg font-light">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex gap-4">
              <div className="flex">
                <div className="flex items-center justify-center w-12 h-12 -mr-3 overflow-hidden border border-white rounded-full">
                  <img src={asset47} className="min-w-16 min-h-16" alt="" />
                </div>
                <div className="w-12 h-12 overflow-hidden border border-white rounded-full">
                  <img src={assest48} alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3>Rick Pastoor</h3>
                <a href="#" className="text-gray-500 anchor-hover w-fit">
                  Rise
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl gradient-hover-outer group">
          <div className="flex flex-col gap-6 p-6 rounded-2xl gradient-hover-inner">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
                <FontAwesomeIcon icon={faCode} className="text-indigo-800" />
              </div>
              <h3 className="text-2xl font-semibold">Native APIs</h3>
            </div>
            <p className="text-lg font-light">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex gap-4">
              <div className="flex">
                <div className="flex items-center justify-center w-12 h-12 -mr-3 overflow-hidden border border-white rounded-full">
                  <img src={asset47} className="min-w-16 min-h-16" alt="" />
                </div>
                <div className="w-12 h-12 overflow-hidden border border-white rounded-full">
                  <img src={assest48} alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3>Jigrajsinh Zala</h3>
                <a href="#" className="text-gray-500 anchor-hover w-fit">
                  Rise
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl gradient-hover-outer group">
          <div className="flex flex-col gap-6 p-6 rounded-2xl gradient-hover-inner">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full">
                <FontAwesomeIcon icon={faCode} className="text-indigo-800" />
              </div>
              <h3 className="text-2xl font-semibold">Native APIs</h3>
            </div>
            <p className="text-lg font-light">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex gap-4">
              <div className="flex">
                <div className="flex items-center justify-center w-12 h-12 -mr-3 overflow-hidden border border-white rounded-full">
                  <img src={asset47} className="min-w-16 min-h-16" alt="" />
                </div>
                <div className="w-12 h-12 overflow-hidden border border-white rounded-full">
                  <img src={assest48} alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3>Shivrajsinh Zala</h3>
                <a href="#" className="text-gray-500 anchor-hover w-fit">
                  Rise
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-6 mt-12 bg-black rounded-2xl lg:flex-row lg:pt-10">
        <div className="flex flex-col justify-center gap-6 p-8 lg:flex-1 lg:gap-8">
          <span className="font-medium text-gray-400 font-primary">
            READY TO START BUILDING?
          </span>
          <h2 className="text-4xl leading-tight text-white lg:text-5xl">
            Create your desktop app for free*
          </h2>
          <p className="text-lg font-light text-gray-400 lg:text-xl">
            ToDesktop Builder will take you step-by-step through the process of
            creating your first desktop app in just a few minutes.
          </p>
          <button className="flex items-center justify-center gap-4 py-3 text-white rounded-lg bg-primary hover:bg-opacity-90">
            <FontAwesomeIcon icon={faDownload} />
            <span>Download ToDestop Builder</span>
          </button>
          <p className="text-xs italic leading-tight text-gray-400">
            *You can create a desktop app and run it on your computer for free.
            You will only be charged if you want to create a distributable app
            for your customers.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={img2} className="pl-12" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customer;
