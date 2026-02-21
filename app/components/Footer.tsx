import React from "react";
import Logo from "./Logo";

const ABOUT_DEV = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-david-nelo-132632378/",
  },
  {
    title: "Github",
    href: "https://github.com/Samuel1390",
  },
  {
    title: "Portfolio",
    href: "https://samuel-nelo-portfolio.vercel.app",
  },
  {
    title: "Contribute to the project",
    href: "issue",
  },
];
const CREATED_WITH_LiNKS = [
  {
    title: "Tailwindcss",
    href: "https://tailwindcss.com",
  },
  {
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    title: "React",
    href: "https://react.dev",
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
];

const Footer = () => {
  return (
    <footer
      className="dark:bg-slate-950 py-10 
    flex w-screen justify-center items-center bg-neutral-200 dark:text-white"
    >
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="p-4 flex max-w-3xl items-center flex-col gap-3">
          <div className="flex items-center gap-2">
            <Logo
              background={"linear-gradient(45deg, #ddd, #fff)"}
              color={"#000"}
            />
            <h2 className="title opacity-70">Snow animations</h2>
          </div>
          <div className="max-w-sm text-center">
            <p>
              Created with ❤️ by Samuel Nelo Ispired by{" "}
              <a
                target="_blank"
                rel="noopener"
                className="text-sky-600"
                href="https://tailwind-animations.com"
              >
                Tailwind animations
              </a>{" "}
              by Midudev and friends
            </p>
          </div>
        </div>
        <div>
          <h3 className="dark:text-white text-lg text-center text-black">
            About the developer
          </h3>
          <NavLinks links={ABOUT_DEV} />
        </div>
        <div className="text-center">
          <h3 className="dark:text-white text-lg text-center text-black">
            Technologies used
          </h3>
          <NavLinks links={CREATED_WITH_LiNKS} />
        </div>
      </div>
    </footer>
  );
};
function NavLinks({
  links,
}: {
  links: Array<{ title: string; href: string }>;
}) {
  return (
    <nav className="m-2">
      <ul className="flex flex-col gap-3 items-center">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-slate-700 text-center hover:text-gray-950 dark:text-gray-400 dark:hover:text-white
            transition-colors text-md"
          >
            <a target="_blank" rel="noopener" href={link.href}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Footer;
