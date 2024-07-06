import iphoneVideo from "../../public/videos/iphone/iphone-video.mp4";
import iphonePhoneVideo from "../../public/videos/iphone/iphone-phone-video.mp4";

import iphone from "../../public/images/project-one/iphone.webp";
import iphonePhone from "../../public/images/project-one/iphone-phone.webp";

import arlen from "../../public/images/project-two/arlen.webp";
import podcastr from "../../public/images/project-three/podcastr.webp";

export const projectsData = [
  {
    number: "01",
    title: "Iphone 3D",
    description:
      "libero elementum tincidunt. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend.",
    src: [iphone, iphone, iphone, iphone],
    images: [iphonePhone, iphonePhone, iphonePhone],
    video: [iphoneVideo, iphonePhoneVideo],
    alt: "hero image 1",
    cta: "View Project",
  },

  {
    number: "02",
    title: "Arlen",
    description:
      "libero elementum tincidunt. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend.",
    src: [arlen, arlen, arlen, arlen],
    images: [arlen, arlen, arlen],
    video: [iphoneVideo, iphonePhoneVideo],
    alt: "hero image 2",
    cta: "View Project",
  },

  {
    number: "03",
    title: "Podcastr",
    description:
      "libero elementum tincidunt. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend. Nam auctor, nunc nec eleifend.",
    src: [podcastr, podcastr, podcastr, podcastr],
    images: [podcastr, podcastr, podcastr],
    video: [iphoneVideo, iphonePhoneVideo],
    alt: "hero image 3",
    cta: "View Project",
  },
];
