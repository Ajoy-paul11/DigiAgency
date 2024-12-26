import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function CardComponent({ img, title, type, description }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <Link to="/contact">
      <Card
        data-aos="zoom-in"
        data-aos-delay="200"
        className="mt-6 w-72 bg-primary hover:shadow-xl hover:shadow-[#bdd5e7] hover:scale-105 duration-300"
      >
        <CardHeader className="relative mt-6">
          <img src={img} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-primary">
            {title}
          </Typography>
          <Typography className=" text-primary">
            <span className="font-bold">Type:</span> {type}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex items-center justify-start gap-4">
            <FaUserAlt className="text-primary text-lg" />
            <p className=" text-base text-primary"> {description}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
