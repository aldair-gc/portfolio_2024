import { About as AboutModule } from "@/modules/About";
import { Sticker } from "@/modules/Sticker";

export function About() {
  return (
    <main className="flex min-h-screen flex-col bg-primary-100 dark:bg-primary-800">
      <div className="w-full mx-auto z-10" id="home">
        <AboutModule />
        <Sticker />
      </div>
    </main>
  );
}
