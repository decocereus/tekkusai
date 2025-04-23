import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import GradientButton from "./gradient-button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 w-full">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <radialGradient
                  id="Gradient1"
                  cx="50%"
                  cy="50%"
                  fx="0.441602%"
                  fy="50%"
                  r=".5"
                >
                  <animate
                    attributeName="fx"
                    dur="34s"
                    values="0%;3%;0%"
                    repeatCount="indefinite"
                  ></animate>
                  <stop offset="0%" stopColor="rgba(255, 122, 61, 0.5)"></stop>
                  <stop offset="100%" stopColor="rgba(255, 122, 61, 0)"></stop>
                </radialGradient>
                <radialGradient
                  id="Gradient2"
                  cx="50%"
                  cy="50%"
                  fx="2.68147%"
                  fy="50%"
                  r=".5"
                >
                  <animate
                    attributeName="fx"
                    dur="23.5s"
                    values="0%;3%;0%"
                    repeatCount="indefinite"
                  ></animate>
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)"></stop>
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)"></stop>
                </radialGradient>
                <radialGradient
                  id="Gradient3"
                  cx="50%"
                  cy="50%"
                  fx="0.836536%"
                  fy="50%"
                  r=".5"
                >
                  <animate
                    attributeName="fx"
                    dur="21.5s"
                    values="0%;3%;0%"
                    repeatCount="indefinite"
                  ></animate>
                  <stop offset="0%" stopColor="rgba(255, 122, 61, 0.25)"></stop>
                  <stop offset="100%" stopColor="rgba(255, 122, 61, 0)"></stop>
                </radialGradient>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#Gradient1)"
              >
                <animate
                  attributeName="x"
                  dur="20s"
                  values="25%;0%;25%"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  dur="21s"
                  values="0%;25%;0%"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="17s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#Gradient2)"
              >
                <animate
                  attributeName="x"
                  dur="23s"
                  values="0%;-25%;0%"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  dur="24s"
                  values="25%;-25%;25%"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="18s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#Gradient3)"
              >
                <animate
                  attributeName="x"
                  dur="25s"
                  values="-25%;0%;-25%"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  dur="26s"
                  values="0%;-25%;0%"
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 50 50"
                  to="0 50 50"
                  dur="19s"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="relative px-4 py-1 overflow-hidden rounded-full border border-slate-500/30 bg-black/30 backdrop-blur-sm">
                <span className="relative z-10 text-slate-400 font-medium">
                  Premium Gaming Peripherals
                </span>
                <div className="absolute inset-0 flex">
                  <div className="h-full w-1/2 bg-gradient-to-r from-transparent to-slate-500/10 animate-[shimmer_2s_infinite]"></div>
                  <div className="h-full w-1/2 bg-gradient-to-l from-transparent to-slate-500/10 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Precision
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
                Performance
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Perfection
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-lg">
              Where innovation meets performance. Premium products for
              enthusiasts who demand excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#product-showcase" scroll={true}>
                <GradientButton text="Explore Products" />
              </Link>
              <Link href="#about" scroll={true}>
                <Button className=" bg-black hover:bg-transparent text-white font-medium px-8 py-6 border border-white/20 hover:border-white/40 shadow-lg rounded-full">
                  <span className="">Our Story</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full bg-orange-500/10 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[60%] h-[60%] rounded-full border border-orange-500/20 animate-[spin_20s_linear_infinite]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[40%] h-[40%] rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>
              </div>

              <div className="relative h-full w-full animate-[float_6s_ease-in-out_infinite]">
                <Image
                  src="https://imagedelivery.net/O23G1A9SLo-A5s0I6mXQGA/f2b1fc19-04b0-481c-910f-99587b6a1500/1440"
                  alt="Featured Gaming Mousepad"
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,122,61,0.3)] rounded-lg"
                />
              </div>
            </div>

            {/* Tech specs floating elements */}
            <div className="absolute z-10 top-[10%] -right-[5%] bg-black/50 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2 text-xs animate-[float_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span>Premium Glass Surface</span>
              </div>
            </div>

            <div className="absolute  bottom-[20%] -left-[5%] bg-black/50 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2 text-xs animate-[float_5s_ease-in-out_infinite_1s]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span>Precision-Engineered</span>
              </div>
            </div>

            <div className="absolute z-10 top-[5%] -left-[5%] bg-black/50 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2 text-xs animate-[float_5s_ease-in-out_infinite_1s]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span>Smooth, balanced glide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
