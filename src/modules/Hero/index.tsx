import { Container } from "../../components/Container";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <div className="w-full" id="hero">
      <div className="flex flex-col justify-center w-full max-w-7xl mx-auto gap-16 max-h-[1024px] h-screen px-4">
        <h1 className="flex flex-col sm:flex-row">
          <span className="text-3xl sm:text-5xl text-primary-600 dark:text-primary-400">
            {t("hero.title.label")}:&nbsp;
          </span>
          <span className="text-3xl sm:text-5xl text-primary-900 dark:text-primary-50 font-medium">
            <span className="text-3xl sm:text-5xl text-primary-600 dark:text-primary-400">
              &quot;
            </span>
            {t("hero.title.value")}
            <span className="text-3xl sm:text-5xl text-primary-600 dark:text-primary-400">
              &quot;
            </span>
          </span>
        </h1>
        <Container closing="curlyBrace" background={false} shadow={false}>
          <p className="flex flex-col sm:flex-row max-w-lg gap-4 py-2">
            <span className="flex-none text-primary-600 dark:text-primary-400">
              {t("hero.subtitle.label")}:&nbsp;
            </span>
            <span className="text-primary-800 dark:text-primary-50 pl-4 sm:pl-0">
              {t("hero.subtitle.value")}
            </span>
          </p>
        </Container>
      </div>
    </div>
  );
}
