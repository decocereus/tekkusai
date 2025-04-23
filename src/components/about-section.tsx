"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

import Link from "next/link";

export default function AboutSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20" id="about" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-bold mb-16 border-b border-gray-800 pb-4"
        >
          About me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-zinc-900/50 rounded-xl p-8 backdrop-blur-sm">
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/tekkusai.heif"
                alt="Profile"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold mb-4"
            >
              Tech enthusiast, Founder of Gaming Peripheral Brands
            </motion.h3>

            <motion.p variants={itemVariants} className="text-gray-300 text-lg">
              Gaming, tech, and innovation; those are the things that drive me,
              and I&apos;m always looking for new ways to push the boundaries of
              what&apos;s possible. I&apos;m obsessed with quality and believe
              that great products should look just as good as they perform.
              Everything I create is for enthusiasts like myself who appreciate
              that same blend of style and function.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <Link
                href="https://x.com/tekkusai"
                target="_blank"
                className="p-2 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  data-astro-cid-vqbephrr=""
                  data-icon="twitter"
                >
                  {" "}
                  <symbol id="ai:local:twitter">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m13.081 10.712-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576 6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576 5.842-6.962m-8.004 9.538L5.077 20.25"
                    ></path>
                  </symbol>
                  <use xlinkHref="#ai:local:twitter"></use>{" "}
                </svg>
              </Link>
              <Link
                href="https://discord.com/invite/hc9ZyFTPrJ"
                target="_blank"
                className="p-2 rounded-full border border-gray-700 hover:bg-white hover:text-black transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.947-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
