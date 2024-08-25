import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  closing?: "curlyBrace" | "squareBrace" | "parenthesis" | "none";
}

export function Section({ title, closing = "none", children, ...rest }: PropsWithChildren<Props>) {
  const CLOSING = {
    curlyBrace: [<>&nbsp;=&nbsp;&#123;</>, <>&#125;;</>],
    squareBrace: [<>&nbsp;=&nbsp;&#91;</>, <>&#93;;</>],
    parenthesis: [<>&nbsp;=&nbsp;&#40;</>, <>&#41;;</>],
    none: [<></>, <></>],
  };

  return (
    <div className="max-w-7xl mx-auto w-full py-12">
      <div>
        <div className="border-t-secondary-600 dark:border-t-secondary-500 border-t-4 w-80 pb-2" />
        <h1 className="text-3xl sm:text-4xl text-primary-900 dark:text-primary-50 font-medium px-4" id={title}>
          {title}
          <span className="text-primary-400 dark:text-primary-400">{CLOSING[closing][0]}</span>
        </h1>
      </div>
      <div {...rest}>{children}</div>
      <p className="text-3xl sm:text-4xl text-primary-400 dark:text-primary-400">{CLOSING[closing][1]}</p>
    </div>
  );
}
