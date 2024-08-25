import { Section } from "../../components/Section";
import { Container } from "../../components/Container";
import { useTranslation } from "react-i18next";
import { Skill } from "./Skill";

export function Expertise() {
  const { t } = useTranslation("expertise");

  const GROUPS = ["backend", "frontend", "general"] as const;
  const LISTS = {
    backend: [
      "node",
      "redux",
      "sql",
      "prisma",
      "nginx",
      "apache",
      "rest",
      "mongodb",
      "express",
      "c",
    ] as const,
    frontend: [
      "css",
      "html",
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "reactNative",
      "vite",
      "tailwind",
    ] as const,
    general: ["git", "ui", "ux", "docker", "strapi", "jest", "solid", "designPatterns"] as const,
  };

  return (
    <div className="w-full" id={t("title")}>
      <Section
        title={t("title")}
        closing="squareBrace"
        className="flex flex-col gap-20 md:pl-20 md:pr-10 py-20 w-full">
        {GROUPS.map((group) => (
          <Container key={group} closing="curlyBrace" className="flex w-fit flex-col gap-4 pl-4">
            <h3 className="text-2xl text-primary-800 dark:text-primary-100">
              {t(`list.${group}.title`)}
              <span className="text-primary-600 dark:text-primary-400">:</span>
            </h3>
            <Container closing="squareBrace" shadow={false} className="pl-4">
              <div className="flex flex-wrap gap-2">
                {LISTS[group].map((item) => (
                  <Skill
                    key={item}
                    label={t(`list.${group}.list.${item}.label`)}
                    imageSrc={t(`list.${group}.list.${item}.imageSrc`)}
                  />
                ))}
              </div>
            </Container>
          </Container>
        ))}
      </Section>
    </div>
  );
}
