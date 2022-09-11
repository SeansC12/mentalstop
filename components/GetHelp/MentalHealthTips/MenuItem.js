import React from 'react'
import { motion } from 'framer-motion';

export default function MenuItem({ selected, onClick, tip }) {
  return (
    <motion.div
      className="cursor-pointer w-fit text-base md:text-xl"
      onClick={onClick}
      animate={{
        scale: selected ? 1.1 : 1,
        // fontWeight: selected ? "bold" : "normal",
      }}
    >
      {tip.title}
      {selected && (
        <motion.div
          layoutId="underline"
          className="w-full h-1 bg-green-400 rounded-full"
        ></motion.div>
      )}
    </motion.div>
  );
}