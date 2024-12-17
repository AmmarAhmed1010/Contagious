import React from "react";

const Section2 = () => {
  return (
    <div className="my-10 flex flex-col sm:flex-row justify-between">
      {/* Left Section */}
      <div className="left w-full sm:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] mb-4 sm:mb-0">
        <div
          className="w-full h-full rounded-lg"
          style={{
            backgroundImage: `url('/section_2/img1.png')`,
            backgroundPosition: "center", // Keeps the center of the image in view
            backgroundRepeat: "no-repeat", // Prevents repeating the image
          }}
        ></div>
      </div>

      {/* Right Section */}
      <div className="right w-full sm:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
        <div
          className="w-full h-full rounded-lg"
          style={{
            backgroundImage: `url('/section_2/img2.png')`,
            backgroundPosition: "center", // Keeps the center of the image in view
            backgroundRepeat: "no-repeat", // Prevents repeating the image
          }}
        ></div>
      </div>
    </div>
  );
};

export default Section2;
