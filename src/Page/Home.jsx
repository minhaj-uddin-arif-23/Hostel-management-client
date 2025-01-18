import React from "react";
import Loading from "../components/Loading";
import { Slider } from "../Landing_page/Slider";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import MealTab from "../meal/MealTab";
import Upgrating from "../components/Upgrating";

function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <h1></h1>
      {/* All home components is Render this */}
      {/* <Loading /> */}
      <Slider />
      <MealTab />

      {/* category */}
      {/* fetured items/service */}
      {/* offer section */}
      {/* promotional */}
      <Upgrating />
      <ContactForm />
      <FAQ />
      {/* reviews */}
    </div>
  );
}

export default Home;
