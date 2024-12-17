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
        We empower individuals to recognize their inherent strength and overcome adversities through faith-based guidance and support.
      </p>
    </div>
  </div>

  {/* Center Section */}
  <div className="center flex-1 flex items-center justify-center text-center">
    <h1 className="text-3xl md:text-5xl font-bold">AWAKEN YOUR</h1>
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
    <div className="flex h-[132px] px-4 bg-[#07211E] py-3 w-full flex-col justify-between items-center md:items-end gap-2 mt-4 rounded-md">
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
      


    <div className="text-white h-auto flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="left w-full md:w-1/2 h-[400px] md:h-[752px] relative">
        <Image
          src="/section_1/img2.png"
          alt="A descriptive image for the left section"
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Maintains aspect ratio and covers the area
          quality={100} // Ensures high-quality rendering
          className="rounded-md" // Adds a slight border radius
        />
      </div>

      {/* Right Section */}
      <div className="right w-full md:w-1/2 h-[400px] md:h-[752px] relative">
        <Image
          src="/section_1/img1.png"
          alt="A descriptive image for the right section"
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Maintains aspect ratio and covers the area
          quality={100} // Ensures high-quality rendering
          className="rounded-md" // Adds a slight border radius
        />
      </div>
    </div>
 


export default Section;


        {/* section4 */}
        <BuySection />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
