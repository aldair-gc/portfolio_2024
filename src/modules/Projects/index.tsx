import { Section } from "../../components/Section";
import { Container } from "../../components/Container";
import { Attribute } from "../../components/Attribute";
import { useTranslation } from "react-i18next";
import { LinkButton } from "@/components/LinkButton";

export function Projects() {
  const { t } = useTranslation("projects");

  const projects = ["penhor", "musicaShow", "bolsobom"];
  const attributes = ["name", "date", "overview"];

  return (
    <div className="w-full" id={t("title")}>
      <Section
        title={t("title")}
        closing="squareBrace"
        className="md:pl-20 md:pr-10 py-20 w-full flex flex-col gap-20">
        {projects.map((project) => (
          <div key={project} className="shadow-2xl">
            <div className="flex justify-center p-4 md:p-8 w-full h-full md:h-[500px] bg-primary-500 dark:bg-primary-400 aspect-square">
              <img
                src={t(`list.${project}.image.src`)}
                alt={t(`list.${project}.image.alt`)}
                width={600}
                height={400}
                className="max-h-full w-auto max-w-full drop-shadow-lg object-contain"
              />
            </div>
            <div className="flex flex-col md:flex-row bg-primary-200 dark:bg-primary-700">
              <Container
                closing="curlyBrace"
                shadow={false}
                className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col cursor-pointer">
                  {attributes.map((attribute) => (
                    <Attribute
                      key={attribute}
                      label={t(`list.${project}.${attribute}.label`)}
                      value={t(`list.${project}.${attribute}.value`)}
                    />
                  ))}
                </div>
              </Container>
              <div className="flex items-center justify-center py-4 px-4 sm:px-12">
                <LinkButton label={t("open")} href={`/projects/${project}`} />
              </div>
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
}
