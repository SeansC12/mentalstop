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
    <div className="min-h-full font-Inter">
      <div className="bg-[#CCF5C8] sm:h-14">
        {/* Mobile View */}
        {useWindowDimensions().width < 640 && (
          <>
            {/*  <div className="relative bg-[#CCF5C8] h-20 w-full">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3">
           <Image
             src={favicon}
              alt=""
             width="45px"
             height="45px"
             className="cursor-pointer"
            />
           </div> */}
            {/* <div className="opacity-0 h-20 w-full mb-10"> */}
            <div className="bg-[#CCF5C8] h-20 w-full fixed top-0 left-0">
              <div className="w-full h-full relative">
                <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[41.6666%]">
                  <Image
                    src={favicon}
                    alt=""
                    width="45px"
                    height="45px"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="fixed z-50 top-0 left-0">
                <motion.div
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  custom={10}
                >
                  <motion.div
                    className="bg-[#98C9A3] fixed top-0 left-0 bottom-0 w-[300px] shadow-md"
                    variants={sidebar}
                    ref={mobileNavBarRef}
                  />
                  <Navigation navigation={navigation} />
                  <div ref={menuToggleRef}>
                    <MenuToggle toggle={() => toggleOpen()} />
                  </div>
                </motion.div>
              </div>
            </div>
            {/* </div> */}
          </>
        )}

        {/* Desktop View */}
        {useWindowDimensions().width > 640 && (
          <div className="relative w-full h-14 flex flex-row">
            <div className="visible h-full absolute flex items-center justify-start z-20 ml-10">
              <Link href="/">
                <div>
                  <Image
                    src={favicon}
                    alt=""
                    width="40px"
                    height="40px"
                    className="cursor-pointer"
                  />
                </div>
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

      <div className="shadow border-b mb-10 sm:mb-0" />
    </div>
  );
}

function f() {
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <motion.div className="items-centre flex h-16 md:h-12">
              <div className="w-max">
                <Link href="/">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AM-JKLVw9lw63jPNMUAzRQsWbAhYP5_OprYt-iIP7cLvvQ45mCTii6-WB-Q26vHMzMMpb7rjo25KxSJLm_O8cXvS8G8SDQYDf9UD74ppxNegrgyD2D6KAkdmV0bJU98rqjlDb_x79vgPB6crSOKYjvqFmMOR=s1000-no"
                    className="h-full object-contain cursor-pointer pl-3 sm:w-52 sm:-mt-1"
                  />
                </Link>
              </div>
              <LayoutGroup>
                <div className="hidden sm:flex items-center py-2 px-2">
                  {navigation.map((item, i) => {
                    const [hover, setHover] = useState(false);
                    return (
                      <Link key={i} href={item.href}>
                        <motion.li
                          onMouseEnter={() => {
                            setHover(true);
                          }}
                          onMouseLeave={() => {
                            setHover(false);
                          }}
                          className="text-black px-3 py-2 rounded-md text-sm font-medium ml-5 h-fit w-max cursor-pointer text-center list-unstyled"
                        >
                          {item.name}
                          {(hover || item.current) && (
                            <motion.div
                              className="h-1 rounded-full w-full m-auto"
                              style={{
                                backgroundColor: "#5083d5",
                              }}
                              layoutId="underline"
                            ></motion.div>
                          )}
                        </motion.li>
                      </Link>
                    );
                  })}
                </div>
              </LayoutGroup>

              {/* mobile menu */}
              <div className="w-full h-full items-center">
                <Disclosure.Button className="float-right w-12 h-12 sm:h-9 sm:w-9 flex justify-center m-2 sm:m-1.5 bg-gray-800 items-center rounded-md text-gray-400 sm:hidden">
                  {open ? (
                    <XIcon className="block h-9 w-9 " aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </motion.div>
            <div className="">
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-800 text-white"
                          : "text-gray-800 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
      <div className="shadow border-b" />
    </div>
  );
}
