"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";

const GradientButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="relative group">
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1500 group-hover:duration-1000 animate-[move-gradient-bg_8s_linear_infinite]"
          style={{ backgroundSize: "400% 400%" }}
        ></div>
        <Button
          className="relative rounded-full px-8 py-6 bg-black hover:bg-black text-white z-10"
          onClick={onClick}
        >
          {text}
        </Button>
      </div>
    </motion.div>
  );
};

export default GradientButton;
