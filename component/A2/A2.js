"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./A2.css";
import { CiInstagram, CiMail } from "react-icons/ci";

export default function A2() {
  return (
    <div className="w-full h-fit min-h-screen p-[30px] flex flex-col gap-[30px]">
      <div className="relative w-full">
        <nav className="z-[2] relative w-full px-[20px] py-[20px] border-[4px] border-[#797979] rounded-[10px] flex flex-row justify-between">
          <p className="logo flex flex-col justify-center leading-[20px] text-[40px] text-[#797979] font-[800] tracking-[10px]">
            tette
          </p>

          <div className="w-fit flex flex-col gap-[4px]">
            <div className="h-[50%] min-h-[26px] flex flex-row justify-end items-center gap-[10px]">
              <CiInstagram className="w-[24px] h-[24px]" />
              <CiMail className="w-[24px] h-[24px]" />
            </div>

            <div className="h-[50%] min-h-[26px] flex flex-row">
              <div className="h-[20px] text-center px-[20px] border-l-1 border-dashed">
                TOP
              </div>
              <div className="h-[20px] text-center px-[20px] border-l-1 border-dashed">
                STORIES
              </div>
              <div className="h-[20px] text-center px-[20px] border-l-1 border-dashed">
                PROJECTS
              </div>
              <div className="h-[20px] text-center px-[20px] border-l-1 border-dashed">
                推薦的
              </div>
              <div className="h-[20px] text-center px-[20px] border-l-1 border-dashed">
                科技与生活
              </div>
              <div className="h-[20px] text-center px-[20px] border-l-1 border-r-1 border-dashed">
                最新消息
              </div>
            </div>
          </div>
        </nav>

        <div className="z-[3] relative w-full h-[30px] flex flex-row justify-between items-center">
          <div className="z-[1] h-[38px] w-[10%] border-[4px] border-l-0 border-[#797979] rounded-r-[10px] absolute left-[10px]"></div>

          <div className="z-[0] h-[38px] w-[40%] absolute left-[4%] bg-[#ffffff]"></div>

          <div className="z-[1] h-[38px] w-[80%] border-[4px] border-r-0 border-[#797979] rounded-l-[10px] absolute right-[10px]"></div>
        </div>

        <div className="z-[2] relative w-full px-[20px] py-[20px] border-[4px] border-[#797979] rounded-[10px]">
          <Image
            src="https://fastly.picsum.photos/id/325/4928/3264.jpg?hmac=D_X6AKqCcH8IpWElX5X3dxx11yn7yYO-vPhiKhzRbwI"
            alt=""
            width={4928}
            height={3264}
            className="w-full h-[35vw] object-cover"
          />
        </div>
      </div>

      <div className="w-full flex flex-row gap-[24px]">
        <div className="w-full h-[200px] px-[20px] py-[20px] border-[4px] border-[#797979] rounded-[10px] flex flex-col justify-center items-center">
          推薦的
        </div>
        <div className="w-full h-[200px] px-[20px] py-[20px] border-[4px] border-[#797979] rounded-[10px] flex flex-col justify-center items-center">
          推薦的
        </div>
        <div className="w-full h-[200px] px-[20px] py-[20px] border-[4px] border-[#797979] rounded-[10px] flex flex-col justify-center items-center">
          推薦的
        </div>
        <div className="w-full h-[200px] px-[20px] py-[20px] border-[4px] border-[#797979] rounded-[10px] flex flex-col justify-center items-center">
          推薦的
        </div>
      </div>

      <div className="relative w-full">
        <nav className="z-[2] relative w-full px-[20px] py-[20px] border-[4px] border-[#797979] rounded-[10px] flex flex-row justify-between">

        </nav>

        <div className="z-[3] relative w-full h-[30px] flex flex-row justify-between items-center">
          <div className="z-[1] h-[38px] w-[10%] border-[4px] border-l-0 border-[#797979] rounded-r-[10px] absolute left-[10px]"></div>

          <div className="z-[0] h-[38px] w-[40%] absolute left-[4%] bg-[#ffffff]"></div>

          <div className="z-[1] h-[38px] w-[80%] border-[4px] border-r-0 border-[#797979] rounded-l-[10px] absolute right-[10px]"></div>
        </div>

        <div className="z-[2] relative w-full px-[20px] py-[20px] border-[4px] border-[#797979] rounded-[10px]">

        </div>
      </div>
    </div>
  );
}
