import Picture1 from "../../public/images/hero-image.webp";
import Picture2 from "../../public/images/desktop.png";
import Picture3 from "../../public/images/hero-image.webp";

import iphoneVideo from "../../public/images/project-one/iphone-video.mp4";
import brainWaveVideo from "../../public/images/project-two/brainwave-video.mp4";
import arlenVideo from "../../public/images/project-three/arlen-video.mp4";

export const videos = [iphoneVideo, brainWaveVideo, arlenVideo];

export const projectsData = [
  {
    number: "01",
    title: "Iphone 3D",
    description:
      "libero elementum tincidunt. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend.",
    src: [Picture2, Picture1, Picture1, Picture1],
    images: [Picture1, Picture2, Picture3],
    video: iphoneVideo,
    alt: "hero image 1",
    cta: "View Project",
  },

  {
    number: "02",
    title: "Brainwave AR",
    description:
      "libero elementum tincidunt. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend.",
    src: [Picture1, Picture1, Picture1, Picture1],
    images: [Picture1, Picture2, Picture3],
    video: brainWaveVideo,
    alt: "hero image 2",
    cta: "View Project",
  },

  {
    number: "03",
    title: "Project Three",
    description:
      "libero elementum tincidunt. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend.",
    src: [Picture1, Picture1, Picture1, Picture1],
    images: [Picture1, Picture2, Picture3],
    video: arlenVideo,
    alt: "hero image 3",
    cta: "View Project",
  },
];
