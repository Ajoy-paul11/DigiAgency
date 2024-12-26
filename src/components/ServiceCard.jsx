import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function CardWithLink({ img, title, description }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Card className="mt-6 w-72 text-primary font-secondary transform transition-transform duration-300 hover:-translate-y-5">
      <CardBody>
        <div>
          <img
            src={img}
            alt="service-icon"
            className="w-[138px] bg-blend-overlay"
          />
        </div>
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={handleOpen}
          size="sm"
          variant="text"
          className="flex items-center gap-2  text-primary"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
        <Dialog open={open} handler={handleOpen} className="bg-[#f4f5ff]">
          <DialogHeader className="text-primary">
            These services are available
          </DialogHeader>
          <DialogBody className=" text-base text-black">
            Social Media Marketing, SEO, Web Development, App Development are
            used interact with your audience. These services are available. To
            generate traffic and leads for your business we can help. These
            Social Media tools plays a vital role in your business visibility.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Done</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
