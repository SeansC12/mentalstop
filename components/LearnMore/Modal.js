import React from "react";

function Modal() {
  return (
    // <motion.div
    //   animate={{ opacity: 1 }}
    //   initial={{ opacity: 0 }}
    //   exit={{ opacity: 0 }}
    //   className="fixed h-screen w-screen flex justify-center z-50 "
    //   // onClick={() => setShowModal(-1)}
    // >
    //   <div
    //     className="absolute bg-black bg-opacity-50 w-full h-full z-40"
    //     onClick={() => setShowModal(-1)}
    //   ></div>
    //   <div className="w-1/2 h-1/2 m-auto rounded-md p-5 bg-gray-200 z-50 relative">
    //     <div className="z-50">
    //       <img
    //         src="closeButton.svg"
    //         className="w-10 float-right cursor-pointer z-50"
    //         onMouseDown={() => setShowModal(-1)}
    //       ></img>
    //       <strong className="text-3xl z-50">{data.name}</strong>
    //       <p className="text-xl text-justify pt-10 z-50">{data.description}</p>
    //     </div>
    //     <img
    //       className="w-fit absolute right-0 h-full z-40 top-0"
    //       src={data.image}
    //     ></img>
    //   </div>
    // </motion.div>
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

      <div className="w-1/2 h-1/2 rounded-md p-5 bg-gray-200 z-50 relative">
        <img
          src="closeButton.svg"
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setShowModal(-1)}
        />
        <div>
          <strong className="text-2xl">{data.name}</strong>
          <p className="text-lg pt-4">{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
