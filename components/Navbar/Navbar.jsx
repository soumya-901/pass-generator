"use client";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Navbar.css"; // Import your CSS file for Navbar styling
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to handle scroll event and toggle sticky class
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <nav className={`bg-white ${isSticky ? "sticky" : ""}`}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image
            src={Logo}
            alt="logo"
            className="md:cursor-pointer"
            style={{ width: "200px", height: "auto" }}
          />

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <span onClick={() => setOpen(false)}>✕</span>
            ) : (
              <span onClick={() => setOpen(true)}>☰</span>
            )}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <p to="/" className="py-7 px-3 inline-block">
              TOPICS
            </p>
          </li>
          <li>
            <p to="/" className="py-7 px-3 inline-block">
              TOOLS
            </p>
          </li>
          <li>
            <p to="/" className="py-7 px-3 inline-block">
              REVIEWS
            </p>
          </li>
          <li>
            <p to="/" className="py-7 px-3 inline-block">
              CONTACT
            </p>
          </li>
        </ul>
        <div className="py-5 gap-5 hidden sm:flex">
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaTwitter size={20} />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <p to="/" className="py-7 px-3 inline-block">
              TOPICS
            </p>
          </li>
          <li>
            <p to="/" className="py-7 px-3 inline-block">
              TOOLS
            </p>
          </li>
          <li>
            <p to="/" className="py-7 px-3 inline-block">
              REVIEWS
            </p>
          </li>
          <li>
            <p to="/" className="py-7 px-3 inline-block">
              CONTACT
            </p>
          </li>
          <div className="py-5 flex gap-3">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
