import { ItemInterface } from "@/interfaces/item-interface";

interface Props {
  data: ItemInterface;
}

export function Link({ data }: Props) {
  return (
    <a
      className="text-secondary-800 dark:text-secondary-200 hover:text-secondary-200 dark:hover:text-secondary-800 hover:bg-secondary-800 dark:hover:bg-secondary-200 underline hover:no-underline"
      href={data.href}
      target="_blank"
    >
      {data.value}
    </a>
  );
}
