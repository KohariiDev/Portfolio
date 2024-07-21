import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/header";
import { NavProvider } from "@/context/NavContext";
import { Oswald } from "next/font/google";

import { LenisProvider } from "@/context/LenisProvider";
import LazyComponent from "@/components/LazyComponent";

import Footer from "@/components/Footer";
import { footerData } from "@/data";

export const metadata = {
  title: "Norbert Kohari",
  description:
    "Explore my portfolio featuring advanced web applications built with Next.js, React, Framer Motion, and GSAP for dynamic, engaging user experiences.",
  openGraph: {
    title: "Norbert Kohari",
    description:
      "Explore my portfolio featuring advanced web applications built with Next.js, React, Framer Motion, and GSAP for dynamic, engaging user experiences.",
    url: "https://norbertkohari.com/",
    site_name: "Arlen",
  },
  keywords: [
    "Portfolio",
    "Web Development",
    "Next.js",
    "React",
    "Framer Motion",
  ],
};

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={oswald.className}>
          <LenisProvider>
            <NavProvider>
              <Header />
              {children}
              <LazyComponent
                component={Footer}
                footer={footerData}
                margin={"550px"}
              />
            </NavProvider>
          </LenisProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
