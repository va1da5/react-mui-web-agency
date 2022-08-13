import Branding from "sections/Branding";
import FeaturedWork from "sections/FeaturedWork";
import Footer from "sections/Footer";
import Hero from "../sections/Hero";
import LetsWorkTogether from "sections/LetsWorkTogether";
import Navbar from "../sections/NavBar";
import React from "react";
import ServiceBenefits from "../sections/ServiceBenefits";
import UserQuotes from "sections/UsersQuotes";
import ValueDriven from "sections/ValueDriven";
import WebDesign from "sections/WebDesign";

export default function Index() {
  document.title = "Agency - Index";

  return (
    <>
      <Navbar />
      <Hero />
      <ServiceBenefits />
      <WebDesign />
      <Branding />
      <ValueDriven />
      <FeaturedWork />
      <UserQuotes />
      <LetsWorkTogether />
      <Footer />
    </>
  );
}
