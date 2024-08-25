import { HTMLAttributes } from "react";
import { ImageInterface } from "@/interfaces/image-interface";

interface Props extends HTMLAttributes<HTMLDivElement> {
  images: ImageInterface[];
}

export function Images({ images, ...rest }: Props) {
  return (
    <span className="relative flex flex-col flex-wrap sm:flex-row sm:items-end gap-2" {...rest}>
      <span className="text-primary-600 dark:text-primary-400">&#91;</span>
      {images.map((image, ind, arr) => (
        <span key={ind} className="flex items-end">
          <img
            src={image.src}
            alt={image.alt}
            width={+image.width}
            height={+image.height}
            className="object-contain rounded"
          />
          {ind + 1 < arr.length && <span key={`${ind}B`}>&#44;</span>}
        </span>
      ))}
      <span className="text-primary-600 dark:text-primary-400">&#93;&#44;</span>
    </span>
  );
}
