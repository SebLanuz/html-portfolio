import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="min-h-[calc(100vh-88px)] bg-base px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 text-center font-display text-[24px] font-bold text-white sm:text-5xl">
          Every project has its own story
        </h1>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
