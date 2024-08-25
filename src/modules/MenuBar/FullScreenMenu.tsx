import { HTMLAttributes } from "react";
import { useLocation, Link } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  links: string[];
}

export function FullScreenMenu({ open, links, ...rest }: Props) {
  const path = useLocation().pathname;

  return (
    <div
      className={`fixed inset-0 top-12 bg-primary-100 dark:bg-primary-800 z-30 overscroll-contain overflow-hidden transition-transform ${
        open ? "h-full" : "h-0"
      }`}
      {...rest}>
      <div className="flex flex-col gap-8 w-full justify-between">
        <div className="flex flex-col text-primary-900 dark:text-primary-50">
          {links.map((link, ind) => (
            <Link
              key={link}
              className={`p-4 whitespace-nowrap transition-all cursor-pointer ${
                open ? "-translate-x-0" : "-translate-x-1/2"
              }`}
              style={{ transitionDelay: `${ind * 50}ms` }}
              to={`/#${link}`}>
              &gt;&nbsp;{link}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <Link
            className={`p-4 transition-all cursor-pointer ${
              locale === "en"
                ? "text-secondary-700 dark:text-secondary-300"
                : "text-primary-600 dark:text-primary-200"
            } ${open ? "-translate-x-0" : "-translate-x-1/2"}`}
            style={{ transitionDelay: `${links.length * 50}ms` }}
            to={path}
            lang="en">
            {"| english"}
          </Link>
          <Link
            className={`p-4 transition-all cursor-pointer ${
              locale === "br"
                ? "text-secondary-700 dark:text-secondary-300"
                : "text-primary-600 dark:text-primary-200"
            } ${open ? "-translate-x-0" : "-translate-x-1/2"}`}
            style={{ transitionDelay: `${(links.length + 1) * 50}ms` }}
            to={path}
            lang="br">
            {"| português"}
          </Link>
        </div>
      </div>
    </div>
  );
}
