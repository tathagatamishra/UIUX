"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./A2.css";
import { CiInstagram, CiMail } from "react-icons/ci";

export default function A2() {
  return (
    <div className="w-full h-fit min-h-screen p-[30px]">
      <div className="w-full">
        <nav className="w-full px-[20px] py-[20px] border-[4px] border-[#797979] rounded-[10px] flex flex-row justify-between">
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

        <div></div>
      </div>

      <div></div>

      <div></div>
    </div>
  );
}
