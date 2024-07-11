// Iphone images
import iphoneHero from "../public/images/project-one/iphone-hero.webp";
import iphone3D from "../public/images/project-one/iphone-3d.webp";
import iphonePhone from "../public/images/project-one/iphone-phone.webp";
// Iphone video
import iphoneVideo from "../public/videos/iphone/page-video.mp4";

// Arlen images
import arlenHero from "../public/images/project-two/arlen-hero.webp";
import arlenServices from "../public/images/project-two/arlen-services.webp";
import arlenMobiles from "../public/images/project-two/arlen-mobiles.webp";
// Arlen video
import arlenVideo from "../public/videos/arlen/page-video.mp4";

// Podcastr images
import podcastrHero from "../public/images/project-three/podcastr.webp";
import podcastrServices from "../public/images/project-three/podcastr-services.webp";
import podcastrMobiles from "../public/images/project-three/podcastr-mobiles.webp";
// Podcastr video
import podcastrVideo from "../public/videos/podcastr/page-video.mp4";

export const projects = [
  {
    number: "01",
    title: "Iphone",
    images: [iphoneHero, iphonePhone, iphone3D],
    video: iphoneVideo,
    url: "https://arlen-alpha.vercel.app/",
    projectsPageData: {
      panelOne: {
        title: "3D iPhone Showcase",
        description:
          "The primary goal of this project was to replicate the experience of the original iPhone website, incorporating modern web technologies to present the iPhone in a dynamic, interactive 3D format.",
        image: iphone3D,
      },
      panelTwo: {
        image: iphoneHero,
      },
      panelThree: {
        image: arlenHero,
      },
      panelFour: {
        descriptionOne:
          "This project involved creating a web-based application that mimics the aesthetics and user experience of the original iPhone launch website. It featured a real-time 3D model of the iPhone, allowing users to explore the device by rotating, zooming, and interacting with its features directly within their web browser.",

        descriptionTwo:
          "One of the main challenges faced in the project was achieving high-resolution and realistic rendering of the iPhone model on various devices. To address this, Three.js was utilized for rendering 3D graphics in the web environment, enabling the detailed and smooth visualization of the iPhone model. Additionally, optimizing the 3D models and textures ensured performance efficiency while maintaining visual fidelity across desktop and mobile platforms.",
      },
    },
  },

  {
    number: "02",
    title: "Arlen",
    images: [arlenServices, arlenMobiles, arlenHero],
    video: arlenVideo,
    url: "https://arlen-alpha.vercel.app/",
    projectsPageData: {
      panelOne: {
        title: "Arlen Modeling Agency",
        description:
          "The goal of this project was to build a robust, highly optimized multilingual web application with a focus on SEO and performance, using cutting-edge web technologies and frameworks. The project aimed to cater to a diverse audience by offering content in multiple languages, ensuring accessibility and usability on a global scale.",
        image: arlenHero,
      },
      panelTwo: {
        image: arlenServices,
      },
      panelThree: {
        image: arlenVideo,
      },
      panelFour: {
        descriptionOne:
          "Arlen is a dynamic web application built on Next.js, leveraging React components for efficient, reusable code. The website incorporates advanced animations and interactivity using Framer Motion and GSAP (GreenSock Animation Platform), enhancing the user experience with visually appealing effects. Utilizing Next.js's built-in routing system, the site features dynamic routes that ensure seamless navigation without page reloads",

        descriptionTwo:
          "Achieving a balance between high-end animations and optimal performance was a significant challenge, given the complexity of animations with Framer Motion and GSAP. To address this, careful attention was paid to the performance implications of scripts and animations, optimizing them to ensure they did not detract from the site’s speed and responsiveness. Additionally, integrating dynamic routing while maintaining a 100% SEO score involved meticulous configuration of Next.js’s server-side rendering capabilities, which was crucial for ensuring that all pages were crawlable and indexable by search engines",
      },
    },
  },

  {
    number: "03",
    title: "Podcastr",
    images: [podcastrHero, podcastrServices, podcastrMobiles],
    video: podcastrVideo,
    url: "https://arlen-alpha.vercel.app/",
    projectsPageData: {
      panelOne: {
        title: "Project Three",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum est minus, dignissimos placeat consectetur beatae? Obcaecati, provident hic architecto distinctio sequi id blanditiis facere possimus ea nisi, atque ex?",
        image: podcastrHero,
      },
      panelTwo: {
        image: podcastrServices,
      },
      panelThree: {
        image: podcastrVideo,
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
        image: podcastrServices,
      },
    },
  },
];
