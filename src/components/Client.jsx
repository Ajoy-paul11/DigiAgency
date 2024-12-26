import React, { useEffect } from "react";
import client1 from "../assets/clients/client-1.png";
import client2 from "../assets/clients/client-2.png";
import client3 from "../assets/clients/client-3.png";
import client4 from "../assets/clients/client-4.png";
import client5 from "../assets/clients/client-5.png";
import client6 from "../assets/clients/client-6.png";
import client7 from "../assets/clients/client-7.png";
import client8 from "../assets/clients/client-8.png";
import Marquee from "react-fast-marquee";

import Aos from "aos";
import "aos/dist/aos.css";

function Client() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });
  return (
    <div id="clients" className=" w-full">
      <div
        data-aos="zoom-in"
        className=" py-4 bg-[#f4f5ff] max-w-screen-2xl mx-auto my-4"
      >
        <h2 className=" text-3xl font-bold text-primary font-secondary underline text-center mb-6 py-4">
          Our Clients
        </h2>
        <Marquee pauseOnHover={true} className="flex items-center">
          <img className=" w-28 mr-20" src={client1} alt="client-logo" />
          <img className=" w-28 mr-20" src={client2} alt="client-logo" />
          <img className=" w-28 mr-20" src={client3} alt="client-logo" />
          <img className=" w-28 mr-20" src={client4} alt="client-logo" />
          <img className=" w-28 mr-20" src={client5} alt="client-logo" />
          <img className=" w-28 mr-20" src={client6} alt="client-logo" />
          <img className=" w-28 mr-20" src={client7} alt="client-logo" />
          <img className=" w-28 mr-20" src={client8} alt="client-logo" />
        </Marquee>
      </div>
    </div>
  );
}

export default Client;
