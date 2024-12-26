import React, { useEffect } from "react";
import appDev from "../assets/gif/appDev.gif";
import webDev from "../assets/gif/webDev.gif";
import socialMarketing from "../assets/gif/socialMarketing.gif";
import seo from "../assets/gif/seo.gif";
import { CardWithLink } from "./ServiceCard.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function Service() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });

  return (
    <div id="services" className=" w-full max-h-fit">
      <h2
        data-aos="fade-up"
        className=" text-3xl font-bold text-primary font-secondary underline text-center mb-2"
      >
        Services
      </h2>
      <div className="  bg-[#f4f5ff] flex flex-col lg:flex-row items-center justify-center gap-6 p-8">
        <div data-aos="fade-down-right">
          <CardWithLink
            img={seo}
            title={"SEO"}
            description={
              "Optimize your website to rank higher in search results and drive more traffic to your website."
            }
          />
        </div>
        <div data-aos="fade-down-left">
          <CardWithLink
            img={webDev}
            title={"Web Development"}
            description={
              "Build a website that is user-friendly, visually appealing, and optimized for search engines. "
            }
          />
        </div>
        <div data-aos="fade-down-right">
          <CardWithLink
            img={socialMarketing}
            title={"Social Media Marketing"}
            description={
              "Boost your brand's visibility and engagement on social media platforms."
            }
          />
        </div>
        <div data-aos="fade-down-left">
          <CardWithLink
            img={appDev}
            title={"App Development"}
            description={
              "Build a mobile app that is user-friendly, visually appealing, build the best user experience."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
