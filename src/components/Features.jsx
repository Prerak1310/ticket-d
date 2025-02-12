import React from "react";
import { Link } from "react-router-dom";
import { TicketIcon, TagIcon } from "./Icons";
import a from "./images/a.jpg";
import b from "./images/b.jpg";
import event from "./images/Event.jpg";
import bitcoin from "./images/bitcoin.jpg";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

const SectionInfo = [
  {
    title: "Secure Transactions",
    heading: "Blockchain-powered Security",
    description:
      " TICKET'D leverages the power of blockchain technology to ensure secure and transparent ticket transactions,protecting both event organizers and attendees.",
    src: bitcoin,
    isWhite: false,
  },
  {
    title: "Dynamic Pricing",
    heading: "Flexible Pricing Options",
    description:
      "TICKET'D allows event organizers to implement dynamic pricing, enabling them to adjust ticket prices based on demand and market conditions.",
    src: b,
    isWhite: true,
  },
  {
    title: "Event Management",
    heading: "Seamless Event Management",
    description:
      "TICKET'D provides a comprehensive event management platform, allowing organizers to easily manage ticket sales, attendee check-in, and event analytics.",
    src: event,
    isWhite: false,
  },
];

const FeatureSection = ({ title, heading, description, src, isWhite }) => {
  const image = useRef(null);
  const { scrollYProgress } = useScroll({
    target: image,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section
      className={clsx("w-full py-12 md:py-24 lg:py-32 ", {
        "bg-white": isWhite === true,
        "bg-gray-100": !isWhite,
      })}
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-400 px-3 py-1 text-sm">
                {title}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {heading}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}{" "}
              </p>
            </div>
            <div className="flex mb-8 items-center gap-4">
              <TagIcon className="h-8 w-8 text-blue-600" />
              <span className="text-lg font-medium py-4">{title}</span>
            </div>
          </div>
        </div>
        <motion.div
          style={{
            opacity,
            rotateX,
            transformPerspective: "800px",
          }}
        >
          <img
            ref={image}
            src={src}
            width="550"
            height="310"
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center">
          <TicketIcon className="h-6 w-6" />
          <span className="sr-only">TICKET'D</span>
        </Link>
        <nav className="ml-auto flex gap-4 mr-5 sm:gap-6 items-center">
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>

          <Link
            to="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
          <div className="inline-flex gap-2 items-center rounded-md bg-blue-600 p-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            <Link
              to="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Login
            </Link>
            /
            <Link
              to="/signup"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center items-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionize Your Event Ticketing with TICKET'D
                  </h1>
                  <p className="max-w-[600px] text-center text-gray-500 md:text-xl">
                    Secure, dynamic, and seamless event management on the
                    blockchain.
                  </p>
                </div>
                <div className="flex flex-col justify-center  gap-2 min-[400px]:flex-row">
                  <Link
                    to="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src={a}
                width="550"
                height="550"
                alt="Hero"
                className="w-full max-w-[300px] h-auto mx-auto rounded-xl object-cover sm:max-w-[400px] lg:order-last"
              />
            </div>
          </div>
        </section>
        {SectionInfo.map(({ title, heading, description, src, isWhite }) => (
          <FeatureSection
            key={title}
            title={title}
            heading={heading}
            description={description}
            src={src}
            isWhite={isWhite}
          />
        ))}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          &copy; 2024 TICKET'D. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link to="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Features;
