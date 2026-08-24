import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { assets } from "@/lib/assets";

export default function AboutPage() {
  return (
    <section className="bg-base px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.aboutPortrait}
            alt={site.name}
            className="hidden h-[220px] w-[220px] shrink-0 rounded-2xl object-contain lg:block"
          />

          <div className="flex max-w-2xl flex-col gap-5">
            <p className="font-display text-2xl text-accent sm:text-3xl">{site.about.greeting}</p>
            <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              {site.role}
            </h1>
            <p className="text-xl text-white/90">{site.tagline}</p>

            <div className="mt-2 flex flex-col gap-4 text-white/85">
              {site.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/contact"
                size="huge"
                variant="fill"
                className="!rounded-full !border !border-accent !bg-transparent !text-accent !shadow-none hover:!bg-accent/10 sm:!rounded-2xl sm:!border-transparent sm:!bg-accent sm:!text-[#001855] sm:!shadow-[0_4px_2px_rgba(0,0,0,0.25)] sm:hover:!bg-accent sm:hover:!brightness-95"
              >
                Contact me
              </Button>
              <Button
                href={assets.cvPdf}
                download="Sebastian-Lara-CV.pdf"
                size="huge"
                variant="fill"
                className="!rounded-full sm:!rounded-2xl"
              >
                CV
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-28 border-t border-white/10 pt-16">
          <h2 className="mb-10 text-center font-display text-3xl font-normal text-white sm:text-4xl">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
