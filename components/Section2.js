import React from "react";

const Section2 = () => {
  return (
    <div
      className="OurFeatures relative flex flex-col items-center lg:flex-row lg:py-14 px-4"
    >
      <div className="flex-grow">
        <div className="fimage">
          <img
            src="images/our-features.png"
            className="object-cover w-full h-full"
            alt="imgs"
          />
        </div>
      </div>
      <div className="max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 lg:pl-16">
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          BENnefits
        </span>
        <h2 className="font-semibold text-4xl mt-5">Happening cities </h2>
        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <span className="inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-blue-800 bg-blue-100  ">
              Advertising
            </span>
            <span className="block text-xl font-semibold">
              Cost-effective advertising
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              With a free listing, you can advertise your rental with no upfront
              costs
            </span>
          </li>
          <li className="space-y-4">
            <span className="inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-green-800 bg-green-100  ">
              Exposure{" "}
            </span>
            <span className="block text-xl font-semibold">
              Reach millions with Chisfis
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Millions of people are searching for unique places to stay around
              the world
            </span>
          </li>
          <li className="space-y-4">
            <span className="inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-red-800 bg-red-100 ">
              Secure
            </span>
            <span className="block text-xl font-semibold">Secure and simple</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              A Holiday Lettings listing gives you a secure and easy way to take
              bookings and payments online
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section2;
