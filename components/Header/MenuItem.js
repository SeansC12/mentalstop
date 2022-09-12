import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      scaleX: 0,
    },
  },
  closed: {
    scale: 0,
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      scaleX: 0,
    },
  },
};

export const MenuItem = ({ i, isOpen }) => {
  return (
    <>
      <AnimatePresence>
        {/* {isOpen && ( */}
        <motion.li
          // exit="closed"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="list-none mb-5 flex items-center cursor-pointer"
        >
          <Link href={i.href}>
            <div>{i.name}</div>
          </Link>
        </motion.li>
        {/* )} */}
      </AnimatePresence>
    </>
  );
};
