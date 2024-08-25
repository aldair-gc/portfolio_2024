import { Attribute } from "../../components/Attribute";
import { Container } from "../../components/Container";
import { Section } from "../../components/Section";
import { TextBox } from "../../components/TextBox";
import { useTranslation } from "react-i18next";

interface Props {
  textBox?: string;
}

export function Contact({ textBox }: Props) {
  const { t } = useTranslation("contact");
  const keys = ["email", "phone", "whatsApp", "linkedIn", "github"] as const;

  return (
    <div className="w-full bg-primary-300 dark:bg-primary-950" id={t("title")}>
      <Section
        title={t("title")}
        closing="squareBrace"
        className="grid grid-cols-1 md:grid-cols-2 py-10 gap-y-5 w-full items-center justify-items-center">
        {textBox && <TextBox text={textBox} />}
        <Container closing="curlyBrace" shadow={false} background={false} className="w-fit">
          <div className="flex flex-col">
            {keys.map((key) => (
              <Attribute
                key={key}
                label={t(`list.${key}.label`)}
                value={t(`list.${key}.value`)}
                href={t(`list.${key}.href`)}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
