"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface CompanyCardProps {
  name: string;
  description: string;
  image: string;
  logo: string;
  isReversed?: boolean;
  companyLink: string;
  companyTwitterLink: string;
}

export default function CompanyCard({
  name,
  description,
  image,
  logo,
  isReversed = false,
  companyLink,
  companyTwitterLink,
}: Readonly<CompanyCardProps>) {
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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={`grid md:grid-cols-2 gap-12 items-center ${
        isReversed ? "md:grid-flow-dense" : ""
      }`}
    >
      <motion.div
        variants={itemVariants}
        className={`${isReversed ? "md:col-start-2" : ""}`}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={600}
          height={400}
          className="rounded-lg shadow-2xl hover:shadow-orange-500/10 transition-shadow duration-500 object-cover"
        />
      </motion.div>

      <motion.div variants={containerVariants} className="space-y-6">
        <motion.div variants={itemVariants} className="h-12 mb-4">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${name} logo`}
            width={200}
            height={48}
            className="object-contain h-full"
          />
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-300 text-lg">
          {description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 pt-4 text-foreground"
        >
          <Link href={companyLink} target="_blank">
            <Button
              variant="outline"
              className="rounded-full border-gray-700 hover:bg-white hover:text-black transition-all duration-300"
            >
              <LinkIcon className="h-4 w-4" /> Visit
            </Button>
          </Link>
          <Link href={companyTwitterLink} target="_blank">
            <Button
              variant="outline"
              className="rounded-full bg-black transition-all duration-300 text-white hover:bg-gray-900 hover:text-white px-5"
            >
              <svg
                width="28"
                height="28"
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
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
