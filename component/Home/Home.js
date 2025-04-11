"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };

  const projects = [
    {
      name: "A1",
      path: "/a1",
      image:
        "https://i.pinimg.com/1200x/f5/7b/58/f57b58ba880dee0460b6dad5d6f7bb17.jpg",
    },
    {
      name: "A2",
      path: "/a2",
      image:
        "https://i.pinimg.com/1200x/af/be/40/afbe40308504f5afc6f9e6066e0aee98.jpg",
    },
  ];

  return (
    <div className="w-full h-fit min-h-screen sm:p-[50px] p-[20px]">
      <div className="w-full h-fit flex flex-wrap gap-[2px]">
        {projects.map((project, index) => (
          <div key={index} className="relative w-auto h-[200px] cursor-pointer hover:scale-150 hover:z-50 transition-all duration-300">
            <Image
              onClick={() => navigate(project.path)}
              src={project.image}
              alt={project.name}
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
