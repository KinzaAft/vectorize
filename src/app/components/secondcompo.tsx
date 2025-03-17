"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component

interface BoxData {
  [key: string]: {
    title: string;
    listItems: string[];
    images: {
      sketch1: string;
      sketch2: string;
    };
  };
}

const Secondcompo: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState<string>("box1");

  const boxData: BoxData = {
    box1: {
      title: "Sketches",
      listItems: [
        "Instantly redraw your old-school drawings, diagrams, and anime characters.",
        "Recreate and refine your creation with SVG Converter's powerful, superfast processing algorithms.",
        "Digitize scanned sketches with the help of grayscale filter.",
      ],
      images: {
        sketch1: "/ske1.jpg",
        sketch2: "/ski2.svg",
      },
    },
    box2: {
      title: "Photos",
      listItems: [
        "Convert your photos into high-quality vectors with our powerful tools.",
        "Enhance image quality and resolution with advanced algorithms.",
        "Preserve details and colors during the vectorization process.",
      ],
      images: {
        sketch1: "/ski3.webp",
        sketch2: "/ski4.svg",
      },
    },
    box3: {
      title: "Signature",
      listItems: [
        "Digitize your signature and make it scalable for professional use.",
        "Ensure high precision and clarity in every stroke.",
        "Export your signature in multiple formats for versatile use.",
      ],
      images: {
        sketch1: "/ski5.jpg",
        sketch2: "/ski6.svg",
      },
    },
    box4: {
      title: "Designs",
      listItems: [
        "Transform your designs into vectors for seamless scalability.",
        "Edit and customize vector designs with ease.",
        "Export designs in SVG, AI, and PDF formats.",
      ],
      images: {
        sketch1: "/ski7.png",
        sketch2: "/ski8.svg",
      },
    },
    box5: {
      title: "Art",
      listItems: [
        "Create and edit scalable vector logos for your brand.",
        "Ensure your logo looks sharp at any size.",
        "Export logos in multiple formats for print and web.",
      ],
      images: {
        sketch1: "/ski10.avif",
        sketch2: "/ski11.svg",
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-auto py-10 md:h-screen">
      <div className="w-full max-w-[1200px] h-auto md:h-[600px] bg-white rounded-2xl shadow-2xl mx-4 md:mx-0">
        {/* Boxes */}
        <div className="images-box p-4 md:p-10 flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-28">
          {Object.keys(boxData).map((boxId) => (
            <div
              key={boxId}
              className="flex flex-col justify-center items-center text-center cursor-pointer"
              onClick={() => setSelectedBox(boxId)}
            >
                <div className={`${boxId} h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[90px] md:w-[90px] rounded-lg`}></div>              <p className="font-bold text-sm sm:text-base md:text-[20px] mt-2">
                {boxData[boxId].title}
              </p>
            </div>
          ))}
        </div>

        {/* Section */}
        <div className="section flex flex-col md:flex-row p-4 md:p-0">
          {/* Left Section */}
          <div className="sec-one w-full md:w-[50%]">
            <p className="text-lg sm:text-xl md:text-[24px] font-bold ml-4 md:ml-[60px] mt-6 md:mt-[70px]">
              {boxData[selectedBox].title}
            </p>
            <ol className="list-none space-y-3 ml-4 md:ml-[40px] mt-4 md:mt-[30px]">
              {boxData[selectedBox].listItems.map((item, index) => (
                <li
                  key={index}
                  className="relative pl-8 before:content-['✔️'] before:absolute before:left-0 before:text-green-500 before:text-lg sm:before:text-xl"
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>

          {/* Right Section */}
          <div className="sec-two w-full md:w-[50%] flex flex-col md:flex-row justify-center items-center md:justify-between mt-6 md:mt-0">
            {/* Sketch 1 */}
            <div className="sketch1 h-[230px] w-[190px] md:h-[300px] md:w-[250px] rounded-lg overflow-hidden mt-8 md:mt-0">
              <Image
                src={boxData[selectedBox].images.sketch1}
                alt="Sketch 1"
                width={250}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Sketch 2 */}
            <div className="sketch2 h-[230px] w-[190px] md:h-[300px] md:w-[250px] rounded-lg overflow-hidden mt-8 md:mt-0 md:ml-[30px]">
              <Image
                src={boxData[selectedBox].images.sketch2}
                alt="Sketch 2"
                width={250}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondcompo;
