import React from "react";
import Loading from "../components/Loading";
import { Slider } from "../Landing_page/Slider";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* All home components is Render this */}
      {/* <Loading /> */}
      <Slider />

      {/* category */}
      {/* fetured items/service */}
      {/* offer section */}
      {/* promotional */}
      <ContactForm />
      <FAQ />
      {/* reviews */}
    </div>
  );
}

export default Home;
