import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Agency from "../../components/GetHelp/ProfessionalSupport/Agency";
import useOutsideClickAlerter from "../../hooks/useOutsideClickAlerter";
import "../../public/callIcon.svg";

const agencies = [
  {
    name: "National Care Hotline",
    openingHours: "8am-12am daily",
    imageLink: "https://imgur.com/neajYSg.jpg",
    link: "tel:1800-202-6868",
    message:
      "Credit Counselling Singapore (CCS) is a non-profit organisation and a registered charity. As a trusted Credit Counselling Social Service Agency, we have helped over 35,000 individuals address their unsecured debt problems through education, credit counselling and facilitated debt restructuring since 2004.",
  },
  {
    name: "TinkleFriend",
    openingHours: "Monday-Friday from 2.30pm-5pm",
    imageLink: "https://i.imgur.com/MngxNw6.png",
    link: "tel:1800-2744-788",
    message:
      "Tinkle Friend is a national toll-free helpline (1800 2744 788) and chatline for all primary-school-aged children in Singapore. Tinkle Friend provides support, advice, and information to lonely and distressed children, especially in situations when their parents or main caregivers are unavailable.",
  },
  {
    name: "Institute of Mental Health",
    openingHours: "24/7",
    imageLink: "https://imgur.com/06lnQx0.jpg",
    link: "tel:65-6389-2222",
    message:
      "The Research Division of the Institute of Mental Health (IMH) was established with an Institutional Block Grant (IBG) from the National Medical Research Council (NMRC). We made a concerted effort to establish a research infrastructure and culture during the restructuring of IMH in October 2000. Previously, research was mainly done on an ad hoc basis, without any tangible support. The IBG has enabled us to lay the foundation for our research infrastructure.",
  },
  {
    name: "Samaritans of Singapore",
    openingHours: "24/7",
    imageLink: "https://imgur.com/gkUe8UH.jpg",
    link: "tel:1800-221-4444",
    message:
      "A non-religious and not for profit organisation dedicated to providing confidential emotional support to individuals facing a crisis, thinking about or affected by suicide",
  },
  {
    name: "Silver Ribbon Singapore",
    openingHours: "24/7",
    imageLink: "https://imgur.com/aqUzzph.jpg",
    link: "tel:65-6385-3714",
    message:
      "A non-profit organisation that combat mental health stigma, encourage early help, and facilitate integration of people with mental illness within the society through innovative means of promoting mental health literacy. We hope to inculcate positive attitude towards mental health among the community.",
  },
  {
    name: "TOUCHLine",
    openingHours: "Monday-Friday from 9am-6pm",
    imageLink: "https://imgur.com/r2UcedL.png",
    link: "tel:1800-3772-252",
    message:
      "A not-for-profit charity organisation in Singapore that reaches out to individuals from all backgrounds, including children, youth, families, persons with special needs and the elderly. We are here to create a progressive community where everyone is valued and empowered. Over the years, we have reached out to individuals from all backgrounds, including children, youth, families, persons with special needs and the elderly. ",
  },
];

function ProfessionalSupport() {
  let [selectedHelpline, setSelectedHelpline] = useState(undefined);
  const modalRef = useRef();
  useOutsideClickAlerter(
    () => setSelectedHelpline(undefined),
    modalRef,
    modalRef
  );
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
            <Agency
              details={data}
              key={key}
              selectedHelpline={selectedHelpline === key}
              setSelectedHelpline={() => setSelectedHelpline(key)}
            />
          ))}
          {selectedHelpline >= 0 && selectedHelpline <= agencies.length && (
            <div className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed w-[100vw] h-[100vh] bg-black/25 z-10">
              <div className="relative">
                <div
                  ref={modalRef}
                  className="fixed flex flex-col p-10 pr-15 justify-start top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[75vh] w-[75vw] bg-white text-black rounded-2xl z-20"
                >
                  <img
                    src={agencies[selectedHelpline].imageLink}
                    className="object-contain h-[25%] w-max mb-10"
                  />
                  <h1 className="font-lora text-2xl font-semibold mb-3">
                    {agencies[selectedHelpline].name}
                  </h1>
                  <h2 className="font-Inter text-base font-medium">
                    {agencies[selectedHelpline].message}
                  </h2>
                  <div className="flex items-center justify-center">
                    <h3 className="font-Inter text-2xl font-medium mt-20">
                      Call at {agencies[selectedHelpline].link.split(":").pop()}
                    </h3>
                  </div>
                  <a href={agencies[selectedHelpline].link}>
                    <img
                      src="callIcon.svg"
                      className="absolute bottom-4 left-[calc(100%-8rem)] aspect-square h-24"
                    />
                  </a>
                  <div
                    className="absolute cursor-pointer top-4 left-[calc(100%-3rem)]"
                    onClick={() => setSelectedHelpline(undefined)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ProfessionalSupport;
