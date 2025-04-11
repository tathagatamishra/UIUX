"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function A1() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [hoveredPage, setHoveredPage] = useState("Home");

  return (
    <div className="w-full h-fit min-h-screen pt-[10vh] pb-[10vh] flex justify-center items-start bg-[#ed3c1f] font-[family-name:var(--font-geist-sans)]">
      <div className="w-[80vw] max-w-[1111px] h-fit p-[10px] border-1 rounded-[10px]">
        <div className="w-full h-fit p-[30px] rounded-[10px] bg-[#ebe1ce]">
          <nav className="w-full h-fit flex flex-row justify-between">
            <div className="w-fit min-w-[46px] h-fit outline-2 outline-[#000] rounded-[3px] grid grid-cols-2 grid-rows-2 gap-[2px] p-[2px]">
              <p className="w-[20px] h-[20px] leading-[20px] text-center font-[600] text-[#ed3c1f]">
                A
              </p>
              <p className="w-[20px] h-[20px] leading-[20px] text-center font-[600] text-[#ed3c1f]">
                B
              </p>
              <p className="w-[20px] h-[20px] leading-[20px] text-center font-[600] text-[#ed3c1f]">
                C
              </p>
              <p className="w-[20px] h-[20px] leading-[20px] text-center font-[600] text-[#ed3c1f]">
                D
              </p>
            </div>

            <div className="h-[30px] w-full max-w-[340px] text-[14px] text-right whitespace-nowrap line flex flex-row justify-around items-center">
              <div
                className={`${
                  currentPage === "Home" ? "text-[#ed3c1f]" : "text-[#282323]"
                } transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentPage("Home")}
              >
                Home
                <div
                  className={`${
                    currentPage === "Home"
                      ? "w-[15px] border-b-2 border-[black]"
                      : "w-[0px]"
                  } h-[2px] transition-all duration-300`}
                ></div>
              </div>
              <div
                className={`${
                  currentPage === "Menu" ? "text-[#ed3c1f]" : "text-[#282323]"
                } transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentPage("Menu")}
              >
                Menu
                <div
                  className={`${
                    currentPage === "Menu"
                      ? "w-[15px] border-b-2 border-[black]"
                      : "w-[0px]"
                  } h-[2px] transition-all duration-300`}
                ></div>
              </div>
              <div
                className={`${
                  currentPage === "Our Story"
                    ? "text-[#ed3c1f]"
                    : "text-[#282323]"
                } transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentPage("Our Story")}
              >
                Our Story{" "}
                <div
                  className={`${
                    currentPage === "Our Story"
                      ? "w-[15px] border-b-2 border-[black]"
                      : "w-[0px]"
                  } h-[2px] transition-all duration-300`}
                ></div>
              </div>
              <div
                className={`${
                  currentPage === "Contact Us"
                    ? "text-[#ed3c1f]"
                    : "text-[#282323]"
                } transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentPage("Contact Us")}
              >
                Contact Us{" "}
                <div
                  className={`${
                    currentPage === "Contact Us"
                      ? "w-[15px] border-b-2 border-[black]"
                      : "w-[0px]"
                  } h-[2px] transition-all duration-300`}
                ></div>
              </div>
            </div>
          </nav>

          <section className="w-full h-[calc(100vh - 46px)] pt-[20px] flex flex-row justify-center items-start gap-[20px]">
            <div className="w-[50%] min-h-[100px] pt-[40px] flex flex-col gap-[20px]">
              <p className="text-[30px] text-[#ed3c1f] font-[700]">
                ありがとう
              </p>

              <div className="w-[80px] h-[0px] p-0 relative">
                <svg
                  width="200"
                  height="20"
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[40%]"
                >
                  <path
                    d="M 0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10"
                    stroke="#282323"
                    fill="transparent"
                    strokeWidth="4"
                  />
                </svg>
              </div>

              <p className="text-[30px] text-[#282323] font-[800]">
                A BOWL OF LOVE FROM{" "}
                <span className="text-[#ed3c1f] font-[800]">
                  JAPANESE CUISINE
                </span>
                <br /> FOR YOU
              </p>

              <p className="text-[#282323] text-[14px]">
                Noodles are a staple of Japanese cuisine. They are often served
                chilled with dipping sauces, or in soups or hot dishes. Noodles
                were introduced to Japan from China during the Song Dynasty
                between the Heian until the early Kamakura period.
              </p>

              <button className="relative w-[150px] h-[40px] p-0 bg-[transparent] rounded-[5px] border-2 border-[#282323] cursor-pointer">
                <div className="absolute w-[150px] h-[40px] flex flex-row justify-center items-center text-[#ebe1ce] bg-[#ed3c1f] hover:bg-[#ed3c1f] border-2 border-[#ed3c1f] rounded-[5px] top-[-7px] left-[4px] active:top-[-2px] active:left-[-1px] transition-all duration-300">
                  Order Now
                </div>
              </button>
            </div>

            <Image
              src={"/raman.png"}
              alt={"raman"}
              width={720}
              height={720}
              className="object-contain max-h-[480px] w-[50%] max-w-[480px]"
            />
          </section>

          <footer className="w-full pt-[30px] flex flex-row items-center gap-[30px] text-[14px]">
            <a className="text-[#ed3c1f] cursor-pointer">Instagram</a>
            <a className="text-[#ed3c1f] cursor-pointer">Facebook</a>
            <a className="text-[#ed3c1f] cursor-pointer">Twitter</a>
            <div className="w-full h-[1px] border-1 border-[#ed3c1f]"></div>
          </footer>
        </div>
      </div>
    </div>
  );
}
