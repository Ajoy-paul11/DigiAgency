import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function DefaultGallery({ img }) {
  return (
    <Link to="/portfolio-product" className=" hover:cursor-pointer  box-link">
      <img
        className="h-80 w-full max-w-full rounded-lg object-cover object-center transition-all duration-300 hover:opacity-50 hover:scale-105"
        src={img}
        alt="portfolio-photo"
      />
      <div className=" link">
        <FaLink size={"45px"} className=" text-primary" />
      </div>
    </Link>
  );
}
