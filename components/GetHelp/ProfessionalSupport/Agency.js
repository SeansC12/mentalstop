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
          whileHover={{ opacity: 0.7, zIndex: -5 }} // bug: hover makes the z index become auto and for some reason increase and overlap navbar
          className="bg-white min-h-[380px] rounded-2xl flex justify-start items-center h-full flex-col cursor-pointer p-5 md:p-10 shadow-lg -z-10"
          onClick={() => {
            setSelectedHelpline();
          }}
        >
          <img src={imageLink} className="object-contain w-[70%] h-[75%]"></img>
          <div className="font-lora text-[#577AAF] text-2xl">{name}</div>
          <div className="font-Inter text-[#577AAF]">{openingHours}</div>
        </motion.div>
      )}
    </div>
  );
}

export default Agency;
