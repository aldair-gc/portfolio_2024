import { About } from "@/modules/About";
import { Contact } from "@/modules/Contact";
import { Expertise } from "@/modules/Expertise";
import { Hero } from "@/modules/Hero";
import { Projects } from "@/modules/Projects";
import { Sticker } from "@/modules/Sticker";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation("translation", { keyPrefix: "extra" });

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full mx-auto z-10" id="home">
        <Hero />
        <Projects />
        <Expertise />
        <About />
        <Contact textBox={t("imOpenToNewOpportunities")} />
        <Sticker />
      </div>
    </main>
  );
}
