import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Message sent Successfully");
    reset();
    navigate("/");
  };

  return (
    <div id="contact" className="w-full py-16 lg:px-32">
      <div>
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-primary font-secondary underline text-center mb-2"
        >
          Contact
        </h2>
        <p
          data-aos="fade-up"
          className="text-center text-primary font-semibold text-lg mt-4 mb-8"
        >
          We are always here to help you
        </p>
        <div className=" lg:flex lg:gap-6 lg:justify-center bg-[#f4f5ff] p-8 rounded-lg">
          <div
            data-aos="slide-left"
            className=" lg:w-[40%] flex flex-col gap-6 border-t-2 border-b-2 border-[#000080] py-8 font-secondary text-primary"
          >
            <div data-aos="fade-up" className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 bg-primary rounded-md">
                <FaLocationDot />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className=" text-xl font-semibold">Address</h3>
                <p className=" text-lg ">
                  1234 Street Name, City Name, United States
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 bg-primary rounded-md">
                <IoCall />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className=" text-xl font-semibold">Phone</h3>
                <p className=" text-lg ">+1 123 456 7890</p>
              </div>
            </div>
            <div data-aos="fade-down" className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 bg-primary rounded-md">
                <MdOutlineMailOutline />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className=" text-xl font-semibold">Email</h3>
                <p className=" text-lg">brandname@example.com</p>
              </div>
            </div>
          </div>
          <div
            data-aos="slide-right"
            className=" lg:w-[60%] p-6 border-t-2 border-b-2 border-[#000080] py-8 font-secondary text-primary"
          >
            <Card color="transparent" shadow={false}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" mb-2 w-80 max-w-screen-lg sm:w-96"
              >
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-3 text-primary"
                  >
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Enter your name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register("name", { required: true })}
                  />
                  <Typography variant="h6" className="-mb-3 text-primary">
                    Your Email
                  </Typography>
                  <Input
                    size="md"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register("email", { required: true })}
                  />
                  <Typography variant="h6" className="-mb-3 text-primary">
                    Message
                  </Typography>
                  <Textarea
                    size="md"
                    label="Message"
                    {...register("message", { required: true })}
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-6  bg-orange-600 hover:bg-orange-500 hover:shadow hover:shadow-orange-500 text-lg text-[#f4f5ff] rounded-xl px-4 py-2  transition-all duration-300"
                  fullWidth
                >
                  Send
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
