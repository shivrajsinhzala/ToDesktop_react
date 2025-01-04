import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  // Step 1: Use state to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Step 2: Toggle function to handle FAQ clicks
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div id="faq" className="px-6 py-6 m-20 mx-auto">
      <h2 className="text-4xl font-semibold leading-relaxed w-full lg:w-[40%] font-primary lg:text-5xl">
        FAQs
      </h2>
      <div className="grid items-start grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
        {[
          {
            question: "What is ToDesktop?",
            answer:
              "ToDesktop is a platform that allows you to convert your web app into a downloadable desktop application.",
          },
          {
            question: "How do I install ToDesktop?",
            answer:
              "You can install ToDesktop by downloading it from the official website, following the installation instructions provided there.",
          },
          {
            question: "Is ToDesktop compatible with all web apps?",
            answer:
              "ToDesktop works best with Progressive Web Apps (PWAs). It may require some adjustments for other types of web apps.",
          },
          {
            question: "Can I customize the desktop app?",
            answer:
              "Yes, ToDesktop allows you to customize the branding, icon, and other elements of your desktop application.",
          },
          {
            question: "Is ToDesktop free to use?",
            answer:
              "ToDesktop offers both free and premium plans. The free plan has limited features, while the premium plan offers more customization options.",
          },
          {
            question: "How can I publish my app created with ToDesktop?",
            answer:
              "Once your app is packaged, you can publish it to app stores like the Mac App Store or Microsoft Store, or distribute it through your own website.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 cursor-pointer group rounded-xl bg-gray-50"
            onClick={() => toggleFAQ(index)} // Step 3: Toggle visibility on click
          >
            <dt
              className="flex items-center justify-between cursor-pointer"
              aria-controls={`faq-${index}`}
            >
              <p className="text-lg font-semibold">{faq.question}</p>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`transition-transform ${
                  openFAQ === index ? "rotate-180" : ""
                }`} // Step 4: Rotate icon when open
              />
            </dt>
            <dd
              id={`faq-${index}`}
              className={`${
                openFAQ === index ? "block" : "hidden"
              } mt-6 text-lg font-light`} // Step 5: Show/hide the answer
            >
              <p>{faq.answer}</p>
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
