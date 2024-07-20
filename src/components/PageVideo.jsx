import React from "react";
import arrow from "../../public/images/arrow.svg";
import Image from "next/image";

const PageVideo = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-hero-color">
      <Image
        priority
        className="hidden w-24 lg:block"
        src={arrow}
        alt="arrow"
      />
      <div className="">{children}</div>
      <Image
        priority
        className="hidden w-24 lg:block"
        src={arrow}
        alt="arrow"
      />
    </div>
  );
};

export default PageVideo;
