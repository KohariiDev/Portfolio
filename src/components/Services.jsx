import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import FadeUp from "./animation/FadeUp";

export default function Services({ services, serviceText }) {
  const { title } = serviceText;

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <section
      ref={container}
      id="service"
      className="px-4 md:px-16 pb-8 md:pb-16 xl:px-24 bg-hero-color overflow-hidden mt-[-200px]"
    >
      <div className="flex flex-col md:flex-row justify-between mb-28">
        <div className="relative flex flex-col ml-auto mr-auto">
          <h1 className="text-8xl md:text-9xl lg:text-16xl tracking-tight md:text-nowrap font-medium uppercase text-slate-900 mb-4 md:mb-0">
            {title}
          </h1>
        </div>
      </div>
      <div>
        {services.map((service, index) => {
          const { title, description, number } = service;
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 py-16 text-slate-800"
            >
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl xl:text-5xl uppercase mb-5 lg:mg-0">
                  {title}{" "}
                  <span className="text-secondary-color text-lg">
                    ({number})
                  </span>
                </h2>
              </div>
              <div className="max-w-lg md:w-1/2 lg:w-2/5 xl:w-1/3 text-xs xl:text-base text-slate-600">
                <FadeUp phrase={description} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
