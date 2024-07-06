"use client";

import { useEffect, useRef, useState } from "react";
import FadeUp from "./animation/FadeUp";
import FadeUpTitle from "./animation/FadeUpTitle";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export default function Services({ services, serviceText }) {
  const { title } = serviceText;

  const titleRef = useRef(null);
  const isInView = useInViewAnimation(titleRef);
  const container = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section
      ref={container}
      id="service"
      className="mt-[-500px] overflow-hidden bg-hero-color px-4 pb-8 md:px-16 md:pb-16 xl:px-24"
    >
      <div className="mb-28 flex flex-col justify-between md:flex-row">
        <div className="relative ml-auto mr-auto flex flex-col">
          <h1
            ref={titleRef}
            className="mb-4 text-8xl font-medium uppercase tracking-tight text-slate-900 md:mb-0 md:text-nowrap md:text-9xl lg:text-16xl"
          >
            {hasAnimated && <FadeUpTitle word={title} />}
          </h1>
        </div>
      </div>
      <div>
        <div className="mb-10 flex flex-col gap-20 md:flex-row md:gap-0 xl:my-40">
          <div className="flex-1">
            <h1 className="text-xl text-slate-700 md:text-2xl lg:text-3xl">
              Lorem ipsum dolor sit amet.
            </h1>
          </div>
          <div className="flex-1">
            <span className="ml-auto w-3/4 text-justify">
              <FadeUp
                phrase={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloresminima hic fugiat iste quod officiis doloremque optio id eumveritatis. Error laudantium dicta sed excepturi reprehenderitaliquam totam quo dignissimos. Dolores minima hic fugiat iste quodofficiis doloremque optio id eum veritatis. Error laudantium."
                }
              />
            </span>
          </div>
        </div>
        {services.map((service, index) => {
          const { title, description, number } = service;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between border-t border-gray-300 py-16 text-slate-800 md:flex-row"
            >
              <div className="w-full md:w-1/2">
                <h2 className="lg:mg-0 mb-5 text-3xl uppercase xl:text-5xl">
                  {title}{" "}
                  <span className="text-lg text-secondary-color">
                    ({number})
                  </span>
                </h2>
              </div>
              <div className="max-w-lg text-xs text-slate-600 md:w-1/2 lg:w-2/5 xl:w-1/3 xl:text-base">
                <FadeUp phrase={description} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
