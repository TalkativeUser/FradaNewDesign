"use client";
import { usePathname } from 'next/navigation';
import BannerCollection from './components/BannerCollection';
import Collections from './components/Collections';
// import "../public/scss/main.scss";
// import WOW from "../../../utlis/wow";

import Features from './components/Features'
import Hero from './components/Hero';
import { useEffect , useState } from 'react';



export default function WraperComps() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    setScrollDirection("up");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Close any open offcanvas
    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (scrollDirection == "up") {
        header.style.top = "33px";
      } else {
        header.style.top = "-185px";
      }
    }
  }, [scrollDirection]);



useEffect(() => {
  const WOW = require("../../../utlis/wow");
  const wow = new WOW.default({
    mobile: false,
    live: false,
  });
  wow.init();
}, [pathname]);

  return (
    <div>
      <Hero />  
      <Collections />
      {/* <BannerCollection /> */}
      <Features />
    </div>
  )
}
