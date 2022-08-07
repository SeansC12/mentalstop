import React, { useRef, useState } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { LayoutGroup, motion, useCycle } from "framer-motion";
import favicon from "../../public/favicon.ico";
import Image from "next/image";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useOutsideClickAlerter from "../../hooks/useOutsideClickAlerter";
import Head from "next/head";

const navigation = [
  {
    name: "Home",
    href: "/",
    heading: "Home",
    current: false,
  },
  {
    name: "Get Help",
    href: "/GetHelp",
    heading: "Get Help",
    current: false,
  },
  {
    name: "Offer Help",
    href: "/OfferHelp",
    heading: "Offer Help",
    current: false,
  },
  {
    name: "Learn More",
    href: "/LearnMore",
    heading: "Learn More",
    current: false,
  },
  {
    name: "Donate",
    href: "/Donate",
    heading: "Donate",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function resetNavigation() {
  for (const key in navigation) {
    navigation[key].current = false;
  }
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Header({ tab }) {
  resetNavigation();
  let navigationObjectKey = 0;
  for (const key in navigation) {
    if (navigation[key].name === tab) {
      navigation[key].current = true;
      navigationObjectKey = key;
      break;
    }
  }

  const [isOpen, toggleOpen] = useCycle(false, true);
  const mobileNavBarRef = useRef();
  const menuToggleRef = useRef();

  useOutsideClickAlerter(
    () => {
      if (isOpen && !menuToggleRef.current.contains(event.target)) {
        toggleOpen();
      }
    },
    mobileNavBarRef,
    isOpen
  );

  return (
    <nav>
      <Head>
        <title>STMh</title>
      </Head>
      <div className="min-h-full font-Inter">
        <div className="bg-[#CCF5C8] sm:h-14">
          {/* Mobile View */}
          {useWindowDimensions().width < 640 && (
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              custom={10}
            >
              <motion.div
                className="bg-[#98C9A3] absolute top-0 left-0 bottom-0 w-[300px] shadow-md"
                variants={sidebar}
                ref={mobileNavBarRef}
              />
              <Navigation navigation={navigation} />
              {console.log(isOpen)}
              <div ref={menuToggleRef}>
                <MenuToggle toggle={() => toggleOpen()} />
              </div>
            </motion.div>
          )}

          {/* Desktop View */}
          {useWindowDimensions().width > 640 && (
            <div className="relative w-full h-14 flex flex-row">
              <div className="visible h-full absolute flex items-center justify-start z-20 ml-10">
                <Link href="/">
                  <Image
                    src={favicon}
                    alt=""
                    width="40px"
                    height="40px"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <div className="hidden absolute w-full h-full sm:flex items-center justify-center z-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <div
                      className={classNames(
                        item.current
                          ? "bg-[#1A8C10] rounded-md text-white shadow-lg"
                          : "text-black hover:bg-[#1A8C10] hover:text-white",
                        "px-3 py-[0.4rem] rounded-md text-sm font-medium ml-10 w-max cursor-pointer text-center"
                      )}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="shadow border-b" />
      </div>
    </nav>
  );
}
