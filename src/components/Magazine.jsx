import React from "react";
import { CardComponent } from "./Card.jsx";
import business from "../assets/Magazine/business.png";
import femina from "../assets/Magazine/femina.png";
import forbes from "../assets/Magazine/forbes.png";
import fortune from "../assets/Magazine/fortune.jpg";
import travel from "../assets/Magazine/travel.jpg";
import vogue from "../assets/Magazine/vogue.jpg";

function Magazine() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 bg-[#f4f5ff]">
        <h2 className="text-3xl font-bold text-primary font-secondary underline px-4 mb-8">
          Magazine Advertising:
        </h2>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center lg:px-16">
          <CardComponent
            img={business}
            title="Business Today"
            type="Business Magazine"
            description={"195000"}
          />
          <CardComponent
            img={femina}
            title="Femina"
            type="LifeStyle Magazine"
            description={"178000"}
          />
          <CardComponent
            img={forbes}
            title="Forbes"
            type="Business Magazine"
            description={"75000"}
          />
          <CardComponent
            img={fortune}
            title="Fortune"
            type="Business Magazine"
            description={"80000"}
          />
          <CardComponent
            img={travel}
            title="Travel & Leisure"
            type="Travel Magazine"
            description={"148000"}
          />
          <CardComponent
            img={vogue}
            title="Vogue"
            type="LifeStyle Magazine"
            description={"75000"}
          />
        </div>
      </div>
    </div>
  );
}

export default Magazine;
