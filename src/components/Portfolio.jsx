import React, { useEffect } from "react";
import brand1 from "../assets/portfolio/branding-1.jpg";
import brand2 from "../assets/portfolio/branding-2.jpg";
import brand3 from "../assets/portfolio/branding-3.jpg";
import app1 from "../assets/portfolio/app-1.jpg";
import app2 from "../assets/portfolio/app-2.jpg";
import app3 from "../assets/portfolio/app-3.jpg";
import product1 from "../assets/portfolio/product-1.jpg";
import product2 from "../assets/portfolio/product-2.jpg";
import product3 from "../assets/portfolio/product-3.jpg";
import { DefaultGallery } from "./GalleryComponent";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });
  const navigate = useNavigate();

  const handleImageClick = (img) => {
    localStorage.setItem("selectedImage", img);
    navigate("/portfolio-product");
  };

  return (
    <div id="portfolio" className="w-full max-h-fit">
      <div className="py-8 my-4">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-primary font-secondary underline text-center mb-4"
        >
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 bg-primary p-8">
          <div data-aos="slide-right" onClick={() => handleImageClick(brand1)}>
            <DefaultGallery img={brand1} />
          </div>
          <div data-aos="slide-up" onClick={() => handleImageClick(brand2)}>
            <DefaultGallery img={brand2} />
          </div>
          <div data-aos="slide-left" onClick={() => handleImageClick(brand3)}>
            <DefaultGallery img={brand3} />
          </div>
          <div data-aos="slide-right" onClick={() => handleImageClick(app1)}>
            <DefaultGallery img={app1} />
          </div>
          <div data-aos="slide-up" onClick={() => handleImageClick(app2)}>
            <DefaultGallery img={app2} />
          </div>
          <div data-aos="slide-left" onClick={() => handleImageClick(app3)}>
            <DefaultGallery img={app3} />
          </div>
          <div
            data-aos="slide-right"
            onClick={() => handleImageClick(product1)}
          >
            <DefaultGallery img={product1} />
          </div>
          <div data-aos="slide-up" onClick={() => handleImageClick(product2)}>
            <DefaultGallery img={product2} />
          </div>
          <div data-aos="slide-left" onClick={() => handleImageClick(product3)}>
            <DefaultGallery img={product3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
