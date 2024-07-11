import { useEffect, useRef } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export default function VideoInView({ src, className }) {
  const ref = useRef(null);
  const isInView = useInViewAnimation(ref, true, "0px", 0.5);

  useEffect(() => {
    const videoElement = ref.current;

    if (videoElement) {
      const handleEnded = () => {
        videoElement.currentTime = 0;
        videoElement.play();
      };

      videoElement.addEventListener("ended", handleEnded);

      if (isInView) {
        videoElement.play();
        videoElement.autoplay = true;
      } else {
        videoElement.pause();
        videoElement.autoplay = false;
      }

      return () => {
        videoElement.removeEventListener("ended", handleEnded);
      };
    }
  }, [isInView]);

  return (
    <video
      ref={ref}
      muted
      preload="metadata"
      playsInline
      className={className}
      src={src}
    />
  );
}
