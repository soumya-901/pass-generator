import React from "react";
import footerLogo from "../assets/logo-white.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="footer-logo py-10 mb-6 md:mb-0">
          <Image src={footerLogo} alt="Logo" className="w-52 md:w-64" />
        </div>
        <div className="footer-links flex flex-wrap justify-center">
          <a href="#" className="mx-4 hover:text-blue-400 transition-colors">
            Cookie Policy
          </a>
          <a href="#" className="mx-4 hover:text-blue-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="mx-4 hover:text-blue-400 transition-colors">
            Terms and Conditions
          </a>
          <a href="#" className="mx-4 hover:text-blue-400 transition-colors">
            Terms of Use
          </a>
          <a href="#" className="mx-4 hover:text-blue-400 transition-colors">
            FTC Disclosure
          </a>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          Copyright © 2023 SEO Horizon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
