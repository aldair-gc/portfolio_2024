import { Section } from "../../components/Section";
import { Container } from "../../components/Container";
import { useTranslation } from "react-i18next";
import { Skill } from "./Skill";
import expertise from "@/assets/expertise.json";

export function Expertise() {
  const { t } = useTranslation("translation", { keyPrefix: "expertise" });

  return (
    <div className="w-full" id={t("title")}>
      <Section
        title={t("title")}
        closing="squareBrace"
        className="flex flex-col md:pl-20 md:pr-10 py-10 sm:py-20">
        {expertise.map((field) => (
          <Container
            key={field.name}
            closing="curlyBrace"
            shadow={false}
            background={false}
            className="pl-4">
            <h3 className="text-2xl text-primary-800 dark:text-primary-100">
              {t(`list.${field.name}.title`)}
              <span className="text-primary-600 dark:text-primary-400">:</span>
            </h3>
            <Container closing="squareBrace" background={false} shadow={false}>
              <div className="flex flex-wrap gap-4">
                {field.values.map((value) => (
                  <Skill key={value} expertise={field.name} skill={value} />
                ))}
              </div>
            </Container>
          </Container>
        ))}
      </Section>
    </div>
  );
}
