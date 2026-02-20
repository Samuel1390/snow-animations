import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AnimationProvider } from "./components/context/AnimationContext";
import { ModalProvider } from "./components/context/ModalContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snow Animations",
  description: "Beautiful CSS animations ready to copy and paste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} mx-auto bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 antialiased`}
      >
        <AnimationProvider>
          <ModalProvider>{children}</ModalProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
