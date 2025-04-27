"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Product = ({
  title,
  description,
  cta,
  redirectUrl,
  imageUrl,
  isLeft,
  isHovered,
  onHover,
}: {
  title: string;
  description: string;
  cta: string;
  redirectUrl: string;
  imageUrl: string;
  isLeft: boolean;
  isHovered: boolean | undefined;
  onHover: (isHovered: boolean | undefined) => void;
}) => {
  const getClipPath = () => {
    let topStart = 55;
    let bottomStart = 45;

    if (isHovered === true) {
      topStart = 70;
      bottomStart = 60;
    } else if (isHovered === false) {
      topStart = 40;
      bottomStart = 30;
    }

    if (isLeft) {
      return `polygon(0% 0%, ${topStart}% 0%, ${bottomStart}% 100%, 0% 100%)`;
    } else {
      return `polygon(${topStart}% 0%, 100% 0%, 100% 100%, ${bottomStart}% 100%)`;
    }
  };

  const contentPosition = isLeft
    ? "left-[25%] -translate-x-1/2"
    : "right-[25%] translate-x-1/2";

  const isCurrentlyHovered = isHovered === isLeft;

  return (
    <div
      className={cn(
        "absolute inset-0 transition-all duration-500 ease-in-out overflow-hidden"
      )}
      style={{ clipPath: getClipPath() }}
      onMouseEnter={() => onHover(isLeft)}
      onMouseLeave={() => onHover(undefined)}
    >
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-500 ease-in-out origin-center transform-preserve-3d"
        )}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          unoptimized
          className={cn(
            "absolute inset-0 z-0 object-cover opacity-60 transition-transform duration-500 ease-in-out",
            isLeft ? "object-right" : "object-left",
            isCurrentlyHovered && "scale-125"
          )}
        />
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 flex flex-col items-center text-center justify-center gap-y-4 font-medium z-10 max-w-[40%] transition-transform duration-500 ease-in-out",
            contentPosition,
            isCurrentlyHovered && "scale-105"
          )}
        >
          <p className="text-4xl font-bold">{title}</p>
          <p className="text-lg">{description}</p>
          <Link href={redirectUrl} target="_blank">
            <Button className="bg-white text-black hover:bg-gray-100">
              <p className="text-sm">{cta}</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    title: "Singularity",
    description: "Founders Edition",
    cta: "Learn More",
    redirectUrl: "#",
    imageUrl:
      "https://imagedelivery.net/O23G1A9SLo-A5s0I6mXQGA/f2b1fc19-04b0-481c-910f-99587b6a1500/1440",
  },
  {
    title: "Lucid",
    description: "Hear everything. Miss nothing.",
    cta: "Discover Lucid",
    redirectUrl: "#",
    imageUrl: "/lucid.jpeg",
  },
];

const HoverProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<boolean | undefined>(
    undefined
  );

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full max-w-2xl h-[500px] md:h-[400px] rounded-lg overflow-clip">
        {products.map((product, index) => (
          <Product
            key={product.title}
            {...product}
            isLeft={index === 0}
            isHovered={hoveredIndex}
            onHover={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default HoverProducts;
