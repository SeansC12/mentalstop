import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Agency({ details, selectedHelpline, setSelectedHelpline }) {
  const router = useRouter();
  const { name, openingHours, imageLink, link } = details;
  return (
    <div>
      {selectedHelpline ? (
        <div></div>
      ) : (
        <motion.div
          whileHover={{ opacity: 0.7 }}
          className="bg-white rounded-2xl flex justify-start items-center h-full flex-col cursor-pointer"
          onClick={() => {
            setSelectedHelpline();
          }}
        >
          <img src={imageLink} className="object-contain w-[70%] h-[75%]" />
          <div className="font-lora text-[#577AAF] text-2xl">{name}</div>
          <div className="font-Inter text-[#577AAF]">{openingHours}</div>
        </motion.div>
      )}
    </div>
  );
}

export default Agency;
