"use client";
import DeleteButton from "@/app/components/DeleteButton";
import { motion } from "framer-motion";

export default function AnimateIn({ children, direction = "left" }) {
  let startX = direction === "left" ? "-25%" : "25%";
  console.log(startX, children);
  return (
    <motion.div
      initial={{ opacity: 0, x: startX, scale: 0.7 }}
      whileInView={{ opacity: 1, x: "0%", scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      {
        <h1 className=" delay-75 text-center text-9xl  place-content-evenly relative p-56 my-44 bg-yellow-200 border-2 rounded-full ">
          <p className=" animate-bounce ">404 - Page Not Found</p>
          <p className="text-5xl text-pretty"> (҂◡_◡) ᕤ</p>
        </h1>
      }
    </motion.div>
  );
}
