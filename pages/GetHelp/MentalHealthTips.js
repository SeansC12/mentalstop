import React, { createFactory, useState } from "react";
import LeftMentalHealthTipsCard from "../../components/GetHelp/MentalHealthTips/LeftMentalHealthTipsCard";
import RightMentalHealthTipsCard from "../../components/GetHelp/MentalHealthTips/RightMentalHealthTipsCard";
import Header from "../../components/Header/Header";
import {
  AnimateSharedLayout,
  motion,
  AnimatePresence,
  useDragControls,
} from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
// import "./styles.css"

const mentalHealthTips = [
  {
    title: "Meditation and mindfulness",
    description: `Mindfulness practices provide a great deal of benefits. For example, meditation can reduce negative rumination and stress. Moreover, it can improve relationship satisfaction, according to a meta-analysis of studies on the mental health benefits of mindfulness. Here are some examples of practicing mindfulness and meditation:
    - Mindfulness-based therapy
    - Tea meditation
    - Being in nature
    - Mindful breathing
    
    You can also practice mindfulness in many other ways, though. Therapists around the world recommends incorporating mindfulness into routine activities we tend to take for granted. There is a lot we can gain from even the simplest activities
    
    Think about the last time you ate something that tasted good, maybe an expensive dessert. Were you in the moment when you ate it? Were you present, only thinking about the taste of the food and the experience of eating it?`,
    imageLink: "/meditationImage.jpg",
  },
  {
    title: "Laugh it out",
    description: `Laughter can be therapeutic. Every time we laugh, our brains release dopamine, a chemical that makes us feel happy. If you’re missing some laughter in your life, try going to a comedy club, binge-watching a new comedy series, or checking out some standup specials on Netflix.

    “I would say laughter is the best medicine. But it’s more than that. It’s an entire regime of antibiotics and steroids.” - Stephen Tyrone Colbert
    
    Stephen Tyrone Colbert is an American comedian, writer, producer, political commentator, actor, and television host.`,
    imageLink: "/meditationImage.jpg",
  },
  {
    title: "Volunteering",
    description: `Volunteering can improve both mental and physical health, according to a [study by Carnegie Mellon University](https://psycnet.apa.org/record/2013-21685-006). The satisfaction of doing something for other people’s wellbeing is invaluable. This is also a great opportunity to practice gratitude.

    There are plenty of volunteer work out there, if you want something that may help improve your mental health, any volunteer work can be rewarding and leave you feeling grateful. Be it at an animal rescue/shelter, hospital, environmental cleanup. These provide a mood boost, giving your time to a worthy cause.
    
    Want to volunteer here? Help others understand that it isn’t the end of the world.`,
    imageLink: "/meditationImage.jpg",
  },
  {
    title: "Exercise regularly",
    description: `Physical activity can boost your mental health. It can reduce symptoms of many mental health conditions, according to a wealth of research. Physical activity releases chemicals that bolster well-being on a neurological level. For example, when exercising, the brain releases a hormone called endorphins. Endorphins help relieve pain, reduce stress and improve your sense of well-being.

    When we exercise, it’s as if some of our anxiety, depression, and stress literally transform into sweat. Rather than festering in their bodies, it slides off.`,
    imageLink: "/meditationImage.jpg",
  },
  {
    title: "Join a club",
    description: `Everyone needs at least a little social interaction to be mentally healthy, according to studies on social relationships and health. Having relationships or simply chatting with people occasionally can make a huge difference.

    Some examples of clubs and communities you can join include:
    
    - An activist group related to a cause you care about
    - A networking or meetup group based on a common skill or interest
    - A religious community
    - A form of group exercise, including team sports
    - Group therapy`,
    imageLink: "/meditationImage.jpg",
  },
];
const imgs = [
  "https://media.istockphoto.com/photos/singapore-skyline-at-marina-bay-at-twilight-with-glowing-sunset-the-picture-id1176969551?b=1&k=20&m=1176969551&s=170667a&w=0&h=JvC68A7XNAH-C4CiPFHHNWQM4GeAN9E1me-vcyF_MWg=",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
  "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png",
];

function MentalHealthTips() {
  const [[selectedTip, direction], setSelectedTip] = useState([0, "left"]); // left is direction that text moves, default is text moves to the left

  let dragThres = 1000;
  return (
    <div>
      <Header tab="Get Help" />
      <main className="h-screen font-Inter pb-96 pt-16 p-5 md:p-16 bg-gradient-to-b from-[#C6DAF9] to-[#FFFFFF]">
        <div className="flex flex-col text-2xl md:text-5xl mb-10">
          <p className="font-lora text-[#577AAF] mb-2">Stay mentally healthy</p>
          <p className="font-lora text-black">by adopting good practices.</p>
        </div>
        {useWindowDimensions().width > 1137 ? (
          <div>
            <div className="lg:flex gap-10 w-fit m-auto bg-[#DFFFDC] p-10 rounded-xl">
              <AnimateSharedLayout>
                {mentalHealthTips.map((tip, index) => (
                  <MenuItem
                    selected={selectedTip === index}
                    key={index}
                    tip={tip}
                    onClick={(e) => {
                      setSelectedTip([index, ""]);
                    }}
                  />
                ))}
              </AnimateSharedLayout>
            </div>
            <div className="bg-[#9ade94] mt-10 p-5 md:p-10 rounded-xl text-center">
              <p className="text-xl md:text-3xl">
                {mentalHealthTips[selectedTip].title}
              </p>
              <p className="text-sm md:text-xl mt-5">
                {mentalHealthTips[selectedTip].description}
              </p>
            </div>
          </div>
        ) : (
          <div className="h-fit flex items-center rounded-xl md:p-10">
            <button
              className="w-10 h-10 rounded-full bg-orange-300"
              style={{
                backgroundColor: selectedTip === 0 ? "grey" : "orange",
              }}
              onClick={() => setSelectedTip(([s, d]) => [s - 1, "right"])}
              disabled={selectedTip === 0}
            >
              {"<"}
            </button>
            <div className="flex w-full overflow-auto m-5 items-center h-fit bg-green-400 p-5">
              <AnimatePresence>
                {mentalHealthTips.map((tip, i) =>
                  i === selectedTip ? (
                    <motion.div
                      initial={{ x: direction == "left" ? 200 : -200 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ x: direction == "left" ? -200 : 200 }}
                      className="w-full text-center"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(event, { offset, velocity }) => {
                        if (
                          velocity.x * Math.abs(offset.x) > dragThres &&
                          selectedTip > 0
                        ) {
                          setSelectedTip((s) => [s[0] - 1, "right"]);
                        } else if (
                          velocity.x * Math.abs(offset.x) < -dragThres &&
                          selectedTip < mentalHealthTips.length - 1
                        ) {
                          setSelectedTip((s) => [s[0] + 1, "left"]);
                        }
                      }}
                    >
                      <strong className="md:text-2xl">{tip.title}</strong>
                      <p className="text-sm md:text-lg">{tip.description}</p>
                    </motion.div>
                  ) : (
                    <div className="w-0 h-0"></div>
                  )
                )}
              </AnimatePresence>
            </div>
            <button
              className="w-10 h-10 rounded-full bg-orange-300"
              style={{
                backgroundColor:
                  selectedTip === mentalHealthTips.length - 1
                    ? "grey"
                    : "orange",
              }}
              onClick={() => setSelectedTip(([s, d]) => [s + 1, "left"])}
              disabled={selectedTip === mentalHealthTips.length - 1}
            >
              {">"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

function MenuItem({ selected, onClick, tip }) {
  return (
    <motion.div
      className="cursor-pointer relative w-fit text-base md:text-xl"
      onClick={onClick}
      animate={{
        scale: selected ? 1.1 : 1,
        fontWeight: selected ? "semi-bold" : "normal",
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

// const wrapperVariants = {
//   initial: {
//     clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
//     transition: { duration: 0.4 },
//   },
//   animate: {
//     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
//     transition: { duration: 0.4, staggerChildren: 0.1 },
//   },
//   exit: {
//     clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
//     transition: { duration: 0.4 },
//   },
// };

// const squareVariants = {
//   initial: {
//     opacity: 0,
//     scale: 0.3,
//   },
//   animate: {
//     opacity: 1,
//     scale: 1,
//   },
// };

// const ClipPathTransition = () => {
//   const [selectedSquare, setSelectedSquare] = useState(null);
//   const renderSquares = () => {
//     const squares = ["yellow", "green", "blue", "violet"];
//     return squares.map((color, i) => (
//       <motion.div
//         key={i}
//         className={`square square--${color}`}
//         onClick={() => setSelectedSquare(color)}
//         variants={squareVariants}
//         transition={{ duration: 0.2, type: "spring" }}
//       />
//     ));
//   };
//   return (
//     <div
//       className={`h-screen rounded-xl cp-transition cp-transition__container cp-transition__container--${selectedSquare}`}
//     >
//       <AnimatePresence exitBeforeEnter initial={false}>
//         {selectedSquare ? (
//           <motion.div
//             className={`h-fit card card__wrapper card__wrapper--${selectedSquare}`}
//             key="card"
//             variants={wrapperVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <div className="card__header">
//               <h2>Lorem ipsum</h2>
//               <button onClick={() => setSelectedSquare(null)}>
//                 <i className="fas fa-times fa-2x" />
//               </button>
//             </div>
//             <div className="card__content">
//               <div className="card__img-placeholder" />
//               <div className="card__text-placeholder">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
//                 ea neque quidem exercitationem possimus.
//               </div>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             className="cp-transition__squares-wrapper"
//             key="squares"
//             variants={wrapperVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             {renderSquares()}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// const Slide = () => {
//   const [[page, direction], setPage] = useState([0, 0]);

//   const paginate = (newDirection) => {
//     setPage([page + newDirection, newDirection]);
//   };

//   return (
//     <>
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={page}
//           className="w-screen"
//           // src={images[imageIndex]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);

//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//         >
//           {mentalHealthTips[page].title}
//         </motion.div>
//       </AnimatePresence>
//       <div className="next" onClick={() => paginate(1)}>
//         {"‣"}
//       </div>
//       <div className="prev" onClick={() => paginate(-1)}>
//         {"‣"}
//       </div>
//     </>
//   );
// };

// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// const Slide = ({ selectedTip }) => {
//   const [[page, direction], setPage] = useState([0, 0]);
//   const paginate = (newDirection) => {
//     setPage([page + newDirection, newDirection]);
//   };
//   return (
//     <AnimatePresence initial={false} custom={direction}>
//       <motion.div
//         // variants={variants}
//         className="w-full h-full bg-gray-200"
//         // key={selectedTip}
//         // initial={{ opacity: 0, x: 200 }}
//         // animate={{ opacity: 1, x: 0 }}
//         // exit={{ opacity: 0, x: -200 }}
//         key={page}
//         // src={images[imageIndex]}
//         // custom={direction}
//         variants={variants}
//         initial="enter"
//         animate="center"
//         exit="exit"
//         transition={{
//           x: { type: "spring", stiffness: 300, damping: 30 },
//           opacity: { duration: 0.2 },
//         }}
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         dragElastic={1}
//         onDragEnd={(e, { offset, velocity }) => {
//           const swipe = swipePower(offset.x, velocity.x);

//           if (swipe < -swipeConfidenceThreshold) {
//             paginate(1);
//           } else if (swipe > swipeConfidenceThreshold) {
//             paginate(-1);
//           }
//         }}
//       >
//         <p>{mentalHealthTips[page].title}</p>
//       </motion.div>
//     </AnimatePresence>
//   );
// };
// export const Slide = ({ selectedTip }) => (
//   <AnimatePresence>
//     <motion.img
//     key={imgs[selectedTip]}
//       src={imgs[selectedTip]}
//       initial={{ opacity: 0, y: 200 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     />
//   </AnimatePresence>
// );

// original code for mental health tips
// function MentalHealthTips() {
//   return (
//     <div>
//       <Header tab="Get Help" />
//       <main className="h-full font-Inter pb-96 pt-16 p-10 md:p-16 bg-gradient-to-b from-[#C6DAF9] to-[#FFFFFF]">
//         <div className="flex flex-col text-2xl md:text-5xl">
//           <p className="font-lora text-[#577AAF] mb-2">Stay mentally healthy</p>
//           <p className="font-lora text-black">by adopting good practices.</p>
//         </div>
//         <div className="mt-20">
//           {mentalHealthTips.map((data, index) => {
//             if (index % 2 === 0) {
//               return (
//                 <div className="mb-10">
//                   <LeftMentalHealthTipsCard data={data} />
//                 </div>
//               );
//             } else {
//               return (
//                 <div className="mb-10">
//                   <LeftMentalHealthTipsCard data={data} />
//                 </div>
//               );
//             }
//           })}
//         </div>
//       </main>
//     </div>
//   );
// }
export default MentalHealthTips;
