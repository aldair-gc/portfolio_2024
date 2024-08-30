import { useTranslation } from "react-i18next";
import { Hero } from "@/modules/Hero";
import { Projects } from "@/modules/Projects";
import { Expertise } from "@/modules/Expertise";
import { About } from "@/modules/About";
import { Contact } from "@/modules/Contact";
import { Sticker } from "@/modules/Sticker";

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
