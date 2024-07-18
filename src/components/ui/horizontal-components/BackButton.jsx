import Link from "next/link";
import React from "react";
import Rounded from "@/components/ui/button";
import Image from "next/image";
import back from "@/../public/images/back.svg";

const BackButton = () => {
  return (
    <Link href="/">
      <Rounded
        backgroundColor="#0F172A"
        className="fixed left-10 top-[530px] z-50 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-400 tracking-wider text-hero-color lg:top-[720px] lg:h-[50px] lg:w-[50px] xl:top-[625px] 2k:top-[1550px] 2k:w-[120px] 2k:h-[120px]"
      >
        <button className="z-50 uppercase">
          <Image src={back} className="w-6" alt="back button" />
        </button>
      </Rounded>
    </Link>
  );
};

export default BackButton;
