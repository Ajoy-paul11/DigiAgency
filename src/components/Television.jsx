import React from "react";
import { CardComponent } from "./Card.jsx";
import aajtak from "../assets/TV/aajtak.jpg";
import colors from "../assets/TV/colors.jpg";
import sony from "../assets/TV/sony.jpg";
import sonysab from "../assets/TV/sonysab.png";
import starplus from "../assets/TV/starplus.jpg";
import suntv from "../assets/TV/suntv.jpg";

function Television() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-bold text-primary font-secondary underline px-4 mb-8">
          Radio Advertising:
        </h2>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <CardComponent
            img={aajtak}
            title="Aaj Tak"
            type="News"
            description={"19.5M Viewership"}
          />
          <CardComponent
            img={colors}
            title="Colors"
            type="Entertainment"
            description={"40M Viewership"}
          />
          <CardComponent
            img={sony}
            title="Sony Entertainment"
            type="Entertainment"
            description={"30M Viewership"}
          />
          <CardComponent
            img={sonysab}
            title="SONY SAB"
            type="Entertainment"
            description={"40M Viewership"}
          />
          <CardComponent
            img={starplus}
            title="STAR Plus"
            type="Entertainment"
            description={"40M Viewership"}
          />
          <CardComponent
            img={suntv}
            title="Sun TV"
            type="Entertainment"
            description={"33M Viewership"}
          />
        </div>
      </div>
    </div>
  );
}

export default Television;
