import React from "react";
import { CardComponent } from "./Card.jsx";
import facebook from "../assets/DigitalMedia/facebook.png";
import instagram from "../assets/DigitalMedia/Insta.jpg";
import youtube from "../assets/DigitalMedia/youtube.jpg";
import linkedin from "../assets/DigitalMedia/linkedIn.png";
import hotstar from "../assets/DigitalMedia/hotstar.png";
import dailyhunt from "../assets/DigitalMedia/dailyhunt.jpg";

function Digital() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-bold text-primary font-secondary underline px-4 mb-8">
          Digital Media Platforms:
        </h2>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <CardComponent
            img={facebook}
            title="Facebook"
            type="Social Media"
            description={"400M Monthly Active Users"}
          />
          <CardComponent
            img={instagram}
            title="Instagram"
            type="Social Media"
            description={"300M Monthly Active Users"}
          />
          <CardComponent
            img={youtube}
            title="Youtube"
            type="Social Media"
            description={"800M Monthly Active Users"}
          />
          <CardComponent
            img={linkedin}
            title="Performance Marketing"
            type="Social Media"
            description={"70M Monthly Active Users"}
          />
          <CardComponent
            img={hotstar}
            title="Hotstar"
            type="OTT Platform"
            description={"100M Monthly Active Users"}
          />
          <CardComponent
            img={dailyhunt}
            title="Dailyhunt"
            type="News Platform"
            description={"50M Monthly Active Users"}
          />
        </div>
      </div>
    </div>
  );
}

export default Digital;
