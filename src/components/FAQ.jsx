import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  return (
    <div id="faq" className="px-6 py-6 m-20 mx-auto">
      <h2 className="text-4xl font-semibold leading-relaxed w-full lg:w-[40%] font-primary lg:text-5xl">
        FAQs
      </h2>
      <div className="grid items-start grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
        <div className="p-6 border border-gray-200 cursor-pointer group rounded-xl bg-gray-50">
          <dt
            className="flex items-center justify-between cursor-pointer"
            aria-controls="faq-1"
          >
            <p className="text-lg font-semibold">Is ToDesktop For Me?</p>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="transition-transform -rotate-180 "
            />
          </dt>
          <dd id="faq-1" className="hidden mt-6 text-lg font-light">
            <p>
              That depends! If you would like to distribute your web app to your
              users as a downloadable desktop app then ToDesktop is for you.
            </p>
          </dd>
        </div>
        <div className="p-6 border border-gray-200 cursor-pointer group rounded-xl bg-gray-50">
          <dt
            className="flex items-center justify-between"
            aria-controls="faq-2"
          >
            <p className="text-lg font-semibold">Is ToDesktop For Me?</p>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="transition-transform -rotate-180 "
            />
          </dt>
          <dd id="faq-2" className="hidden mt-6 text-lg font-light">
            <p>
              That depends! If you would like to distribute your web app to your
              users as a downloadable desktop app then ToDesktop is for you.
            </p>
          </dd>
        </div>
        <div className="p-6 border border-gray-200 cursor-pointer group rounded-xl bg-gray-50">
          <dt
            className="flex items-center justify-between cursor-pointer"
            aria-controls="faq-3"
          >
            <p className="text-lg font-semibold">Is ToDesktop For Me?</p>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="transition-transform -rotate-180 "
            />
          </dt>
          <dd id="faq-3" className="hidden mt-6 text-lg font-light">
            <p>
              That depends! If you would like to distribute your web app to your
              users as a downloadable desktop app then ToDesktop is for you.
            </p>
          </dd>
        </div>
        <div className="p-6 border border-gray-200 cursor-pointer group rounded-xl bg-gray-50">
          <dt
            className="flex items-center justify-between"
            aria-controls="faq-4"
          >
            <p className="text-lg font-semibold">Is ToDesktop For Me?</p>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="transition-transform -rotate-180 "
            />
          </dt>
          <dd id="faq-4" className="hidden mt-6 text-lg font-light">
            <p>
              That depends! If you would like to distribute your web app to your
              users as a downloadable desktop app then ToDesktop is for you.
            </p>
          </dd>
        </div>
        <div className="p-6 border border-gray-200 cursor-pointer group rounded-xl bg-gray-50">
          <dt
            className="flex items-center justify-between cursor-pointer"
            aria-controls="faq-5"
          >
            <p className="text-lg font-semibold">Is ToDesktop For Me?</p>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="transition-transform -rotate-180 "
            />
          </dt>
          <dd id="faq-5" className="hidden mt-6 text-lg font-light">
            <p>
              That depends! If you would like to distribute your web app to your
              users as a downloadable desktop app then ToDesktop is for you.
            </p>
          </dd>
        </div>
        <div className="p-6 border border-gray-200 cursor-pointer group rounded-xl bg-gray-50">
          <dt
            className="flex items-center justify-between"
            aria-controls="faq-6"
          >
            <p className="text-lg font-semibold">Is ToDesktop For Me?</p>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="transition-transform -rotate-180 "
            />
          </dt>
          <dd id="faq-6" className="hidden mt-6 text-lg font-light">
            <p>
              That depends! If you would like to distribute your web app to your
              users as a downloadable desktop app then ToDesktop is for you.
            </p>
          </dd>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
