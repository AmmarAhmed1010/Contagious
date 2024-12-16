import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-black px-32">
        <nav className="items-center py-8 flex justify-between">
          <div className="logo">
            <Image
              src="/navbar/logo.png" // Path to the image file
              alt="Description of the image" // Accessible text
              width={134} // Desired width
              height={204} // Desired height
            />
          </div>

          <ul className="flex font-normal text-white gap-10">
            <li>THE BOOK</li>
            <li>THE SHOW</li>
            <li>THE AUTHOR</li>
            <li>BUY</li>
          </ul>

          <button className="bg-[#07211E] text-white px-20 py-4">
            CONTACT
          </button>
        </nav>

        <div className="hero text-white gap-4 flex justify-between">
          {/* Left Section */}
          <div className="left text-white w-[308px]">
            <div
              className="flex flex-col justify-between px-2 py-3"
              style={{
                backgroundImage: "url('/navbar/hero1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "177px",
                height: "315px",
              }}
            >
              <div>
                <h1>VISIT</h1>
                <h1>YOUTUBE</h1>
                <h1>CHANNEL</h1>
              </div>
              <div className="flex justify-end">
                <Image
                  src="/navbar/white_arrow.png"
                  alt="Description of the image"
                  width={25}
                  height={25}
                />
              </div>
            </div>
            <div className="flex gap-6 flex-col py-8">
              <h1>WE INSPIRE</h1>
              <p>
                We empower individuals to recognize their inherent strength and
                overcome adversities through faith-based guidance and support.
              </p>
            </div>
          </div>

          {/* Center Section */}
          <div className="center flex-1 flex items-center justify-center">
            <h1>AWAKEN YOUR</h1>
          </div>

          {/* Right Section */}
          <div className="right p-1">
            <Image
              src="/navbar/hero2.png"
              alt="Book cover"
              width={189}
              height={315}
            />
            <div className="flex h-[132px] px-2 bg-[#07211E] py-1 w-full flex-col justify-between gap-1 mt-2">
              <h1>THE BOOK</h1>
              <div className="flex justify-end items-center gap-3">
                <h1 className="text-[20px] font-bold">BUY</h1>
                <Image
                  src="/navbar/white_arrow.png"
                  alt="Description of the image"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="px-10  py-8">
        <div className="bg-[#07211E] rounded-2xl px-20 py-10">
          <div className="top"></div>
          <div className="center flex justify-between text-white">
            <div>
              <h1 className="font-bold pb-4">Quick links</h1>
              <ul className="text-sm flex flex-col gap-3">
                <li>Home</li>
                <li>About Us</li>
                <li>The Book</li>
                <li>The Show</li>
                <li>The Author</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold pb-4">Contact</h1>
              <ul className="text-sm flex flex-col gap-3">
                <li>Faqs</li>
                <li>Contact Us</li>
                <li>Help</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold pb-4" >Support</h1>
              <ul className="text-sm flex flex-col gap-3">
                <li>Sitemap</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="bottom flex items-center justify-between">
            <h1 className="text-gray-400 text-[18px]">
              © Copyright 2024 | Contagious Power | All Rights Reserved.
            </h1>
            <div className="flex gap-2">
              <div className="bg-black w-[55px] rounded-[50%] flex justify-center items-center h-[55px]">
                <Image
                  src="/footer/fb.png"
                  alt="Description of the image"
                  width={20}
                  height={20}
                />
              </div>
              <div className="bg-black w-[55px] rounded-[50%] flex justify-center items-center h-[55px]">
                <Image
                  src="/footer/link.png"
                  alt="Description of the image"
                  width={20}
                  height={20}
                />
              </div>
              <div className="bg-black w-[55px] rounded-[50%] flex justify-center items-center h-[55px]">
                <Image
                  src="/footer/insta.png"
                  alt="Description of the image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
