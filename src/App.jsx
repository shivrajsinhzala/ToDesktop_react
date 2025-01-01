import React from "react";
import "./output.css";
import NavigationBar from "./components/NavigationBar.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import HeroSection from "./components/heroSection.jsx";
import BentoGrid from "./components/BentoGrid.jsx";
import FeaturesLine from "./components/FeaturesLine.jsx";
import Customer from "./components/Customer.jsx";
import Pricing from "./components/Pricing.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <!-- Navigation Bar --> */}
      <NavigationBar />
      {/* <!-- Main Body Starts --> */}
      <main className="overflow-x-hidden">
        {/* <!-- Hero Section --> */}
        <HeroSection />
        {/* <!-- How It Works Section --> */}
        <HowItWorks />
        {/* <!-- Bento Grid Section --> */}
        <BentoGrid />
        {/* <!-- Features Line Section --> */}
        <FeaturesLine />
        {/* <!-- Customer Stories Section --> */}
        <Customer />
        {/* <!-- Pricing Section --> */}
        <Pricing />
        {/* <!-- FAQ Section --> */}
        <FAQ />
      </main>
      {/* <!-- Footer Section --> */}
      <Footer />
    </>
  );
}

export default App;
