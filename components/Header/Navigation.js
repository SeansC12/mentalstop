import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const ulVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      // when: "afterChildren",
    },
    // scale: 1,
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    // scale: 0,
  },
};

const divVariants = {
  open: {
    scale: 1,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    scale: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const Navigation = ({ navigation, isOpen }) => (
  <motion.div variants={divVariants}>
    <motion.ul
      className="flex flex-col p-6 fixed top-24 w-60 z-60"
      variants={ulVariants}
      // style={}
    >
      {navigation.map((i, key) => (
        <MenuItem i={i} key={key} />
      ))}
    </motion.ul>
  </motion.div>
);
