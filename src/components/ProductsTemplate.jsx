import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import CtaButton from "./CtaButton.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function ProductsTemplate() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });
  const location = useLocation();
  const [img, setImg] = useState(
    location.state?.img || localStorage.getItem("selectedImage")
  );

  useEffect(() => {
    if (img) {
      localStorage.setItem("selectedImage", img);
    }
  }, [img]);
  return (
    <div>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100 bg-[#f4f5ff]">
        <div className="flex md:flex-row flex-col items-start justify-center gap-10">
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="md:w-2/3 p-5 md:p-0"
          >
            <img className="" src={img} alt="product-image" />
          </div>
          <div className="md:w-1/3 flex flex-col gap-10 p-5 md:p-0">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="shadow-xl border-2 p-8"
            >
              <h1 className="text-3xl font-semibold text-primary">
                Project Information
              </h1>
              <div className="h-[1px] mt-3 bg-primary"></div>
              <ul className="mt-3">
                <li>
                  <span className="font-semibold ">Category:</span> Software
                </li>
                <li>
                  <span className="font-semibold ">Client:</span> USA
                </li>
                <li>
                  <span className="font-semibold ">Project Date:</span>{" "}
                  {new Date().getFullYear()}
                </li>
                <li>
                  <span className="font-semibold ">Project Url:</span>{" "}
                  <span className="text-primary">www.example.com</span>
                </li>
              </ul>
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <h1 className="text-3xl font-semibold text-primary">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                dicta mollitia, labore deserunt repellat temporibus animi
                pariatur accusamus enim unde rerum id qui beatae neque,
                perferendis maxime facilis nulla quos saepe iste non optio quam
                in! Dolorem hic nulla porro?
              </p>
            </div>
            <div className="flex items-center justify-center mt-3">
              <Link to="/contact" className="">
                <CtaButton name={"Hire Us"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsTemplate;
