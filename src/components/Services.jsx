import { useEffect, useRef, useState } from "react";
import FadeUp from "./animation/FadeUp";
import FadeUpTitle from "./animation/FadeUpTitle";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

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
      className="px-4 md:px-16 pb-8 md:pb-16 xl:px-24 bg-hero-color overflow-hidden mt-[-500px]"
    >
      <div className="flex flex-col md:flex-row justify-between mb-28">
        <div className="relative flex flex-col ml-auto mr-auto">
          <h1
            ref={titleRef}
            className="text-8xl md:text-9xl lg:text-16xl tracking-tight md:text-nowrap font-medium uppercase text-slate-900 mb-4 md:mb-0"
          >
            {hasAnimated && <FadeUpTitle word={title} />}
          </h1>
        </div>
      </div>
      <div>
        <div className="xl:my-40 flex">
          <div className=" flex-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-slate-700">
              Lorem ipsum dolor sit amet.
            </h1>
          </div>
          <div className=" flex-1">
            <span className="w-3/4 ml-auto text-justify">
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
