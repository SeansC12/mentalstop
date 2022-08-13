import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ navigation, isOpen }) => (
  <motion.ul
    className="flex flex-col p-6 absolute top-24 w-60"
    variants={variants}
  >
    {navigation.map((i, key) => (
      <MenuItem i={i} key={key} />
    ))}
  </motion.ul>
);
