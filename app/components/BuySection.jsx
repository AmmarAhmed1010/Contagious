import Image from "next/image";
import React from "react";

const cards = [
  { id: 1, title: "THE BOOK", image: "/section_4/img3.png" },
  { id: 2, title: "THE AUDIO", image: "/section_4/img1.png" },
  { id: 3, title: "THE BUNDLE", image: "/section_4/img2.png" },
];

const BuySection = () => {
  return (
    <div className="py-10">
     <div className="relative text-center text-white mb-10 text-5xl">
  <h1 className="relative z-10">BUY</h1>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="h-[1px] bg-[#FFFFFF66] w-full max-w-[400px]"></div>
  </div>
</div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col  w-full 
              h-[300px]     // Default height for mobile screens
              sm:h-[400px]  // Medium height for tablets
              lg:h-[500px]  // Larger height for desktops justify-between px-4 py-5"
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
