import { notFound } from "next/navigation";
import { CroppedMockup } from "@/components/CroppedMockup";
import { ProjectCard } from "@/components/ProjectCard";
import { getProject, projects } from "@/data/projects";
import { assets } from "@/lib/assets";

// Display sizes keep each mockup's crop aspect ratio (bbox width / bbox
// height) so the image isn't stretched, sized to fit inside the 1280x425
// hero banner (measurements from the original Figma design).
const heroMockupSpecs = {
  cinemex: {
    width: 540,
    height: 360,
    naturalWidth: 1536,
    naturalHeight: 1024,
    bbox: [118, 105, 1288, 859] as [number, number, number, number],
  },
  "uber-eats": {
    width: 256,
    height: 360,
    naturalWidth: 1536,
    naturalHeight: 1024,
    bbox: [518, 86, 601, 846] as [number, number, number, number],
  },
  "galactic-coffee": {
    width: 233,
    height: 360,
    naturalWidth: 1620,
    naturalHeight: 1080,
    bbox: [486, 157, 573, 884] as [number, number, number, number],
  },
} as const;

const cardIsologoSpecs = {
  cinemex: assets.cardIsologoCinemex,
  "uber-eats": assets.cardIsologoUberEats,
  "galactic-coffee": assets.cardIsologoGalacticCoffee,
} as const;

// Applied only from sm+ so the hero banner has no boxed background on mobile.
const heroBgResponsive = {
  cinemex: "sm:bg-hero-cinemex",
  "uber-eats": "sm:bg-hero-uber-eats",
  "galactic-coffee": "sm:bg-hero-galactic-coffee",
} as const;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectCaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug);

  const pageBgClassBySlug: Record<string, string> = {
    cinemex: "bg-case-cinemex-bright sm:bg-case-cinemex",
    "uber-eats": "bg-case-uber-eats-bright sm:bg-case-uber-eats",
    "galactic-coffee": "bg-case-galactic-coffee-bright sm:bg-case-galactic-coffee",
  };
  const pageBgClass = pageBgClassBySlug[project.slug] ?? project.pageBg;

  return (
    <section className={`${pageBgClass} px-4 py-8 sm:px-6 lg:px-10`}>
      {/* Hero banner — 1280x425, matching the original Figma design */}
      <div className="mx-auto max-w-[1280px]">
        <div
          className={`relative flex h-auto min-h-[280px] items-center overflow-hidden rounded-2xl bg-none ${heroBgResponsive[project.slug as keyof typeof heroBgResponsive]} px-6 py-10 sm:px-10 sm:py-14 lg:h-[425px] lg:px-20 lg:py-0`}
        >
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-[900px]">
              {project.slug === "cinemex" && (
                <div className="mb-6 flex items-center gap-4 lg:mb-14 lg:gap-9">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.cardLogo} alt="" className="h-8 w-auto object-contain sm:h-16 lg:h-[109px]" />
                  <p className="font-body text-3xl font-extrabold text-white sm:text-6xl lg:text-[84px]">Cinemex</p>
                </div>
              )}
              {project.slug === "uber-eats" && (
                <p className="mb-6 font-body text-3xl font-normal text-white sm:text-6xl lg:mb-16 lg:text-[120px]">
                  Uber <span className="font-extrabold">Eats</span>
                </p>
              )}
              {project.slug === "galactic-coffee" && (
                <div className="mb-6 flex items-center gap-3 lg:mb-12 lg:gap-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.cardLogo} alt="" className="h-6 w-6 object-contain sm:h-12 sm:w-12 lg:h-[78px] lg:w-[78px]" />
                  <p className="whitespace-nowrap font-display text-2xl font-bold text-white sm:text-4xl lg:text-[65px]">Galactic Coffee</p>
                </div>
              )}
              <h1
                className={`font-display text-[28px] font-bold text-white sm:text-4xl lg:text-5xl ${
                  project.slug === "galactic-coffee" ? "lg:whitespace-nowrap" : ""
                }`}
              >
                {project.heroTagline}
              </h1>
            </div>

            <div className="hidden items-center justify-center lg:flex lg:justify-end">
              <CroppedMockup
                src={project.heroMockup}
                alt=""
                {...heroMockupSpecs[project.slug as keyof typeof heroMockupSpecs]}
                style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.35))" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Intro + isologo card */}
        <div className="mt-4 flex flex-col gap-10 sm:mt-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-xl flex-col gap-6">
            {project.challenge.slice(0, 1).map((p, i) => (
              <p key={i} className="text-lg text-white/90">
                {p}
              </p>
            ))}
            <h2 className="font-body text-2xl font-extrabold text-white sm:text-3xl">
              {project.question}
            </h2>
            {project.intro.map((p, i) => (
              <p key={i} className="text-white/85">
                {p}
              </p>
            ))}
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cardIsologoSpecs[project.slug as keyof typeof cardIsologoSpecs]}
            alt={project.name}
            className="hidden h-[220px] w-[220px] shrink-0 self-center rounded-2xl object-cover lg:block"
          />
        </div>

        {/* Remaining challenge paragraphs */}
        {project.challenge.length > 1 && (
          <div className="mt-8 flex max-w-3xl flex-col gap-4">
            {project.challenge.slice(1).map((p, i) => (
              <p key={i} className="text-white/85">
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Objetivos / Insights / Hipótesis */}
        <div className="mt-12 rounded-2xl bg-black/25 p-6 sm:p-10">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 font-body text-2xl font-extrabold text-white">Objetivos:</h3>
              <ul className="flex flex-col gap-3 text-white/85">
                {project.objetivos.map((o, i) => (
                  <li key={i}>- {o}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-body text-2xl font-extrabold text-white">Insights:</h3>
              <ul className="flex flex-col gap-3 text-white/85">
                {project.insights.map((o, i) => (
                  <li key={i}>- {o}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="mb-4 font-body text-2xl font-extrabold text-white">Hipótesis:</h3>
            <div className="flex flex-col gap-4 text-white/85">
              {project.hipotesis.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Construyendo el producto final */}
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-2xl font-extrabold text-white sm:text-3xl">
              {project.construyendoTitle}
            </h3>
            {project.construyendo.map((p, i) => (
              <p key={i} className="text-white/85">
                {p}
              </p>
            ))}
          </div>
          {project.construyendoMockupLink ? (
            <a
              href={project.construyendoMockupLink}
              target="_blank"
              rel="noreferrer"
              className={`block max-w-md shrink-0 transition-opacity hover:opacity-90 lg:w-[380px] ${
                project.slug === "uber-eats" ? "mx-auto w-4/5" : "w-full"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.construyendoMockup}
                alt={`${project.name} mockup — open interactive prototype`}
                className="w-full rounded-xl object-contain"
              />
            </a>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.construyendoMockup}
              alt={`${project.name} mockup`}
              className={`max-w-md rounded-xl object-contain lg:w-[380px] ${
                project.slug === "uber-eats" ? "mx-auto w-4/5" : "w-full"
              }`}
            />
          )}
        </div>

        {/* Conclusiones */}
        <div className="mt-12 flex flex-col gap-4">
          <h3 className="font-body text-2xl font-extrabold text-white sm:text-3xl">
            Conclusiones y aprendizajes:
          </h3>
          {project.conclusiones.map((p, i) => (
            <p key={i} className="text-white/85">
              {p}
            </p>
          ))}
        </div>

        {/* Related projects */}
        <div className="mt-16">
          <h3 className="mb-6 text-center font-body text-2xl font-extrabold text-white sm:text-3xl">
            El viaje aún no termina, hay más proyectos que conocer:
          </h3>
          <div className="flex flex-col gap-6">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} variant="dark" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
