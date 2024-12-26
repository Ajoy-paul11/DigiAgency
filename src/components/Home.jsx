import React, { useEffect } from "react";
import Example from "./Carousel.jsx";
import Animation from "./Animation.jsx";
import Genre from "./Genre.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Portfolio from "./Portfolio.jsx";
import Client from "./Client.jsx";
import AccordionComponent from "./Accordion.jsx";
import Contact from "./Contact.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });
  return (
    <div className=" w-full">
      <div className=" w-full max-h-fit bg-[#f4f5ff] flex flex-col lg:flex-row items-center justify-center gap-4 py-8">
        <section
          data-aos="fade-right"
          data-aos-delay="200"
          className=" w-full lg:w-1/2 flex flex-col items-center justify-center text-primary lg:order-2"
        >
          <h2 className=" text-3xl lg:text-5xl font-bold mb-6 font-secondary px-10 ml-6 md:px-16 md:ml-16">
            Empowering All to Advertise
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className=" w-full ">
            <Example />
          </div>
        </section>
        <section
          data-aos="fade-left"
          data-aos-delay="200"
          className=" w-full lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2"
        >
          <Animation />
        </section>
      </div>
      <div className=" container">
        <Genre />
      </div>
      <div className=" w-full my-8">
        <About />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Client />
      </div>
      <div>
        <AccordionComponent />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
