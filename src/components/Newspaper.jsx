import React from "react";
import { CardComponent } from "./Card.jsx";
import economic from "../assets/Newspaper/economic.jpg";
import hindu from "../assets/Newspaper/hindu.jpg";
import hindustan from "../assets/Newspaper/hindustan.jpg";
import midday from "../assets/Newspaper/midday.jpg";
import nbt from "../assets/Newspaper/nbt.jpg";
import toi from "../assets/Newspaper/toi.jpg";

function Newspaper() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-bold text-primary font-secondary underline px-4 mb-8">
          Newspaper Advertising:
        </h2>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <CardComponent
            img={economic}
            title="The Economic Times"
            type="English Daily"
            description={"500000"}
          />
          <CardComponent
            img={toi}
            title="The Times of India"
            type="English Daily"
            description={"1200000"}
          />
          <CardComponent
            img={hindu}
            title="The Hindu"
            type="English Daily"
            description={"400000"}
          />
          <CardComponent
            img={hindustan}
            title="Hindustan Times"
            type="English Daily"
            description={"700000"}
          />
          <CardComponent
            img={midday}
            title="Mid-Day"
            type="English Daily"
            description={"350000"}
          />
          <CardComponent
            img={nbt}
            title="Navbharat Times"
            type="Hindi Daily"
            description={"148000"}
          />
        </div>
      </div>
    </div>
  );
}

export default Newspaper;
