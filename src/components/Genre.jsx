import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Genre() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });
  return (
    <div className="container max-h-fit">
      <h2
        data-aos="fade-down"
        className="text-2xl font-bold my-6 font-secondary px-8 ml-8"
      >
        Browse by Genre
      </h2>
      <div className="flex flex-wrap justify-evenly gap-2 ">
        <Link
          data-aos="fade-up"
          to="/digital"
          className="flex flex-col items-center bg-primary px-10 py-8 rounded-md genre-box hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={56}
            viewBox="0 0 24 24"
            className="genre-svg"
          >
            <path
              fill="#0000ff"
              d="M8.254 9c.967 0 1.75.783 1.75 1.75v9.5A1.75 1.75 0 0 1 8.254 22H3.75A1.75 1.75 0 0 1 2 20.25v-9.5C2 9.783 2.784 9 3.75 9zm-2.002 9.495h-.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h.5l.102-.007a.75.75 0 0 0 0-1.486zM19.75 2a2.25 2.25 0 0 1 2.245 2.096L22 4.25v9a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-3.746v2h1.246a.75.75 0 0 1 .102 1.493L17.25 19H11v-1.5h3.504v-2H11v-5a2.5 2.5 0 0 0-2.335-2.495L8.499 8H4V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2z"
            ></path>
          </svg>
          <p>Digital</p>
        </Link>
        <Link
          data-aos="fade-down"
          to="/magazine"
          className="flex flex-col items-center bg-primary px-10 py-8 rounded-md genre-box hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={56}
            viewBox="0 0 24 24"
            className="genre-svg"
          >
            <path
              fill="#0000ff"
              d="M4 6.633q.21-.085.503-.181A9.8 9.8 0 0 1 7.5 6a9.8 9.8 0 0 1 2.997.452q.293.096.503.181v10.88A11.8 11.8 0 0 0 7.5 17c-1.46 0-2.649.248-3.5.513zm8-1.748a9 9 0 0 0-.888-.337A11.8 11.8 0 0 0 7.5 4c-1.526 0-2.755.271-3.612.548a9 9 0 0 0-1.001.389a6 6 0 0 0-.357.18l-.025.014l-.009.005l-.003.002h-.001c-.002.002-.247.147-.002.002A1 1 0 0 0 2 6v13a1 1 0 0 0 1.51.86l-.005.003h.001l.002-.001l.001-.001l.037-.02q.056-.03.182-.09c.17-.078.43-.188.775-.3A9.8 9.8 0 0 1 7.5 19a9.8 9.8 0 0 1 2.997.451a7 7 0 0 1 .775.3a4 4 0 0 1 .223.112m0 0l-.002-.001l-.001-.001c.314.185.704.185 1.018 0l.037-.02q.056-.03.182-.09a7 7 0 0 1 .775-.3A9.8 9.8 0 0 1 16.5 19a9.8 9.8 0 0 1 2.997.451a7 7 0 0 1 .775.3a4 4 0 0 1 .219.11A1 1 0 0 0 22 19V6a1 1 0 0 0-.49-.86l-.002-.001h-.001l-.003-.003l-.01-.005l-.024-.014a6 6 0 0 0-.357-.18a9 9 0 0 0-1-.389A11.8 11.8 0 0 0 16.5 4c-1.525 0-2.755.271-3.612.548a9 9 0 0 0-.888.337m8 1.748v10.88A11.8 11.8 0 0 0 16.5 17c-1.46 0-2.649.248-3.5.513V6.633q.21-.085.503-.181A9.8 9.8 0 0 1 16.5 6a9.8 9.8 0 0 1 2.997.452q.293.096.503.181m.49.228l.005.002h-.001zm0 13l.004.002l-.002-.002"
            ></path>
          </svg>
          <p>Magazine</p>
        </Link>
        <Link
          data-aos="fade-up"
          to="/newspaper"
          className="flex flex-col items-center bg-primary px-10 py-8 rounded-md genre-box"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={56}
            viewBox="0 0 24 24"
            className="genre-svg"
          >
            <path
              fill="#0000ff"
              d="m21.15 3.85l-.82.82l-.95-.96c-.39-.39-1.02-.39-1.42 0l-.96.96l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96l-.96-.96a.996.996 0 0 0-1.41 0l-.96.96l-.96-.96c-.39-.39-1.02-.39-1.42 0L7 4.67l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96l-.82-.82a.5.5 0 0 0-.85.36V19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4.21a.5.5 0 0 0-.85-.36M11 19H4v-6h7zm9 0h-7v-2h7zm0-4h-7v-2h7zm0-4H4V8h16z"
            ></path>
          </svg>
          <p>Newspaper</p>
        </Link>
        <Link
          data-aos="fade-down"
          to="/radio"
          className="flex flex-col items-center bg-primary px-10 py-8 rounded-md genre-box"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={56}
            viewBox="0 0 24 24"
            className="genre-svg"
          >
            <path
              fill="#0000ff"
              d="M4.616 21q-.691 0-1.153-.462T3 19.385V7.842q0-.23.183-.49t.394-.356L14.9 2.385l.342.88L6.031 7h13.354q.69 0 1.152.463T21 8.616v10.769q0 .69-.463 1.153T19.385 21zm3.23-2.616q.877 0 1.496-.619q.62-.619.62-1.496t-.62-1.496t-1.496-.62t-1.496.62t-.62 1.496t.62 1.497t1.496.619M4 11.537h12.5V9.693h1v1.847H20V8.616q0-.231-.192-.424T19.385 8H4.615q-.23 0-.423.192T4 8.616z"
            ></path>
          </svg>
          <p>Radio</p>
        </Link>
        <Link
          data-aos="fade-up"
          to="/tv"
          className="flex flex-col items-center bg-primary px-10 py-8 rounded-md genre-box"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={56}
            height={56}
            viewBox="0 0 256 256"
            className="genre-svg"
          >
            <path
              fill="#0000ff"
              d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69L85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 136h-56V80h56zm-16-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 48a12 12 0 1 1-12-12a12 12 0 0 1 12 12"
            ></path>
          </svg>
          <p>Television</p>
        </Link>
      </div>
    </div>
  );
}

export default Genre;
