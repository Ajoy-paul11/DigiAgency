import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Example(props) {
  var items = [
    {
      name: "Find and buy the best advertising options online",
    },
    {
      name: "Plan your advertising according to your budget",
    },
    {
      name: "Buy best media Ad spaces online in few clicks",
    },
  ];

  return (
    <Carousel className=" flex flex-col" animation="slide">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className=" bg-[#f4f5ff] px-16 ml-16">
      <h2 className=" font-secondary text-lg">{props.item.name}</h2>
    </div>
  );
}

export default Example;
