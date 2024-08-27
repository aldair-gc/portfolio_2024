import { Section } from "@/components/Section";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

interface Props {
  list: string[];
}

export function ProjectList({ list }: Props) {
  const { t } = useTranslation("translation", { keyPrefix: "projects" });

  return (
    <main className="flex min-h-screen flex-col bg-primary-100 dark:bg-primary-800">
      <div className="w-full mx-auto z-10" id="home">
        <div className="w-full" id={t("title")}>
          <Section
            title={t("title")}
            closing="squareBrace"
            className="md:pl-20 md:pr-10 py-20 w-full grid sm:grid-cols-2 gap-6">
            {list.map((project) => (
              <ProjectCard key={project} project={project} className="shadow-2xl" />
            ))}
          </Section>
        </div>
      </div>
    </main>
  );
}
