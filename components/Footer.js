import React from "react";

export default function Footer() {
  return (
    <div className="w-full text-center bg-[#D9D9D9] p-2 md:p-3 text-xs md:text-sm">
      <p>
        Made with ❤️ by members of the 2022 SST Inc. Executive Committee: Harish
        Ram Baghavath, Sean Ulric Chua, Tan Xuan Han, Asher Ng Say Kiat, Tay Kai
        Quan
      </p>
      <p>
        Thanks to{" "}
        <a className="underline" href="https://unsplash.com/">
          Unsplash{" "}
        </a>
        for providing some images used in the website.
      </p>
    </div>
  );
}
