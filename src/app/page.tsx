"use client";

import HeaderSection from "@/components/portifolio/sections/header-section";
import ProjectsSection from "@/components/portifolio/sections/projects-section";
import ToolsSection from "@/components/portifolio/sections/tools-section";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Brush,
  Code,
  Cog,
  Github,
  Link2,
  LucideArrowBigDown,
  LucideArrowDown,
  Mail,
  MoveDown,
  ScreenShare,
  Scroll,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <main className="h-no-nav flex flex-col p-1 py-2">
      <HeaderSection />
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold my-2">
          Interfaces / systems i created
        </h1>
        <Carousel
          className="w-screen-semi"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <img
                src="/projects/enemdb.jpeg"
                alt="enemdb"
                className="w-full h-full object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/projects/enemdb-questionpage.jpeg"
                alt="enemdb"
                className="w-full h-full object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/projects/lumin-ui.jpeg"
                alt="lumin-ui"
                className="w-full h-full object-cover rounded-lg"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/projects/lumin-ui-sidebar.jpeg"
                alt="lumin-ui"
                className="w-full h-full object-cover rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="bg-background rounded translate-y-8 mt-5">
        <ToolsSection />
        <div className="w-[5px] amin-blob bg-primary min-h-[20rem] blur-[10px] mx-auto rounded drop-shadow-glow" />
        <ProjectsSection />
      </div>
    </main>
  );
}
