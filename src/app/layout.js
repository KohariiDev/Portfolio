import "./globals.css";
import dynamic from "next/dynamic";

import Header from "../components/header";
import { NavProvider } from "../context/NavContext";
import { Oswald } from "next/font/google";

import { footerData } from "@/data";

import { LenisProvider } from "../context/LenisProvider";

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <p>Loading...</p>,
});

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
    "3D modeling",
    "construction",
    "mechanical",
    "architecture",
    "quality",
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
              <Footer footer={footerData} />
            </NavProvider>
          </LenisProvider>
        </div>
      </body>
    </html>
  );
}
