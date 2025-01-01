import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pricing = () => {
  return (
    <div id="pricing-container" className="px-6 py-6 m-20 mx-auto">
      <h1 className="text-4xl font-semibold leading-relaxed w-full lg:w-[40%] font-primary lg:text-5xl">
        Choose a plan that fits your needs
      </h1>

      <div
        id="price-container"
        className="flex flex-col gap-6 mt-16 lg:flex-row"
      >
        <div
          id="free-price"
          className="flex flex-col flex-1 gap-6 px-12 py-6 border rounded-xl bg-slate-100 border-slate-50"
        >
          <h1 className="pt-6 text-4xl font-medium">Free</h1>
          <p className="text-lg font-light text-gray-500">
            For personal use or testing your app before deploying to customers.
            No credit card required. No time limit.
          </p>

          <div id="featuresList" className="flex flex-col flex-grow gap-3">
            <p className="text-2xl font-medium">Key Features</p>
            <ul className="flex flex-col gap-4 text-lg font-light">
              <li>
                <FontAwesomeIcon icon={faCheck} className="pr-2" />
                free for personal use
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="pr-2" />
                free for personal use
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} className="pr-2" />
                free for personal use
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} className="pr-2" />
                free for personal use
              </li>
            </ul>
            <div id="buyNowButton" className="mt-auto">
              <button className="w-full px-6 py-3 mt-10 text-white border border-gray-300 rounded-xl bg-primary hover:bg-opacity-90">
                Start your Free Trial
              </button>
            </div>
          </div>
        </div>
        <div
          id="essential-price"
          className="flex flex-col flex-1 gap-6 px-12 py-6 border rounded-xl bg-slate-100 border-slate-50"
        >
          <h1 className="pt-6 text-4xl font-medium">Essential</h1>
          <p className="text-lg font-light text-gray-500">
            For simple apps that don't require advanced features.
          </p>

          <div id="price">
            <p className="text-2xl font-medium">$49</p>
            <p className="text-lg font-light text-gray-500">per month</p>
          </div>

          <div id="featuresList" className="flex flex-col gap-3">
            <p className="text-2xl font-medium">Key Features</p>
            <ul className="flex flex-col gap-4 text-lg font-light">
              <li>
                <FontAwesomeIcon icon={faCheck} className="pr-2" />
                free for personal use
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="pr-2" />
                free for personal use
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} className="pr-2" />
                free for personal use
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} className="pr-2" />
                free for personal use
              </li>
            </ul>
            <div id="buyNowButton" className="">
              <button className="w-full px-6 py-3 mt-10 text-white border border-gray-300 rounded-xl bg-primary">
                Get Stated
              </button>
            </div>
          </div>
        </div>
        <div
          id="professional-price"
          className="relative flex flex-col flex-1 gap-6 px-12 py-6 border rounded-xl bg-slate-100 border-slate-50"
        >
          <span className="absolute px-3 py-1 font-semibold text-blue-700 bg-blue-200 right-5 -top-4 rounded-3xl">
            Most Popular
          </span>
          <h1 className="pt-6 text-4xl font-medium">Professional</h1>
          <p className="text-lg font-light text-gray-500">
            For sophisticated apps that require advanced features.
          </p>
          <div id="price">
            <p className="text-2xl font-medium">$99</p>
            <p className="text-lg font-light text-gray-500">per month</p>
          </div>
          <div id="featuresList" className="flex flex-col gap-3">
            <p className="text-2xl font-medium">Key Features</p>
            <ul className="flex flex-col gap-4 text-lg font-light">
              <li>
                <FontAwesomeIcon icon={faCheck} className="pr-2" />
                free for personal use
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="pr-2" />
                free for personal use
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} className="pr-2" />
                free for personal use
              </li>
              <li>
                <FontAwesomeIcon icon={faXmark} className="pr-2" />
                free for personal use
              </li>
            </ul>
            <div id="buyNowButton" className="">
              <button className="w-full px-6 py-3 mt-10 text-white border border-gray-300 rounded-xl bg-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
