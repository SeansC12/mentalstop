import React, { createFactory, useState } from "react";
import LeftMentalHealthTipsCard from "../../components/GetHelp/MentalHealthTips/LeftMentalHealthTipsCard";
import RightMentalHealthTipsCard from "../../components/GetHelp/MentalHealthTips/RightMentalHealthTipsCard";
import Header from "../../components/Header/Header";
import { AnimateSharedLayout, motion } from "framer-motion";

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

function MentalHealthTips() {
  const [selectedTip, setSelectedTip] = useState(0);
  return (
    <div>
      <Header tab="Get Help" />
      <main className="h-full font-Inter pb-96 pt-16 p-10 md:p-16 bg-gradient-to-b from-[#C6DAF9] to-[#FFFFFF]">
        <div className="flex flex-col text-2xl md:text-5xl mb-10">
          <p className="font-lora text-[#577AAF] mb-2">Stay mentally healthy</p>
          <p className="font-lora text-black">by adopting good practices.</p>
        </div>
        <div className="flex gap-5 w-fit m-auto bg-[#DFFFDC] p-10 rounded-xl">
          <AnimateSharedLayout>
            {mentalHealthTips.map((tip, index) => (
              <MenuItem
                selected={selectedTip === index}
                key={index}
                tip={tip}
                onClick={() => {
                  setSelectedTip(index);
                  console.log(selectedTip);
                }}
              />
            ))}
          </AnimateSharedLayout>
        </div>
        <div className="bg-[#9ade94] mt-10 p-10 rounded-xl text-center">
          <strong className="text-3xl">
            {mentalHealthTips[selectedTip].title}
          </strong>
          <p className="text-xl">{mentalHealthTips[selectedTip].description}</p>
        </div>
      </main>
    </div>
  );
}

function MenuItem({ selected, onClick, tip }) {
  return (
    <motion.div
      className="cursor-pointer relative w-fit text-base md:text-xl"
      onClick={onClick}
      animate={{ scale: selected ? 1.1 : 1 }}
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
