import React from "react";
import Header from "../components/Header/Header";
import Agency from "../components/GetHelp/ProfessionalSupport/Agency";

const agencies = [
  {
    name: "National Care Hotline",
    openingHours: "8am-12am daily",
    imageLink: "https://imgur.com/neajYSg.jpg",
    link: "tel:1800-202-6868",
  },
  {
    name: "ec2.sg",
    openingHours: "8am-12am daily",
    imageLink: "https://imgur.com/mYOk0Qi.jpg",
    link: "https://www.fycs.org/our-work/youth/ec2/",
  },
  {
    name: "Institute of Mental Health",
    openingHours: "24/7",
    imageLink: "https://imgur.com/06lnQx0.jpg",
    link: "tel:65-6389-2222",
  },
  {
    name: "Samaritans of Singapore",
    openingHours: "24/7",
    imageLink: "https://imgur.com/gkUe8UH.jpg",
    link: "tel:1800-221-4444",
  },
  {
    name: "Silver Ribbon Singapore",
    openingHours: "24/7",
    imageLink: "https://imgur.com/aqUzzph.jpg",
    link: "tel:65-6385-3714",
  },
  {
    name: "TOUCHLine",
    openingHours: "Monday-Friday from 9am-6pm",
    imageLink: "https://imgur.com/WChPQfA.jpg",
    link: "tel:1800-3772-252",
  },
];

function ProfessionalSupport() {
  return (
    <div>
      <Header tab="Get Help" />
      <main className="h-full pb-96 p-16 bg-gradient-to-b from-[#C6DAF9] to-[#FFFFFF]">
        <div className="flex flex-col">
          <p className="text-5xl font-lora text-[#577AAF] mb-2">
            Need further help?
          </p>
          <p className="text-5xl font-lora text-black">
            Explore alternative resources
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 mt-10">
          {agencies.map((data, key) => (
            <Agency details={data} key={key} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProfessionalSupport;
