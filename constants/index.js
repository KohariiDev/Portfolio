// Navigation links data
export const links = [
  {
    title: "Home",
    href: "#home",
    src: "hero-image.webp",
  },
  {
    title: "About",
    href: "#about",
    src: "hero-image.webp",
  },
  {
    title: "Projects",
    href: "#projects",
    src: "hero-image.webp",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "hero-image.webp",
  },
];

// Hero section data
export const hero = {
  title: "NORBERT KOHARI",
  para: "Passionate front-end developer with a keen eye for detail and a love for crafting beautiful, responsive websites. Specializing in modern web technologies, I create seamless user experiences and bring designs to life with precision and creativity.",
  cta: "scroll",
  buttonAction: "Get in Touch",
  link: "#projects",
};

// TextPath section data
export const textPath = {
  text1: "Innovating the Future, One Project at a Time",
  text2: "Work",
};

// Project section data
import Picture1 from "../public/images/hero-image.webp";
import Picture2 from "../public/images/desktop.png";
import Picture3 from "../public/images/hero-image.webp";

// Project One data
import iphoneVideo from "../public/images/project-one/iphone-video.mp4";
import brainWaveVideo from "../public/images/project-two/brainwave-video.mp4";
import arlenVideo from "../public/images/project-three/arlen-video.mp4";

export const videos = [iphoneVideo, brainWaveVideo, arlenVideo];

export const projects = [
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
    projectsPageData: {
      panelOne: {
        title: "Project One",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
        image: Picture1,
      },
      panelTwo: {
        image: Picture1,
      },
      panelThree: {
        image: Picture1,
      },
      panelFour: {
        descriptionOne:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",

        descriptionTwo:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
      },
      panelFive: {
        title: "Project One",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
        image: Picture1,
      },
    },
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
    projectsPageData: {
      panelOne: {
        title: "Project Two",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
        image: Picture1,
      },
      panelTwo: {
        image: Picture1,
      },
      panelThree: {
        image: Picture1,
      },
      panelFour: {
        descriptionOne:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",

        descriptionTwo:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
      },
      panelFive: {
        title: "Project One",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
        image: Picture1,
      },
    },
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
    projectsPageData: {
      panelOne: {
        title: "Project Three",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
        image: Picture1,
      },
      panelTwo: {
        image: Picture1,
      },
      panelThree: {
        image: Picture1,
      },
      panelFour: {
        descriptionOne:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",

        descriptionTwo:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
      },
      panelFive: {
        title: "Project One",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
        image: Picture1,
      },
    },
  },
];

// Service section data
export const serviceText = {
  title: "about",
};

export const services = [
  {
    title: "Web Development",
    number: "01",
    description:
      "Good brand design the visual representation and identity of a brand that communicates its values, personality, and purpose to its target audience",
  },
  {
    title: "Motion & Animation",
    number: "02",
    description:
      "A well-designed website is essential for businesses and individuals alike, as it plays a crucial role in attracting and engaging visitors",
  },
  {
    title: "SEO & Marketing",
    number: "03",
    description:
      "Good product design refers to the process of creating products that are not only visually appealing but also functional, user-friendly, and capable of solving a specific problem or fulfilling a need",
  },
  {
    title: "AR/VR Design",
    number: "04",
    description:
      "Create an immersive experience by leveraging the capabilities of AR/VR technologies. Utilize 3D audio, realistic graphics, and interactive elements to make users feel fully engaged in the virtual environment.",
  },
];

// Sliding images
export const slider1 = [
  {
    color: "#e5e5e5",
    src: Picture1,
  },
  {
    color: "#e5e5e5",
    src: Picture2,
  },
  {
    color: "#e5e5e5",
    src: Picture3,
  },
  {
    color: "#e5e5e5",
    src: Picture1,
  },
];

export const slider2 = [
  {
    color: "#e5e5e5",
    src: Picture1,
  },
  {
    color: "#e5e5e5",
    src: Picture2,
  },
  {
    color: "#e5e5e5",
    src: Picture3,
  },
  {
    color: "#e5e5e5",
    src: Picture3,
  },
];

// Footer data
import textImage from "../public/images/footer-text.svg";

export const footer = {
  textImage: textImage,
  links: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  socials: [
    {
      title: "facebook",
      href: "https://www.facebook.com",
    },
    {
      title: "twitter",
      href: "https://www.twitter.com",
    },
    {
      title: "youtube",
      href: "https://www.youtube.com",
    },
    {
      title: "tiktok",
      href: "https://www.tiktok.com",
    },
  ],
};

// Social media icons
export const socials = {
  facebook: (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 31.5 58"
      width={12}
    >
      <path d="m20.72,22.16c2.77,0,5.55.02,8.32.03.4,0,.8.02,1.2.03.07.06.14.13.21.19-.28,1.58-.56,3.16-.83,4.75-.32,1.87-.64,3.74-.99,5.76-1.37.13-2.76-.07-4.14-.04-1.36.03-2.72,0-4.2,0-.13,8.38.12,16.72.11,25.11h-11.17v-24.91H0v-10.81h9.16c.04-.39.11-.71.11-1.02-.01-1.58-.05-3.17-.06-4.75-.01-1.62-.16-3.26.02-4.85.19-1.69.64-3.35,1.52-4.86,1.36-2.33,3.28-4.06,5.58-5.4,1.39-.81,2.94-1.25,4.52-1.3C24.28-.03,27.71.02,31.15,0c.07,0,.13.05.35.14.04,3.3-.29,6.66-.18,10.11-1.13,0-2.15.03-3.17,0-1.57-.07-3.15-.06-4.65.46-1.42.49-2.46,1.4-2.89,2.95-.3,1.08-.36,2.16-.34,3.25.04,1.69.13,3.38.2,5.07.08.06.16.13.24.19Z" />
    </svg>
  ),
  twitter: (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.13 46.08"
      width={18}
    >
      <path d="m0,41.47c3.69-.34,7.11-.82,10.38-1.89,2.05-.67,4.03-1.62,5.71-3.35-.55-.18-1.03-.38-1.53-.48-2.77-.58-5.26-1.64-7-4-.72-.98-1.33-2.03-2.03-3.1,1.23-.3,2.43-.59,3.81-.93-.91-.56-1.7-1.08-2.52-1.53-2.08-1.13-3.73-2.68-4.6-4.91-.37-.95-.52-1.98-.77-2.98-.11-.43-.19-.86-.3-1.33,1.42.02,2.71.63,4.2.28-.72-1.12-1.37-2.17-2.06-3.2-1.78-2.65-2.05-5.51-1.29-8.54.23-.91.43-1.84.69-2.95.78.63,1.4,1.05,1.94,1.56,2.42,2.28,5.16,4.11,8.01,5.83,2.36,1.43,4.89,2.38,7.49,3.17,1.99.61,4.06.96,6.33.91.02-.67.06-1.3.07-1.92.05-2.38.81-4.54,1.99-6.57,1.71-2.92,4.43-4.39,7.56-5.26,1.39-.39,2.76-.3,4.22-.14,2.64.29,4.8,1.52,6.96,2.82.49.3.86.38,1.4.19,1.21-.43,2.43-.83,3.67-1.19.49-.15,1.02-.18,1.84-.31-1.11,1.79-2.05,3.3-3,4.82,1.65.08,3.16-.84,4.97-.57-.86,1.35-1.83,2.42-2.78,3.52-.78.91-1.81,1.7-2.04,2.98-.25,1.43-.63,2.83-.75,4.31-.14,1.7-.6,3.37-.96,5.05-.14.64-.37,1.25-.58,1.87-1.35,3.9-3.27,7.44-5.93,10.64-2.96,3.55-6.42,6.42-10.55,8.47-2.84,1.4-5.83,2.42-8.95,2.97-2.6.45-5.24.39-7.87.33-2.95-.07-5.78-.69-8.6-1.52-2.27-.67-4.39-1.61-6.51-2.61-.14-.07-.26-.18-.61-.44Z" />
    </svg>
  ),
  youtube: (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51.1 36.69"
      width={18}
    >
      <path d="m26.22,36.56c-4.74,0-9.49,0-14.23,0-3.93,0-7.19-1.49-9.63-4.58-1.02-1.29-1.66-2.82-2.03-4.45-.28-1.25-.28-2.52-.29-3.78C.03,19.98,0,16.21,0,12.44c0-1.06,0-2.13.18-3.17.2-1.09.59-2.15,1.16-3.13C2.75,3.73,4.77,1.97,7.28.79c.85-.4,1.78-.61,2.74-.63,2.02-.04,4.04-.21,6.06-.14,7.73.27,15.47.02,23.2.14,1.97.03,3.89.43,5.62,1.33,2.23,1.16,3.98,2.81,4.91,5.25.52,1.36.76,2.72.93,4.16.56,4.65.3,9.32.27,13.98-.02,2.7-.92,5.16-2.63,7.27-1.73,2.15-3.95,3.62-6.68,4.08-1.8.31-3.64.39-5.47.43-3.34.06-6.68.02-10.02.02,0-.04,0-.07,0-.11Zm7.94-18.51c-4.62-2.62-9.12-5.17-13.62-7.71-.12-.07-.29-.07-.4-.1v16.33c4.78-2.84,9.41-5.56,14.03-8.52Z" />
    </svg>
  ),
  tiktok: (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.26 53.87"
      width={18}
    >
      <path d="m34.27,18.6c0,4.82,0,9.64.03,14.47.01,2.53-.24,5.01-.67,7.5-.68,3.88-2.69,6.84-5.66,9.33-2.21,1.86-4.72,2.98-7.48,3.6-1.02.23-2.09.29-3.14.34-3.54.18-6.73-.93-9.64-2.84-2.68-1.76-4.74-4.12-6.12-7.05-.74-1.58-1.16-3.26-1.51-4.94-.2-.98,0-2.04-.02-3.06-.07-3.01,1.1-5.62,2.62-8.11,2.19-3.6,5.35-5.98,9.35-7.26,1.24-.4,2.51-.7,3.84-.66.33.01.66-.13.99-.14.83-.02,1.65,0,2.58,0v9.31c-.27,0-.55-.01-.84,0-1.06.05-2.13.05-3.18.18-2.4.29-3.92,1.83-5.15,3.74-1.77,2.78-.84,7.04,1.38,9.35,2.28,2.38,6.05,2.67,8.72,1.48.6-.27,1.18-.6,1.73-.98,1.45-1.01,2.12-2.51,2.39-4.17.62-3.94.33-7.92.36-11.89.05-7.97,0-15.95,0-23.92,0-.87,0-1.74,0-2.72,3.08-.25,6.11-.14,9.16-.19.91,7.84,5.41,12.08,13.22,13.34-.07,2.84.22,5.85-.25,8.97-4.44-.24-8.48-1.55-12.25-3.76-.11-.11-.22-.22-.33-.33-.05.13-.09.25-.14.38Z" />
    </svg>
  ),
};
