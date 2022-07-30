import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, isOpen }) => {
  if (isOpen) {
    return (
      <>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="list-none mb-5 flex items-center cursor-pointer"
        >
          <Link href={i.href}>
            <div>{i.name}</div>
          </Link>
        </motion.li>
      </>
    );
  }
};
