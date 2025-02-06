"use client";
import React, { useEffect, useState } from "react";
import imgExpired from "../../../../public/images/expired.svg"
export default function ContTimeDown() {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    localStorage.setItem("countTimeDown", "January 15, 2025 11:13:00");
  }, []);
  const calcTimeDown = () => {
    let savedTime = localStorage.getItem("countTimeDown");
    let endTime = new Date(savedTime);
    let now = new Date();
    let difference = endTime - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(calcTimeDown, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex xs:flex-row-reverse lg:flex-col justify-between md:p-0 order-1 min-w-80">
      <div className="bg-darkOrange px-7 text-white md:py-5 md:px-3 w-[200px] lg:w-[100%] relative flex flex-col items-center justify-center sm:mt-4 lg:mt-0   before-content-[''] before:absolute before:z-[-1] before:w-[100%] before:h-[100%] before:bg-black before:translate-x-[.65rem] before:translate-y-[.5rem] lg:before:hidden">
        <span className="text-3xl md:text-6xl text-center">
          70%
        </span>
        <span className="text-xl md:text-3xl text-center md:text-white">
          OFF
        </span>
      </div>

      <div className="flex xs:flex-col md:flex-row  items-center gap-2 py-2 px-2  ">
        <img src={imgExpired.src} alt="..." />
        <p className="text-2xl font-bold flex  flex-1">
          <span>{timeLeft.days}</span> <span>d</span> :
          <span>{timeLeft.hours}</span> <span>h</span> :
          <span>{timeLeft.minutes}</span> <span>m</span> :
          <span>{timeLeft.seconds}</span> <span>s</span>
        </p>
      </div>
    </div>
  );
}
