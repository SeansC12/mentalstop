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
          className="bg-white rounded-2xl flex justify-stretch items-center h-full min-h-[232px] flex-col cursor-pointer text-center px-3"
          onClick={() => {
            setSelectedHelpline();
          }}
        >
          <img
            src={imageLink}
            className="object-contain w-[70%] h-[75%] grow"
          />
          <div className="flex justify-center items-center grow flex-col">
            <div className="font-lora text-[#577AAF] text-lg md:text-xl lg:text-2xl">
              {name}
            </div>
            <div className="font-lora text-[#577AAF] text-base md:text-lg lg:text-xl">
              {openingHours}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Agency;
