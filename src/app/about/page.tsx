"use client";

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function AboutUs() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#111827] to-[#111827]">
      {/* Header Section */}
      <div className="mt-[20px]">
      <Header />
      </div>
         <div className="home h-auto md:h-[400px] w-full flex items-center justify-center relative overflow-hidden">
          {/* Animated Circles */}
          <div className="absolute w-20 h-20 bg-[#255392] rounded-full opacity-30 animate-float1 hidden md:block"></div>
          <div className="absolute w-32 h-32 bg-[#255392] rounded-full opacity-30 animate-float2 hidden md:block"></div>
          <div className="absolute w-24 h-24 bg-[#255392] rounded-full opacity-30 animate-float3 hidden md:block"></div>

          {/* Content Container */}
          <div className="text-center max-w-2xl mx-auto px-4 z-10 py-10 md:py-0">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 font-sans tracking-wide leading-tight">
             About Us
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8"> We are passionate about transforming your images into stunning,
            scalable vectors. Our mission is to make vectorization effortless and
            accessible for everyone. </p>

           

          
          </div>
        </div>


      {/* Values Section */}
      <div className="flex items-center justify-center py-10 bg-white">
        <div className="rounded-2xl w-[90%] md:w-[80%]  shadow-2xl">
          <div className="py-10">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#111827] animate-fade-in">
                Our Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Value 1 */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 animate-fade-in-delay">
                  <h3 className="text-xl font-bold text-center text-gray-900">
                    Innovation
                  </h3>
                  <p className="text-gray-600 text-center mt-2">
                    We constantly push the boundaries of technology to deliver
                    cutting-edge solutions.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 animate-fade-in-delay">
                  <h3 className="text-xl font-bold text-center text-gray-900">
                    Quality
                  </h3>
                  <p className="text-gray-600 text-center mt-2">
                    We are committed to delivering high-quality results that
                    exceed expectations.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 hover:scale-105 animate-fade-in-delay">
                  <h3 className="text-xl font-bold text-center text-gray-900">
                    Accessibility
                  </h3>
                  <p className="text-gray-600 text-center mt-2">
                    We believe in making powerful tools accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#111827] animate-fade-in">
            Our Mission
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto animate-fade-in-delay">
            Our mission is to provide a seamless and powerful tool for converting
            raster images into high-quality vectors. We aim to empower creators,
            designers, and businesses to bring their ideas to life with precision
            and ease.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#111827] animate-fade-in">
            Ready to Transform Your Images?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6 animate-fade-in-delay">
            Start converting your images into stunning vectors today. It's fast,
            easy, and free!
          </p>
          <button className="bg-[#255392] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a3a6b] transition-colors duration-300 animate-fade-in-delay">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default AboutUs;
