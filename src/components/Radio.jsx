import React from "react";
import { CardComponent } from "./Card.jsx";
import redfm from "../assets/Radio/redfm.jpg";
import radiomirchi from "../assets/Radio/radiomirchi.png";
import radiocity from "../assets/Radio/radiocity.jpg";
import bigfm from "../assets/Radio/bigfm.png";

function Radio() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-bold text-primary font-secondary underline px-4 mb-8">
          Radio Advertising:
        </h2>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <CardComponent
            img={redfm}
            title="Red FM, Delhi"
            type="Hindi & English"
            description={"3M Listeners"}
          />
          <CardComponent
            img={radiomirchi}
            title="Radio Mirchi, Mumbai"
            type="Hindi"
            description={"4M Listeners"}
          />
          <CardComponent
            img={radiocity}
            title="Radio City, Delhi"
            type="Hindi"
            description={"2M Listeners"}
          />
          <CardComponent
            img={bigfm}
            title="Big FM, Delhi"
            type="Hindi"
            description={"2.5M Listeners"}
          />
          <CardComponent
            img={redfm}
            title="Red FM, Mumbai"
            type="Hindi & Marathi"
            description={"3M Listeners"}
          />
          <CardComponent
            img={radiomirchi}
            title="Radio Mirchi, Delhi"
            type="Hindi"
            description={"4.5M Listeners"}
          />
        </div>
      </div>
    </div>
  );
}

export default Radio;
