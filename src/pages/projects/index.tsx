import { Projects as ProjectsModule } from "@/modules/Projects";

export function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-primary-100 dark:bg-primary-800">
      <div className="w-full mx-auto z-10" id="home">
        <ProjectsModule />
      </div>
    </main>
  );
}
