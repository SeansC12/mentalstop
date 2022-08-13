import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Agency({ details }) {
  const router = useRouter();
  const { name, openingHours, imageLink, link } = details;
  return (
    <motion.div
      whileHover={{ opacity: 0.7 }}
      className="bg-white rounded-2xl flex justify-start items-center flex-col cursor-pointer"
      onClick={() => router.push(link)}
    >
      <img src={imageLink} className="object-contain w-[70%] h-[75%]"></img>
      <div className="font-lora text-[#577AAF] text-2xl">{name}</div>
      <div className="font-Inter text-[#577AAF]">{openingHours}</div>
    </motion.div>
  );
}

export default Agency;
