import { HTMLAttributes } from "react";
import { AttributeInterface } from "@/interfaces/attribute-interface";
import { Images } from "./Images";

interface Props extends AttributeInterface, HTMLAttributes<HTMLDivElement> {}

export function Attribute({ label, value, href, images, ...rest }: Props) {
  return (
    <div className="py-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-4" {...rest}>
      <dt className="font-medium text-primary-900 dark:text-primary-50">{label}&#58;&nbsp;</dt>
      <dd className="mt-1 text-primary-700 dark:text-primary-200 sm:mt-0 sm:col-span-3">
        <p className="pl-4 sm:pl-0">
          {(value || href) && <span>&quot;</span>}
          {href ? (
            <a
              className="text-secondary-800 dark:text-secondary-300 hover:text-secondary-300 dark:hover:text-secondary-800 hover:bg-secondary-800 dark:hover:bg-secondary-300 underline hover:no-underline"
              href={href}
              target="_blank"
            >
              {value}
            </a>
          ) : (
            value && value
          )}
          {images && <Images images={images} />}
          {(value || href) && <span>&quot;&#44;</span>}
        </p>
      </dd>
    </div>
  );
}
