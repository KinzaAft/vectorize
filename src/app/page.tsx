'use client';;
import { useState } from 'react'; // Import useState for handling file state
import Header from './components/header';
import Image, { StaticImageData } from 'next/image';

import Secondcompo from './components/secondcompo';
import Footer from './components/footer';

export default function Home() {
  const [file, setFile] = useState<File | null>(null); // State to store the uploaded file

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile); // Save the file to state
      console.log('File uploaded:', uploadedFile);
      // Add your file processing logic here
    }
  };

  return (
    <div className="h-auto">
      <div className="bg-gradient-to-r h-[700px] md:h-[900px] from-[#111827] to-[#111827] pt-[20px]">
        <Header />
        <div className="home h-auto md:h-[600px] w-full flex items-center justify-center relative overflow-hidden">
          {/* Animated Circles */}
          <div className="absolute w-20 h-20 bg-[#255392] rounded-full opacity-30 animate-float1 hidden md:block"></div>
          <div className="absolute w-32 h-32 bg-[#255392] rounded-full opacity-30 animate-float2 hidden md:block"></div>
          <div className="absolute w-24 h-24 bg-[#255392] rounded-full opacity-30 animate-float3 hidden md:block"></div>

          {/* Content Container */}
          <div className="text-center max-w-2xl mx-auto px-4 z-10 py-10 md:py-0">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 font-sans tracking-wide leading-tight">
              Effortless SVG Conversion – Transform Images into Scalable Vectors!
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8">
              SVG Converter is a free online vectorizer to convert your raster images, PNG, JPG/JPEG, BMP, TIFF, WEBP, AVIF, PDF to vector graphics, SVG, AI, EPS, PDF. It generates high-quality, full-color vectors without losing details, making it the best free online image tracer. Upload, convert, download & enjoy it for free.
            </p>

            {/* File Upload Dropbox */}
            <div className="flex items-center justify-center">
              <label
                htmlFor="file-upload"
                className="bg-[#255392] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-[#1a3a6b] transition-colors duration-300 cursor-pointer"
              >
                Upload Image
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>

            {/* Display uploaded file name */}
            {file && (
              <div className="mt-4 text-white">
                <p>Uploaded File: {file.name}</p>
              </div>
            )}
          </div>
        </div>

        <Secondcompo />
        <div className="h-auto p-[10px]">
          <p className="text-center font-bold text-2xl md:text-[30px] mt-[20px]">
            What Features We Provide?
          </p>
          <p className="text-center text-neutral-600 mt-[6px] text-base md:text-[17px]">
            Transform your raster images into stunning vectors effortlessly with just a few clicks!
          </p>
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {skillData.map((IData, index) => (
              <div
                key={index}
                className="h-[250px] w-full sm:w-[400px] rounded-2xl shadow-2xl mt-[20px] bg-white flex flex-col items-center justify-center text-center p-4 transform transition-transform duration-300 hover:scale-105 animate-fade-in-delay "
              >
                {IData.image && (
                  <Image
                    src={IData.image}
                    alt="Feature Image"
                    width={92}
                    height={72}
                    className="rounded-md"
                  />
                )}
                <p className="text-lg font-semibold mt-2">{IData.tittle}</p>
                <p className="text-gray-600 mt-1">{IData.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
