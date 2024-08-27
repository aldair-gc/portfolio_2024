import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  project: string;
}

export function ProjectCard({ project, ...rest }: ProjectProps) {
  const { t } = useTranslation("translation", { keyPrefix: `projects.list.${project}` });

  return (
    <div {...rest}>
      <Link to={`/projects/${project}`} className="flex flex-col h-full w-full group">
        <div className="flex-1 flex justify-center p-4 md:p-8 bg-primary-500 dark:bg-primary-400">
          <img
            src={`/images/${t("image.src")}`}
            alt={t("image.alt")}
            width={600}
            height={400}
            className="object-contain drop-shadow-md group-hover:drop-shadow-xl group-hover:scale-105 transition-all aspect-square"
          />
        </div>
        <div className="flex items-center justify-center p-4 bg-primary-400 dark:bg-primary-500">
          <h2 className="text-2xl text-primary-900 dark:text-primary-50">{t("name.value")}</h2>
        </div>
      </Link>
    </div>
  );
}
