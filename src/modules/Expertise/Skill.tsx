import { HTMLAttributes } from "react";
import { SkillInterface } from "@/interfaces/skill-interface";

interface Props extends SkillInterface, HTMLAttributes<HTMLDivElement> {}

export function Skill({ label, imageSrc, ...rest }: Props) {
  return (
    <div
      className="flex sm:flex-col w-fit sm:w-40 items-end sm:items-start sm:h-40 bg-primary-400 dark:bg-primary-300 justify-between p-2 group hover:scale-90 transition-all"
      {...rest}>
      <span className="text-primary-600 dark:text-primary-500">[</span>
      <span className="font-medium text-sm sm:text-base text-primary-900 dark:text-primary-800 leading-4">
        {label}
        <span className="text-primary-600 dark:text-primary-500">&#44;&nbsp;</span>
      </span>
      <img
        src={imageSrc}
        alt={label}
        width={36}
        height={36}
        className="object-contain drop-shadow group-hover:drop-shadow-lg dark:drop-shadow-light group-hover:scale-110 transition-all aspect-square"
      />
      <span className="text-primary-600 dark:text-primary-500">]</span>
    </div>
  );
}
