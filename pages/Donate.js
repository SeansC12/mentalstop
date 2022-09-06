import React, { useRef, useState } from "react";
import Header from "../components/Header/Header";
import Agency from "../components/Donate/Agency";
import useOutsideClickAlerter from "../hooks/useOutsideClickAlerter";
import "../public/donateIcon.svg";

const agencies = [
  {
    name: "National Care Hotline",
    openingHours: "8am-12am daily",
    imageLink: "https://imgur.com/neajYSg.jpg",
    websiteLink: "tel:1800-202-6868",
    message:
      "Credit Counselling Singapore (CCS) is a non-profit organisation and a registered charity. As a trusted Credit Counselling Social Service Agency, we have helped over 35,000 individuals address their unsecured debt problems through education, credit counselling and facilitated debt restructuring since 2004.",
    moneyGoWhere:
      "Children with special needs and youth-at-risk to reach their potential",
  },
  {
    name: "Fei Yue ec2",
    openingHours: "Monday, Thursday, Friday 10am to 12pm, 2pm to 5pm",
    imageLink: "https://i.imgur.com/lPAKWb0.png",
    websiteLink: "https://www.fycs.org/make-online-donation/",
    message:
      "ec2.sg is a community mental health programme for youths aged between 12 to 25 years old. eC2 aims to promote mental resilience by empowering youths to take charge of their mental health by connecting them to available resources and instilling courage in them to seek help and engage with the community.",
    moneyGoWhere:
      "Improving the programmes and services for their clients and communities",
  },
  {
    name: "Institute of Mental Health",
    openingHours: "24/7",
    imageLink: "https://imgur.com/06lnQx0.jpg",
    websiteLink:
      "https://www.imh.com.sg/About-Us/Woodbridge-Hospital-Charity-Fund/Pages/default.aspx",
    message:
      "The Research Division of the Institute of Mental Health (IMH) was established with an Institutional Block Grant (IBG) from the National Medical Research Council (NMRC). We made a concerted effort to establish a research infrastructure and culture during the restructuring of IMH in October 2000. Previously, research was mainly done on an ad hoc basis, without any tangible support. The IBG has enabled us to lay the foundation for our research infrastructure.",
    moneyGoWhere:
      "Vocational Rehabilitation for People with Mental Illness (Transitional Employment) Programme: empowers patients with vocational skills that will assist in job placement and facilitate community re-integration.",
  },
  {
    name: "Samaritans of Singapore",
    openingHours: "24/7",
    imageLink: "https://imgur.com/gkUe8UH.jpg",
    websiteLink: "https://www.giving.sg/samaritans-of-singapore",
    message:
      "A non-religious and not for profit organisation dedicated to providing confidential emotional support to individuals facing a crisis, thinking about or affected by suicide",
    moneyGoWhere: "Enhancement and expansion of services and infrastructure",
  },
  {
    name: "Silver Ribbon Singapore",
    openingHours: "24/7",
    imageLink: "https://imgur.com/aqUzzph.jpg",
    websiteLink: "https://www.silverribbonsingapore.com/donate.html",
    message:
      "A non-profit organisation that combat mental health stigma, encourage early help, and facilitate integration of people with mental illness within the society through innovative means of promoting mental health literacy. We hope to inculcate positive attitude towards mental health among the community.",
    moneyGoWhere:
      "Manpower cost — equipping with trained & qualified staff to provide complimentary counselling service",
  },
  {
    name: "TOUCHLine",
    openingHours: "Monday-Friday from 9am-6pm",
    imageLink: "https://imgur.com/r2UcedL.png",
    websiteLink: "https://www.touch.org.sg/donation",
    message:
      "A not-for-profit charity organisation in Singapore that reaches out to individuals from all backgrounds, including children, youth, families, persons with special needs and the elderly. We are here to create a progressive community where everyone is valued and empowered. Over the years, we have reached out to individuals from all backgrounds, including children, youth, families, persons with special needs and the elderly. ",
    moneyGoWhere: "Direct charitable expenses",
  },
];

function Donate() {
  let [selectedHelpline, setSelectedHelpline] = useState(undefined);
  const modalRef = useRef();
  useOutsideClickAlerter(
    () => setSelectedHelpline(undefined),
    modalRef,
    modalRef
  );
  return (
    <div>
      <Header tab="Donate" />
      <main className="h-full pb-96 p-16 bg-gradient-to-b from-[#C6DAF9] to-[#FFFFFF]">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="text-5xl font-lora text-black mb-2 mr-3">
              Sometimes,{" "}
            </p>
            <p className="text-[#577AAF] text-5xl font-lora mr-3">
              a dollar goes a long way
            </p>
            <p className="text-5xl font-lora text-black">in supporting</p>
          </div>
          <p className="text-5xl font-lora text-black mb-2">
            others in need of mental health support.
          </p>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-5 sm:mt-10">
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
                  <h3 className="font-Inter text-base font-medium mt-5">
                    Contact{" "}
                    <a
                      className="text-blue-500 underline"
                      href={agencies[selectedHelpline].websiteLink}
                    >
                      this organisation
                    </a>{" "}
                    to learn more about donations
                  </h3>
                  <h1 className="font-lora text-2xl font-semibold mt-5">
                    What will my money be used for?
                  </h1>
                  <div className="flex flex-row items-start justify-start w-full mt-3 gap-2">
                    <img
                      src="https://i.imgur.com/1s52NYY.png"
                      className="w-7 aspect-square"
                    />
                    <div className="overflow-clip">
                      {agencies[selectedHelpline].moneyGoWhere}
                    </div>
                  </div>
                  <a href={agencies[selectedHelpline].websiteLink}>
                    <img
                      src="donateIcon.svg"
                      className="absolute bottom-4 left-[calc(100%-8rem)] aspect-square h-24 cursor-pointer"
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

export default Donate;
