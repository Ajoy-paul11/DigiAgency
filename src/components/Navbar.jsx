import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import CtaButton from "./CtaButton.jsx";
import Logo from "../assets/Logo.gif";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-medium primary-font"
      >
        <Link
          to="/"
          className="flex items-center hover:text-blue-500 hover:underline hover:scale-110 duration-300 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-medium primary-font"
      >
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={1200}
          className="flex items-center hover:text-blue-500 hover:underline hover:scale-110 duration-300 transition-colors"
        >
          Portfolio
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-medium primary-font"
      >
        <ScrollLink
          to="clients"
          smooth={true}
          duration={1500}
          className="flex items-center hover:text-blue-500 hover:underline hover:scale-110 duration-300 transition-colors"
        >
          Clients
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-medium primary-font"
      >
        <ScrollLink
          to="services"
          smooth={true}
          duration={1000}
          className="flex items-center hover:text-blue-500 hover:underline hover:scale-110 duration-300 transition-colors"
        >
          Services
        </ScrollLink>
      </Typography>
      <ScrollLink to="contact" smooth={true} duration={2000}>
        <CtaButton name={"Contact"} />
      </ScrollLink>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-2xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h3"
          className="mr-4 cursor-pointer py-1.5 primary-font text-primary"
        >
          <Link to={"/"}>
            <span className="font-bold text-orange-600">𝓓𝓲𝓰𝓲</span>𝓐𝓰𝓮𝓷𝓬𝔂
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
