import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AnimationProvider } from "./components/context/AnimationContext";
import { ModalProvider } from "./components/context/ModalContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snow Animations",
  description: "Beautiful CSS animations ready to copy and paste",
  authors: [
    { name: "Samuel Nelo", url: "https://samuel-nelo-portfolio.vercel.app" },
  ],
  keywords: [
    "css animations",
    "animations collection",
    "tailwindcss animations",
    "reveal on scroll animations",
    "card animations",
    "ready to use animations",
    "animations for developers",
    "copy and paste animations",
  ],
  openGraph: {
    title: "Snow Animations",
    description: "Beautiful CSS animations ready to copy and paste",
    url: "",
    siteName: "Snow Animations",
    images: ["./og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} overflow-x-hidden mx-auto bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased`}
      >
        <AnimationProvider>
          <ModalProvider>{children}</ModalProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
