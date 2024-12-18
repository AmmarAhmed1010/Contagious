import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const cards = [
  { id: 1, title: "THE BOOK", image: "/section_4/img3.png" },
  { id: 2, title: "THE AUDIO", image: "/section_4/img1.png" },
  { id: 3, title: "THE BUNDLE", image: "/section_4/img2.png" },
];

const BuySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="py-10">
      {/* Heading Section */}
      <div className="relative text-center text-white mb-10 text-5xl">
        <h1 data-aos="fade-down" className="relative z-10">
          BUY
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated Line */}
          <div
            className="h-[1px] bg-[#FFFFFF66] w-0 max-w-[400px] 
            animate-lineExpand"
          ></div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
        {cards.map((card) => (
          <div
            data-aos="fade-up"
            key={card.id}
            className="flex flex-col w-full h-[300px] sm:h-[400px] lg:h-[500px] justify-between px-4 py-5"
            style={{
              backgroundImage: `url('${card.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <h1 className="text-white text-lg font-semibold">{card.title}</h1>
            </div>
            <div className="flex justify-end">
              <Image
                src="/navbar/white_arrow.png"
                alt="Arrow Icon"
                width={25}
                height={25}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySection;
