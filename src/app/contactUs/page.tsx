"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#111827] to-[#111827]">
      {/* Header Section */}
      <div className="mt-[20px]">
            <Header />
            </div>
      {/* Hero Section */}
      <div className="home h-auto md:h-[400px] w-full flex items-center justify-center relative overflow-hidden">
        {/* Animated Circles */}
        <div className="absolute w-20 h-20 bg-[#255392] rounded-full opacity-30 animate-float1 hidden md:block"></div>
        <div className="absolute w-32 h-32 bg-[#255392] rounded-full opacity-30 animate-float2 hidden md:block"></div>
        <div className="absolute w-24 h-24 bg-[#255392] rounded-full opacity-30 animate-float3 hidden md:block"></div>

        {/* Content Container */}
        <div className="text-center max-w-2xl mx-auto px-4 z-10 py-10 md:py-0">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 font-sans tracking-wide leading-tight">
            Contact Us
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8">
            Have questions or need assistance? We're here to help! Reach out to
            us anytime.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center py-10 bg-white">
        {/* Contact Details */}
        <div className="w-full lg:w-1/2 p-6">
          <div className="bg-gray-50 rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#255392] mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="text-gray-700">support@vectorize.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#255392] mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <p className="text-gray-700">+92 (123) 456-7890</p>
              </div>

              {/* Address */}
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#255392] mr-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  Clifton, Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 p-6">
          <div className="bg-gray-200 rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.248632881055!2d67.0282763150027!3d24.86192898405463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9b4f0e8c1d%3A0x6b2f4e8e4f0e8c1e!2sClifton%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1633033228933!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#111827]">
            Ready to Transform Your Images?
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
            Start converting your images into stunning vectors today. It's fast,
            easy, and free!
          </p>
          <button className="bg-[#255392] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a3a6b] transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}