import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import favicon from "../public/favicon.ico";
import Image from "next/image";

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

let navigationObjectKey = 0;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function resetNavigation() {
  for (const key in navigation) {
    navigation[key].current = false;
  }
}

export default function Header({ tab }) {
  resetNavigation();
  for (const key in navigation) {
    if (navigation[key].name === tab) {
      navigation[key].current = true;
      navigationObjectKey = key;
      break;
    }
  }
  return (
    <div className="min-h-full font-Inter">
      <Disclosure as="nav" className="bg-[#CCF5C8]">
        {({ open }) => (
          <>
            <div className="relative w-full h-14 flex flex-row">
              <div className="h-full absolute flex items-center justify-start z-20 ml-10">
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
              <div className="absolute w-full h-full flex items-center justify-center z-10">
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
                          : "text-black hover:bg-gray-700 hover:text-white",
                        "px-3 py-[0.4rem] rounded-md text-sm font-medium ml-10 w-max cursor-pointer text-center"
                      )}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* <div className="items-centre flex h-16 md:h-12"> */}
            {/* <div className="w-max"></div>
              <div className="hidden sm:flex items-center py-2 px-2"> */}
            {/* {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <div
                      className={classNames(
                        item.current
                          ? "bg-gray-900 ml-5 text-white"
                          : "text-black hover:bg-gray-700 hover:text-white ml-5",
                        "px-3 py-2 rounded-md text-sm font-medium ml-5 h-fit w-max cursor-pointer text-center"
                      )}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))} */}
            {/* </div> */}
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
            {/* </div> */}
            <div>
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
