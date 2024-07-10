import React from "react";
import arrow from "../../public/images/arrow.svg";
import Image from "next/image";

const PageVideo = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-hero-color">
      <Image className="w-24 hidden lg:block" src={arrow} alt="arrow" />
      <div className="">{children}</div>
      <Image className="w-24 hidden lg:block" src={arrow} alt="arrow" />
    </div>
  );
};

export default PageVideo;
