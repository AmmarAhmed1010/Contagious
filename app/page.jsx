import Image from "next/image";
import Footer from "./components/Footer";
import BuySection from "./components/BuySection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-black px-4 md:px-10 lg:px-32">
        <Navbar />
        <div className="hero text-white gap-4 flex flex-col md:flex-row justify-between px-4">
          {/* Left Section */}
          <div className="left text-white md:w-1/4 flex flex-col items-center md:items-start">
            {/* Visit YouTube Section */}
            <div
              className="flex flex-col justify-between p-3 rounded-md"
              style={{
                backgroundImage: "url('/navbar/hero1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "177px",
                height: "315px",
              }}
            >
              <div>
                <h1 className="text-lg md:text-xl font-bold">VISIT</h1>
                <h1 className="text-lg md:text-xl font-bold">YOUTUBE</h1>
                <h1 className="text-lg md:text-xl font-bold">CHANNEL</h1>
              </div>
              <div className="flex justify-end">
                <Image
                  src="/navbar/white_arrow.png"
                  alt="White arrow pointing to the right"
                  width={25}
                  height={25}
                />
              </div>
            </div>

            {/* Inspire Section */}
            <div className="flex gap-4 flex-col py-6 text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold">WE INSPIRE</h1>
              <p className="text-sm md:text-base leading-relaxed">
                We empower individuals to recognize their inherent strength and
                overcome adversities through faith-based guidance and support.
              </p>
            </div>
          </div>

          {/* Center Section */}
          <div className="center flex-1 flex-col text-center flex">
            <div className="w-full text-center">
            <h1 className="text-2xl font-bold">AWAKEN YOUR</h1>
            </div>
            <div className="lg:text-start text-center lg:pl-32">

            <h1 className="text-[#7AFFFB] font-serif italic text-4xl sm:text-5xl lg:text-6xl">Divine</h1>
            </div>
            <h1>POWER</h1>
            <h1>DEFEAT THE</h1>
            <div className="w-full justify-center flex">
            <div
              className="flex flex-col rounded-md"
              style={{
                backgroundImage: "url('/section_1/img_vid.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "177px",
                height: "260px",
              }}
              >
              <div>
                <h1 className="text-lg md:text-xl font-bold">ENEMY WITHIN.</h1>
              </div>
             
            </div>
              </div>
              <div >
            <button className="bg-[#07211E] text-sm px-20 py-4 text-white">SCROL DOWN</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="right md:w-1/4 flex flex-col items-center md:items-end">
            {/* Book Cover */}
            <Image
              src="/navbar/hero2.png"
              alt="Book cover"
              width={189}
              height={315}
              className="rounded-md"
            />
            {/* Book Info Section */}
            <div className="flex h-[132px] px-4 bg-[#07211E] py-3 w-[189px] flex-col justify-between  gap-2 mt-4 rounded-md">
              <h1 className="text-xl md:text-2xl font-bold">THE BOOK</h1>
              <div className="flex justify-end items-center gap-3">
                <h1 className="text-lg md:text-xl font-bold">BUY</h1>
                <Image
                  src="/navbar/white_arrow.png"
                  alt="White arrow pointing to the right"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
        {/* section1 */}
          <div className="flex flex-col mt-10 lg:flex-row h-auto text-[white] lg:h-[550px]  justify-between">
            <div className="right flex items-center lg:w-[30%] w-full mr-28">
              <div>
                <h1 className="text-[#7AFFFB] font-serif italic text-4xl sm:text-5xl lg:text-6xl">
                  Read
                </h1>
                <h1 className="text-[20px] mb-2 lg:mb-16">THE BOOK</h1>
                <h1 className="text-xl sm:text-2xl lg:text-[34px] ">
                  AWAKENING THE
                </h1>
                <h1 className="text-xl sm:text-2xl lg:text-[34px] mb-6 lg:mb-10">
                  DIVINE WITHIN.
                </h1>
                <p className="text-[#FFFFFFCC] text-sm lg:text-lg">
                  Unlock your inner power and embrace your divine destiny with
                  practical guidance and transformative insights in Awakening the
                  Divine Within.
                </p>
              </div>
            </div>

            <div className="relative w-1/2 h-[500px]">
              {/* First Div - Small, Top Right */}
              <div
                className="absolute top-0 left-72 z-20"
                style={{
                  backgroundImage: "url('/section_2/img1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "250px",
                  height: "250px",
                }}
              ></div>

              <div className="absolute top-52 px-4 py-2 bg-[#07211E80]  w-[400px]  z-20">
                <h1 className="font-bold mb-8">TESTIMONIAL</h1>
                <div className="w-[210px]">
                  <p className=" mb-8">
                    Life changing. A must read for anyone seeking their true
                    potential.
                  </p>
                </div>
                <h1>SARAH K.</h1>
              </div>
              {/* Second Div - Large, Bottom Left */}
              <div className="absolute bottom-0 w-[300px] h-[400px] right-0 z-10">
                <video
                  className="w-full h-full object-cover"
                  src="/section_2/vid.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </div>
          </div>
        {/* section2 */}
        <div className="flex flex-col-reverse my-10 lg:flex-row h-auto text-[white] lg:h-[550px]  justify-between">
          <div className="relative w-[400px] mt-10 lg:w-[30%] h-[500px]">
            {/* First Div - Small, Top Right */}
            <div
              className="absolute top-0 right-0 z-20"
              style={{
                backgroundImage: "url('/section_2/img1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "250px",
                height: "250px",
              }}
            ></div>

            {/* Second Div - Large, Bottom Left */}
            <div className="absolute bottom-0 lg:w-[300px] w-[200px] h-[300px] lg:h-[400px] left-0 z-10">
              <video
                className="w-full h-full object-cover"
                src="/section_2/vid.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>

          <div className="right flex items-center lg:w-[30%] w-full mr-28">
            <div>
              <h1 className="text-[#7AFFFB] font-serif italic text-4xl sm:text-5xl lg:text-6xl">
                Watch
              </h1>
              <h1 className="text-[20px] mb-2 lg:mb-16">THE SHOW</h1>
              <h1 className="text-xl sm:text-2xl lg:text-[34px] ">
                AWAKENING THE
              </h1>
              <h1 className="text-xl sm:text-2xl lg:text-[34px] mb-6 lg:mb-10">
                DIVINE WITHIN.
              </h1>
              <p className="text-[#FFFFFFCC] text-sm lg:text-lg">
                Uncover your potential. Dive into Awakening the Divine Within on
                YouTube today and ignite your transformation.
              </p>
            </div>
          </div>
        </div>

        {/* section3 */}
        <div className="flex flex-col my-10 lg:flex-row justify-between h-auto lg:h-[500px] relative">
          {/* Left Section */}
          <div className="flex text-white w-full flex-col justify-center">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-[34px]">MEET THE</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-[#7AFFFB] font-serif italic text-4xl sm:text-5xl lg:text-6xl">
                  Author
                </h1>
                {/* Line extending from Author */}
                <div className="h-[1px] bg-white lg:mx-10 flex-1"></div>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-[34px] ml-10 lg:ml-20">
                BEHIND THE
              </h1>
              <h1 className="text-xl sm:text-2xl lg:text-[34px] ml-10 lg:ml-20">
                INSPIRATION.
              </h1>
              <div className="w-full lg:w-[70%]">
                <p className="text-[#FFFFFFCC] mt-10 lg:mt-20 text-sm sm:text-base lg:text-lg">
                  Tyler Jones is a spiritual guide and author dedicated to
                  helping individuals unlock their inner potential and live a
                  fulfilling life. With a background in psychology and
                  spirituality, he brings a unique blend of wisdom and practical
                  insights to his work, inspiring readers to awaken their divine
                  essence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative w-full lg:w-[40%] h-[300px] sm:h-[400px] lg:h-full mt-5 lg:mt-0">
            <Image
              src="/section_3/img1.png"
              alt="Book cover"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image maintains aspect ratio
              className="rounded-md"
            />
          </div>
        </div>
        {/* section4 */}
        <BuySection />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
