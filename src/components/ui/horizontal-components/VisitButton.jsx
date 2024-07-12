import React from "react";
import Rounded from "@/components/ui/button";
import Link from "next/link";

const VisitButton = ({project}) => {
  return (
    <Link href={project.url}>
      <Rounded
        backgroundColor="#ef4444"
        className="fixed right-10 top-[530px] z-50 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-400 tracking-wider text-hero-color lg:top-[720px] lg:h-[50px] lg:w-[50px] xl:top-[625px] 2k:top-[1550px] 2k:h-[120px] 2k:w-[120px]"
      >
        <button className="z-50 uppercase">VISIT</button>
      </Rounded>
    </Link>
  );
};

export default VisitButton;