import React from "react";
import Loading from "../components/Loading";
import { Slider } from "../Landing_page/Slider";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import MealTab from "../meal/MealTab";
import Upgrating from "../components/Upgrating";
import Benefitslider from "../Sliders/Benefitslider";
import MobileSlider from "../Sliders/MobileSlider";
import Card from "../components/Card";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <h1></h1>
      <Helmet>
        <title> Hostel Management | Home</title>
      </Helmet>
      {/* All home components is Render this */}
      {/* <Loading /> */}
      <Slider />
      <MealTab />
      <Benefitslider />
      <Upgrating />
      <MobileSlider />
      {/* category */}
      {/* fetured items/service */}
      {/* offer section */}
      {/* promotional */}
    
      
      {/* <ContactForm /> */}
      <Card />
      <FAQ />
      {/* reviews */}
    </div>
  );
}

export default Home;
