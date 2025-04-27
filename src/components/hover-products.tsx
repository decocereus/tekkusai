"use client";

import { useCallback, useMemo, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn, PRODUCTS } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";

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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const getClipPath = useCallback(() => {
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
  }, [isHovered, isLeft]);

  const isCurrentlyHovered = useMemo(() => {
    return isHovered === isLeft;
  }, [isHovered, isLeft]);

  const handleMouseEnter = () => {
    if (isDesktop) {
      onHover(isLeft);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      onHover(undefined);
    }
  };

  return (
    <div
      className={cn(
        "relative w-full h-[350px] rounded-lg overflow-hidden",
        "md:absolute md:inset-0 md:h-auto md:rounded-none",
        "transition-all duration-500 ease-in-out"
      )}
      style={isDesktop ? { clipPath: getClipPath() } : {}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-500 ease-in-out origin-center"
        )}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          unoptimized
          className={cn(
            "absolute inset-0 z-0 object-cover opacity-60 transition-transform duration-500 ease-in-out",
            "object-center",
            isLeft ? "md:object-right" : "md:object-left",
            isDesktop && isCurrentlyHovered && "scale-125"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center justify-center p-4",
            "md:inset-auto md:top-1/2 md:-translate-y-1/2 md:items-start md:p-0",
            "gap-y-4 font-medium z-10 max-w-[80%] md:max-w-[40%] transition-transform duration-500 ease-in-out mx-auto",
            isLeft
              ? "md:left-[25%] md:-translate-x-1/2"
              : "md:right-[25%] md:translate-x-1/2",
            isDesktop && isCurrentlyHovered && "scale-105"
          )}
        >
          <p className="text-4xl font-bold text-center md:w-full">{title}</p>
          <p className="text-lg text-center md:w-full">{description}</p>
          <Link href={redirectUrl} target="_blank" className="self-center">
            <Button className="bg-white text-black hover:bg-gray-100 self-center">
              <p className="text-sm">{cta}</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HoverProducts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<boolean | undefined>(
    undefined
  );

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-full md:max-w-2xl h-auto md:h-[400px] flex flex-col gap-4 p-4 md:p-0 md:block md:gap-0 md:rounded-lg md:overflow-clip">
        {PRODUCTS.map((product, index) => (
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
