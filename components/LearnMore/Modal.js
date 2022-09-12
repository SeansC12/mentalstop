import React from "react";
import { motion } from "framer-motion";
import "../../public/closeButton.svg";

function Modal({ data, setShowModal }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="fixed h-screen w-screen z-50 flex justify-center items-center"
    >
      <div
        className="absolute bg-black bg-opacity-50 w-full h-full z-40"
        onClick={() => setShowModal(-1)}
      ></div>

      <div className="w-3/4 md:w-1/2 h-max rounded-md p-5 bg-gray-200 z-50 relative overflow-y-scroll">
        <img
          src="closeButton.svg"
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setShowModal(-1)}
        />
        <div>
          <strong className="text-lg sm:text-2xl">{data.name}</strong>
          <p className="text-base sm:text-lg pt-4">{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
