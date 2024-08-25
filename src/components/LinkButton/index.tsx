import { Link } from "@/navigation";

interface Props {
  label: string;
  href: string;
}

export function LinkButton({ label, href }: Props) {
  return (
    <Link
      className="py-2 px-4 text-primary-100 dark:text-primary-950 bg-primary-500 dark:bg-primary-400 shadow hover:opacity-70"
      href={href}
    >
      {label}
    </Link>
  );
}
