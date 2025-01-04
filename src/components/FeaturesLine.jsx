import React, { useEffect, useRef, useState } from "react";

const FeaturesLine = () => {
  const [isVisible, setisVisible] = useState(false);
  const [scroll, setScroll] = useState(0);

  let movement;

  const line = useRef();

  const handleScroll = () => {
    if (!isVisible) return;
    setScroll(window.scrollY);
  };

  console.log(scroll);
  const calculateScroll = () => {
    let smallScroll = scroll / 100;
    let threshold = 50;
    movement = threshold * smallScroll;
    console.log(movement);
    return movement;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setisVisible(entries[0].isIntersecting);
    });

    if (line.current) observer.observe(line.current);
    return () => {
      if (line.current) observer.unobserve(line.current);
      observer.disconnect();
    };
  }, [line.current]);

  return (
    <div id="features-line" className="px-6 mx-auto mt-20">
      <div
        ref={line}
        className="flex justify-center p-4 overflow-hidden border rounded-lg"
      >
        <div
          id="line4"
          className={`flex gap-8 p-6 transition-transform ease-linear`}
          style={{
            transform: isVisible
              ? `translateX(-${calculateScroll()}px)`
              : `translateX(-${movement}px)`,
          }}
        >
          {console.log(movement)}
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Download Analytics
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Custom Menus
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Multi-window support
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Trays
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Deep Linking
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Download Analytics
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Launch at startup
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Offline Support
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Good Signing
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Download Analytics
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Custom Menus
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Multi-window support
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Trays
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Deep Linking
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Download Analytics
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Launch at startup
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Offline Support
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Good Signing
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Download Analytics
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Custom Menus
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Multi-window support
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Trays
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Deep Linking
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Download Analytics
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Launch at startup
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Offline Support
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Good Signing
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Download Analytics
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Custom Menus
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Multi-window support
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Trays
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Deep Linking
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Download Analytics
          </h3>
          <span>•</span>
          <h3 className="mx-2 my-0 text-2xl font-semibold leading-7 whitespace-nowrap font-primary">
            Launch at startup
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturesLine;
