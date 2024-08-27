import { HTMLAttributes } from "react";
import { SkillInterface } from "@/interfaces/skill-interface";

interface Props extends SkillInterface, HTMLAttributes<HTMLDivElement> {}

export function Skill({ label, imageSrc, ...rest }: Props) {
  return (
    <div
      className="relative flex items-center flex-col w-20 h-20 gap-2 group hover:scale-110 transition-all"
      {...rest}>
      <img
        src={imageSrc}
        alt={label}
        width={54}
        height={54}
        className="flex-1 object-contain drop-shadow group-hover:drop-shadow-lg dark:drop-shadow-light group-hover:scale-110 transition-all aspect-square"
      />
      <span className="h-4 font-medium text-sm text-center text-primary-950 dark:text-primary-50 leading-4 z-10">
        {label}
      </span>
    </div>
  );
}
