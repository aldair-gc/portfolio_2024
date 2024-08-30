import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Attribute } from "@/components/Attribute";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation("translation", { keyPrefix: "about" });
  const LIST = ["experience1", "experience2"];
  const ATTRIBUTES = ["title", "description", "work", "tools", "achievements", "start", "end"];

  return (
    <div className="w-full" id={t("title")}>
      <Section title={t("title")} closing="squareBrace" className="sm:pl-20 py-20 w-full">
        <div className="flex flex-col gap-20 w-fit">
          {LIST.map((item) => (
            <Container key={item} closing="curlyBrace" className="flex flex-col pl-4">
              {ATTRIBUTES.map((attribute) => (
                <Attribute
                  key={attribute}
                  label={t(`list.${item}.${attribute}.label`)}
                  value={t(`list.${item}.${attribute}.value`)}
                />
              ))}
            </Container>
          ))}
        </div>
      </Section>
    </div>
  );
}
