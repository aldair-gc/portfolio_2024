import { useState } from "react";
import { FullScreenMenu } from "./FullScreenMenu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  links: string[];
}

export function MenuBar({ links }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { language, changeLanguage } = useTranslation().i18n;

  return (
    <>
      <div className="fixed top-0 flex justify-end w-full backdrop-blur-md bg-primary-100/50 dark:bg-primary-800/50 z-20">
        <div
          className="sm:hidden flex items-center justify-center w-12 h-12 bg-primary-300 cursor-pointer select-none"
          onClick={() => setIsMenuOpen((state) => !state)}>
          <p className="text-3xl">{isMenuOpen ? "X" : ">_"}</p>
        </div>
        <div className="hidden sm:flex w-full max-w-7xl h-12 mx-auto flex-nowrap justify-between">
          <div className="flex">
            {links.map((link) => (
              <Link
                key={link}
                className="flex items-center px-4 whitespace-nowrap font-medium text-primary-900 dark:text-primary-50 hover:text-secondary-700 hover:dark:text-secondary-400"
                to={`/#${link}`}>
                &gt;&nbsp;{link}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <span
              className={`p-4 cursor-pointer ${
                language === "en"
                  ? "text-secondary-700 dark:text-secondary-300"
                  : "text-primary-600 dark:text-primary-200"
              }`}
              onClick={() => changeLanguage("en")}>
              {"| english"}
            </span>
            <span
              className={`p-4 cursor-pointer ${
                language === "br"
                  ? "text-secondary-700 dark:text-secondary-300"
                  : "text-primary-600 dark:text-primary-200"
              }`}
              onClick={() => changeLanguage("br")}>
              {"| português"}
            </span>
          </div>
        </div>
      </div>
      <FullScreenMenu open={isMenuOpen} links={links} onClick={() => setIsMenuOpen(false)} />
    </>
  );
}
