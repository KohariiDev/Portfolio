const iphone = {
  iphoneServices: "https://d34fm3rjhn7e1w.cloudfront.net/iphone/iphone-3d.webp",
  iphoneMobiles:
    "https://d34fm3rjhn7e1w.cloudfront.net/iphone/iphone-phone.webp",
  iphoneHero: "https://d34fm3rjhn7e1w.cloudfront.net/iphone/iphone-hero.webp",
  iphoneVideo: "https://d34fm3rjhn7e1w.cloudfront.net/iphone/page-video.mp4",
};

const arlen = {
  arlenServices:
    "https://d34fm3rjhn7e1w.cloudfront.net/arlen/arlen-services.webp",
  arlenMobiles:
    "https://d34fm3rjhn7e1w.cloudfront.net/arlen/arlen-mobiles.webp",
  arlenHero: "https://d34fm3rjhn7e1w.cloudfront.net/arlen/arlen-hero.webp",
  arlenVideo: "https://d34fm3rjhn7e1w.cloudfront.net/arlen/page-video.mp4",
};

const podcastr = {
  podcastrServices:
    "https://d34fm3rjhn7e1w.cloudfront.net/podcastr/podcastr-services.webp",
  podcastrMobiles:
    "https://d34fm3rjhn7e1w.cloudfront.net/podcastr/podcastr-mobiles.webp",
  podcastrHero:
    "https://d34fm3rjhn7e1w.cloudfront.net/podcastr/podcastr-hero.webp",
  podcastrVideo:
    "https://d34fm3rjhn7e1w.cloudfront.net/podcastr/page-video.mp4",
};

export const projects = [
  {
    number: "01",
    title: "Iphone",
    images: [iphone.iphoneHero, iphone.iphoneServices, iphone.iphoneMobiles],
    video: iphone[3],
    url: "https://iphone-3-d-eight.vercel.app/",
    projectsPageData: {
      panelOne: {
        title: "3D iPhone Showcase",
        description:
          "The primary goal of this project was to replicate the experience of the original iPhone website, incorporating modern web technologies to present the iPhone in a dynamic, interactive 3D format.",
        image: iphone.iphoneServices,
      },
      panelTwo: {
        image: iphone.iphoneHero,
      },
      panelThree: {
        description:
          "One of the main challenges faced in the project was achieving high-resolution and realistic rendering of the iPhone model on various devices. To address this, Three.js was utilized for rendering 3D graphics in the web environment, enabling the detailed and smooth visualization of the iPhone model. Additionally, optimizing the 3D models and textures ensured performance efficiency while maintaining visual fidelity across desktop and mobile platforms.",
      },
      panelFour: {
        descriptionOne:
          "This project involved creating a web-based application that mimics the aesthetics and user experience of the original iPhone launch website. It featured a real-time 3D model of the iPhone, allowing users to explore the device by rotating, zooming, and interacting with its features directly within their web browser.",

        descriptionTwo:
          "To achieve high-resolution and realistic rendering of the iPhone model, Three.js was utilized. Building on the core capabilities of Three.js, Three.js Drei was integrated to simplify the implementation of common 3D features. Drei provides useful helpers, abstractions, and components that streamline the development process.",
      },
    },
  },

  {
    number: "02",
    title: "Arlen",
    images: [arlen.arlenHero, arlen.arlenServices, arlen.arlenMobiles],
    video: arlen[3],
    url: "https://arlen-alpha.vercel.app/",
    projectsPageData: {
      panelOne: {
        title: "Arlen Modeling Agency",
        description:
          "The goal of this project was to build a robust, highly optimized multilingual web application with a focus on SEO and performance. The project aimed to cater to a diverse audience by offering content in multiple languages, ensuring accessibility and usability on a global scale.",
        image: arlen.arlenServices,
      },
      panelTwo: {
        image: arlen.arlenHero,
      },
      panelThree: {
        description:
          "Achieving a balance between high-end animations and optimal performance was a significant challenge, given the complexity of animations with Framer Motion and GSAP. Additionally, integrating dynamic routing while maintaining a 100% SEO score involved advanced configuration of Next.js's capabilities, which was crucial for ensuring that all pages were crawlable and indexable by search engines",
      },
      panelFour: {
        descriptionOne:
          "Arlen is a dynamic web application built on Next.js, leveraging React components for efficient, reusable code. The website incorporates advanced animations and interactivity using Framer Motion and GSAP, enhancing the user experience with visually appealing effects. Utilizing Next.js's built-in routing system, the site features dynamic routes that ensure seamless navigation without page reloads.",

        descriptionTwo:
          "The project also focused on SEO optimization to improve search engine visibility and ranking. By implementing multilingual support, the site caters to a global audience, providing content in multiple languages. Integrating a custom translation system allowed for easy management of translations and ensured a consistent user experience across different language versions of the site.",
      },
    },
  },

  {
    number: "03",
    title: "Podcastr",
    images: [podcastr.podcastrHero, podcastr.podcastrServices, podcastr.podcastrMobiles],
    video: podcastr[3],
    url: "https://podcastr-lyart-psi.vercel.app/",
    projectsPageData: {
      panelOne: {
        title: "Podcastr AI Podcast Creation",
        description:
          "Podcastr is an innovative web application that empowers users to create their own podcasts using advanced AI technology. By leveraging the capabilities of ChatGPT, DALL-E, Convex, and other cutting-edge tools.",
        image: podcastr.podcastrServices,
      },
      panelTwo: {
        image: podcastr.podcastrHero,
      },
      panelThree: {
        description:
          "Podcastr's interface is designed to be user-friendly and intuitive. It guides users through each step of the podcast creation process, from scripting and editing to publishing and promoting. The built-in editing tools allow users to fine-tune their scripts and audio before publishing, ensuring a polished final product",
      },
      panelFour: {
        descriptionOne:
          "By integrating OpenAI's ChatGPT, users can generate high-quality and engaging podcast scripts also, DALL-E enables the creation of custom podcast cover art. User management and authentication are handled securely through Clerk.",

        descriptionTwo:
          "The platform also utilizes Convex for efficient server actions, ensuring fast and reliable performance. Middleware is employed to handle various processes, streamlining the workflow and enhancing the overall user experience.",
      },
    },
  },
];
