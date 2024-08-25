import { Contact } from "@/modules/Contact";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Attribute } from "@/components/Attribute";
import { ProjectList } from "@/modules/Projects/ProjectList";
import { useTranslation } from "react-i18next";

interface Props {
  params: {
    project: string;
  };
}

export default function Page({ params: { project } }: Props) {
  const { t: m } = useTranslation("extra");
  const { t: p } = useTranslation(`projects.list.${project}`);
  const keys = ["name", "date", "description", "details"] as const;
  const IMAGES = ["image1", "image2", "image3"] as const;
  const PROJECTLIST = ["penhor", "musicaShow", "bolsobom"];

  return (
    <main className="flex min-h-screen flex-col bg-primary-100 dark:bg-primary-800">
      <div className="w-full mx-auto z-10" id="top">
        <div className="flex flex-col w-full max-w-7xl px-4 gap-16 mx-auto z-10 py-14" id="top">
          <Section title={project} closing="curlyBrace">
            <div className="py-10">
              <Container shadow={false}>
                <div className="flex flex-col gap-4">
                  {keys.map((key) => (
                    <Attribute key={key} label={p(`${key}.label`)} value={p(`${key}.value`)} />
                  ))}
                  <Attribute
                    label={p("images.label")}
                    images={IMAGES.map((img) => {
                      return {
                        src: p(`images.list.${img}.src`),
                        alt: p(`images.list.${img}.alt`),
                        width: p(`images.list.${img}.width`),
                        height: p(`images.list.${img}.height`),
                      };
                    })}
                  />
                </div>
              </Container>
            </div>
          </Section>
        </div>
      </div>
      <ProjectList list={PROJECTLIST.filter((item) => item !== project)} />
      <div className="w-full bg-primary-300 dark:bg-primary-950 pb-6" id="contact">
        <Contact textBox={m("imOpenToNewOpportunities")} />
      </div>
    </main>
  );
}
