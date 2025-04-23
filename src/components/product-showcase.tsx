"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import { RETAILERS } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GradientButton from "./gradient-button";

// Add necessary CSS for the *new* animation
const movingGradientStyle = `
  @keyframes move-gradient-bg {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

interface ProductShowcaseProps {
  title: string;
  subtitle: string;
  price: string;
  preOrderText: string;
  features: string[];
  imagePrimary: string;
  imageSecondary: string;
}

export default function ProductShowcase({
  title,
  subtitle,
  price,
  preOrderText,
  features,
  imagePrimary,
  imageSecondary,
}: Readonly<ProductShowcaseProps>) {
  const [isHovered, setIsHovered] = useState(false);
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
    <section className="py-20 overflow-hidden" ref={ref} id="product-showcase">
      {/* Add the *new* keyframes CSS to the page */}
      <style>{movingGradientStyle}</style>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <motion.div
          variants={itemVariants}
          className="relative h-[500px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-full w-full">
            <motion.div
              animate={{
                opacity: isHovered ? 0 : 1,
                scale: isHovered ? 0.95 : 1,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={imagePrimary || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain rounded-md"
              />
            </motion.div>
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 1.05,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={imageSecondary || "/placeholder.svg"}
                alt={`${title} - alternate view`}
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-2">{title}</h2>
            <p className="text-orange-400">{subtitle}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GradientButton text="See Retailers for Stock" />
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-400">
            {preOrderText}
          </motion.p>

          <motion.ul variants={containerVariants} className="space-y-3">
            <motion.li variants={itemVariants} className="font-bold text-xl">
              {price}
            </motion.li>
            {features.map((feature) => (
              <motion.li
                key={feature}
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="pt-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="text-orange-400 hover:no-underline">
                  <div className="flex items-center gap-2">
                    Official Retailers
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-2 px-0">
                    {RETAILERS.map((retailer) => (
                      <Link
                        key={retailer.code}
                        href={retailer.url}
                        target="_blank"
                        className="inline-block mr-2 hover:outline align-middle hover:outline-2 hover:outline-white"
                      >
                        <Image
                          src={`https://flagcdn.com/${retailer.code}.svg`}
                          width={25}
                          height={15}
                          alt={`${retailer.name} Flag`}
                          className="object-contain"
                        />
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
