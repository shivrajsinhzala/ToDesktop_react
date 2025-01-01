import React from "react";

const BentoGrid = () => {
  return (
    <div id="bentogrid-sectiom">
      <div className="flex flex-col gap-4 px-6 pt-6 mx-auto md:mt-20 sm:mt-20 sm:items-start sm:text-left">
        <h1 className="pb-8 text-4xl font-semibold text-gray-800 md:pb-20 lg:text-5xl font-primary">
          ToDesktop handles the details
        </h1>
        <div
          id="bentogrid"
          className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:grid-rows-5"
          style={{
            gridAutoRows: "96px",
          }}
        >
          <div
            id="grid-element"
            className="row-start-1 row-end-3 p-[1px] rounded-2xl bg-slate-200 group hover:bg-gradient-to-br from-red-200 via-purple-200 to-yellow-200"
          >
            <div className="flex flex-col items-center justify-start w-full h-full gap-6 p-6 rounded-2xl bg-slate-50 group-hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50">
              <h1 className="text-2xl">Native Notifications</h1>
              <img
                src="https://anuj-kumar-sharma.github.io/tailwind-landing-page/assets/asset%2037.png"
                alt=""
              />
            </div>
          </div>
          {/* <!-- elemr2 --> */}

          <div
            id="grid-element"
            className="row-start-1 row-end-4 p-[1px] rounded-2xl bg-slate-200 group hover:bg-gradient-to-br from-red-200 via-purple-200 to-yellow-200"
          >
            <div className="flex flex-col items-center justify-center w-full h-full gap-6 p-6 rounded-2xl bg-slate-50 group-hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50">
              <h1 className="text-2xl">Native Notifications</h1>
              <p className="text-lg text-center text-slate-800">
                We'll ensure the underlying browser is up to date and deliver
                performance improvements, security patches, & additional
                features.
              </p>
              <img
                src="https://anuj-kumar-sharma.github.io/tailwind-landing-page/assets/asset%2038.png"
                alt=""
              />
            </div>
          </div>

          {/* <!-- elemr3 --> */}

          <div
            id="grid-element"
            className="row-start-1 row-end-3 p-[1px] rounded-2xl bg-slate-200 group hover:bg-gradient-to-br from-red-200 via-purple-200 to-yellow-200"
          >
            <div className="flex flex-col items-center justify-start w-full h-full gap-6 p-6 rounded-2xl bg-slate-50 group-hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50">
              <h1 className="text-2xl">Native Notifications</h1>
              <img
                src="https://anuj-kumar-sharma.github.io/tailwind-landing-page/assets/asset%2039.png"
                alt=""
              />
            </div>
          </div>
          {/* <!-- elemr4 --> */}

          <div
            id="grid-element"
            className="row-start-3 row-end-6 p-[1px] rounded-2xl bg-slate-200 group hover:bg-gradient-to-br from-red-200 via-purple-200 to-yellow-200"
          >
            <div className="flex flex-col items-center justify-start w-full h-full gap-6 p-6 rounded-2xl bg-slate-50 group-hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50">
              <h1 className="text-2xl">Native Notifications</h1>
              <p className="text-lg text-center text-slate-800">
                We’ll ensure the underlying browser is up to date and deliver
                performance improvements, security patches, & additional
                features.
              </p>
              <img
                src="https://anuj-kumar-sharma.github.io/tailwind-landing-page/assets/asset%2040.png"
                alt=""
              />
            </div>
          </div>
          {/* <!-- elemr5 --> */}

          <div
            id="grid-element"
            className="row-start-4 row-end-6 p-[1px] rounded-2xl bg-slate-200 group hover:bg-gradient-to-br from-red-200 via-purple-200 to-yellow-200"
          >
            <div className="flex flex-col items-center justify-start w-full h-full gap-6 p-6 rounded-2xl bg-slate-50 group-hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50">
              <h1 className="text-2xl">Native Notifications</h1>
              <img
                src="https://anuj-kumar-sharma.github.io/tailwind-landing-page/assets/asset%2037.png"
                alt=""
              />
            </div>
          </div>
          {/* <!-- elemr6 --> */}

          <div
            id="grid-element"
            className="row-start-3 row-end-6 p-[1px] rounded-2xl bg-slate-200 group hover:bg-gradient-to-br from-red-200 via-purple-200 to-yellow-200"
          >
            <div className="flex flex-col items-center justify-start w-full h-full gap-6 p-6 rounded-2xl bg-slate-50 group-hover:bg-gradient-to-br from-red-50 via-purple-50 to-yellow-50">
              <h1 className="text-2xl">Native Notifications</h1>
              <p className="text-lg text-center text-slate-800">
                We’ll ensure the underlying browser is up to date and deliver
                performance improvements, security patches, & additional
                features.
              </p>
              <img
                src="https://anuj-kumar-sharma.github.io/tailwind-landing-page/assets/asset%2038.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
