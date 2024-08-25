import { About } from "@/modules/About";
import { Sticker } from "@/modules/Sticker";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-primary-100 dark:bg-primary-800">
      <div className="w-full mx-auto z-10" id="home">
        <About />
        <Sticker />
      </div>
    </main>
  );
}
