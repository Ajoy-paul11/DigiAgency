import React, { useEffect } from "react";
import animationData from "../assets/AboutAnimation.json";
import Lottie from "lottie-react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GoGoal } from "react-icons/go";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });
  return (
    <div id="about" className=" w-full max-h-fit my-4">
      <div className=" p-4">
        <h2
          data-aos="zoom-in"
          className=" text-3xl font-bold text-primary font-secondary underline text-center mb-2"
        >
          About
        </h2>
        <div className=" flex flex-col lg:flex-row items-center justify-center bg-[#f4f5ff] py-8">
          <section data-aos="slide-right" className=" w-full lg:w-1/2 ">
            <Lottie
              className="w-[400px] mx-auto"
              animationData={animationData}
            />
          </section>
          <section className=" w-full lg:w-1/2 flex flex-col items-center justify-center font-secondary text-primary">
            <div className=" w-full mx-2 mb-4">
              <h2
                data-aos="slide-left"
                className=" text-2xl font-semibold mb-4"
              >
                Our Mission
              </h2>
              <p data-aos="zoom-out" className=" text-lg">
                Our mission is to empower all to advertise. We provide the best
                advertising options online and help you plan your advertising
                according to your budget. You can buy the best media Ad spaces
                online in few clicks.
              </p>
            </div>
            <div
              data-aos="zoom-in-up"
              className=" w-full flex justify-center items-center gap-6 mb-2"
            >
              <div className=" px-4 py-4 rounded-md bg-primary">
                <GoGoal size={"35px"} />
              </div>
              <div className=" mb-4">
                <h2 className=" text-xl text-semibold mb-1"> VISION </h2>
                <p className=" text-base">
                  Our vision is to be the best advertising platform in the
                  world. We aim to provide the best advertising options to our
                  customers and help them grow their business.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              className=" w-full flex justify-center items-center gap-6 mb-2"
            >
              <div className=" px-4 py-4 rounded-md bg-primary">
                <VscWorkspaceTrusted size={"35px"} />
              </div>
              <div>
                <h2 className=" text-xl text-semibold mb-1">VALUES </h2>
                <p className=" text-base">
                  Our values are to provide the best advertising options to our
                  customers, help them grow their business, and provide
                  excellent customer service.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
