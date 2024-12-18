import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="px-4 md:px-10 py-8">
        <div className="bg-[#07211E] rounded-2xl px-4 md:px-20 py-10">
          {/* Top Section */}
          <div className="top flex flex-wrap justify-between mb-16 gap-10">
            {/* Left Content */}
            <div className="left text-white text-2xl md:text-4xl flex flex-col">
              <h1>EMPOWER YOUR</h1>
              <h1 className="pt-1">DIVINE POTENTIAL</h1>
              <div className="flex items-center space-x-3 mt-2">
                <h1>TODAY.</h1>
                <img
                  src="/footer/footer_arrow.png"
                  alt="Arrow Icon"
                  width={50}
                  height={50}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="right text-white w-full md:w-auto">
              <div className="mb-4 text-[#FFFFFF99] text-sm">
                <h1>Subscribe to our</h1>
                <div className="flex items-center gap-2">
                  <h1>newsletter and keep</h1>
                  <div className="h-[1px] bg-white flex-1"></div>
                </div>
                <h1>in touch with us</h1>
              </div>
              <div className="flex items-center bg-[#010707] px-3 py-2 gap-2 rounded-3xl">
                <div className="bg-[#07211E] flex items-center px-3 py-1 rounded-2xl w-full md:w-auto">
                  <h6 className="text-sm text-[#FFFFFF99] truncate">
                    Hello@company.com
                  </h6>
                </div>
                <div className="bg-[#07211E] px-3 py-1 rounded-2xl w-full md:w-auto text-center">
                  <h1>Subscribe</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="center flex flex-wrap justify-between pb-4 border-b-2 border-b-[#FFF] text-white">
            <div className="w-1/2 md:w-auto mb-6 md:mb-0">
              <h1 className="font-bold pb-4">Quick links</h1>
              <ul className="text-sm flex flex-col gap-3">
                <li>Home</li>
                <li>About Us</li>
                <li>The Book</li>
                <li>The Show</li>
                <li>The Author</li>
              </ul>
            </div>
            <div className="w-1/2 md:w-auto mb-6 md:mb-0">
              <h1 className="font-bold pb-4">Contact</h1>
              <ul className="text-sm flex flex-col gap-3">
                <li>Faqs</li>
                <li>Contact Us</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="w-full md:w-auto">
              <h1 className="font-bold pb-4">Support</h1>
              <ul className="text-sm flex flex-col gap-3">
                <li>Sitemap</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom flex flex-wrap items-center justify-between pt-8">
            <h1 className="text-gray-400 text-sm md:text-[18px] text-center w-full md:w-auto mb-4 md:mb-0">
              © Copyright 2024 | Contagious Power | All Rights Reserved.
            </h1>
            <div className="flex gap-2 justify-center md:justify-start w-full md:w-auto">
              <div className="bg-black w-[45px] md:w-[55px] rounded-full flex justify-center items-center h-[45px] md:h-[55px]">
                <FaFacebookF className="text-white text-xl" />
              </div>
              <div className="bg-black w-[45px] md:w-[55px] rounded-full flex justify-center items-center h-[45px] md:h-[55px]">
                <FaLinkedinIn className="text-white text-xl" />
              </div>
              <div className="bg-black w-[45px] md:w-[55px] rounded-full flex justify-center items-center h-[45px] md:h-[55px]">
                <FaInstagram className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
