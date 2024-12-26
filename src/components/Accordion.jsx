import React, { useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function AccordionComponent() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className=" my-16">
      <h2
        data-aos="slide-down"
        className=" text-3xl font-bold text-primary font-secondary underline text-center my-8"
      >
        Frequently Asked Questions
      </h2>
      <div className=" w-full my-4 grid grid-cols-1 gap-8 md:grid-cols-2 bg-primary p-8">
        <Accordion
          data-aos="slide-left"
          className=" px-4 bg-[#f4f5ff] rounded"
          open={open === 1}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader
            className=" text-primary font-semibold"
            onClick={() => handleOpen(1)}
          >
            Digital Marketing Strategy
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
            There are many strategy for digital marketing. We are here to help
            you. We are here to help you. Digital presence is the key to success
            for a business.
          </AccordionBody>
        </Accordion>
        <Accordion
          data-aos="slide-right"
          className=" px-4 bg-[#f4f5ff] rounded"
          open={open === 2}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader
            className=" text-primary font-semibold"
            onClick={() => handleOpen(2)}
          >
            How to do Digital Marketing Plan
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
            We are here to help you. Digital presence is the key to success for
            a business. Marketing plan is a detailed plan that outlines the
            goals, objectives, and actions that are needed to achieve a specific
            outcome.
          </AccordionBody>
        </Accordion>
        <Accordion
          data-aos="slide-left"
          className=" px-4 bg-[#f4f5ff] rounded"
          open={open === 3}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader
            className=" text-primary font-semibold"
            onClick={() => handleOpen(3)}
          >
            What services are available?
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
            We are provide the best services for you. These services are SEO,
            Web Development, Social Media Marketing, App Development, and more.
            Based on demand and budget we will provide you the best services.
          </AccordionBody>
        </Accordion>
        <Accordion
          data-aos="slide-right"
          className=" px-4 bg-[#f4f5ff] rounded"
          open={open === 4}
          icon={<Icon id={4} open={open} />}
        >
          <AccordionHeader
            className=" text-primary font-semibold"
            onClick={() => handleOpen(4)}
          >
            How to higher your conversion rate?
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
            Conversion rate is the percentage of visitors who convert into
            customers. It based on the number of visitors and the number of
            sales. We are here to help you. We helped many companies to increase
            their conversion rate.
          </AccordionBody>
        </Accordion>
        <Accordion
          data-aos="slide-left"
          className=" px-4 bg-[#f4f5ff] rounded"
          open={open === 5}
          icon={<Icon id={5} open={open} />}
        >
          <AccordionHeader
            className=" text-primary font-semibold"
            onClick={() => handleOpen(5)}
          >
            How to keep your website secure?
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
            To keep your website secure, you need to have a strong password, use
            SSL certificates, and have regular backups. For these we have a team
            of experts to help you.
          </AccordionBody>
        </Accordion>
        <Accordion
          data-aos="slide-right"
          className=" px-4 bg-[#f4f5ff] rounded"
          open={open === 6}
          icon={<Icon id={6} open={open} />}
        >
          <AccordionHeader
            className=" text-primary font-semibold"
            onClick={() => handleOpen(6)}
          >
            Traditional Marketing vs Digital Marketing
          </AccordionHeader>
          <AccordionBody className=" text-primary text-base">
            Traditional marketing is the old way of marketing. It is based on
            physical contact with customers and it is used to sell products or
            services. Digital marketing is the new way of marketing. It is based
            on online platforms and it is used to sell products or services.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionComponent;
