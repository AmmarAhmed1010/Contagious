import Image from "next/image";
import Footer from "./components/Footer";
import BuySection from "./components/BuySection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-black px-4 md:px-10 lg:px-32">
        <Navbar/>

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

        {/* section4 */}
        <BuySection />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
